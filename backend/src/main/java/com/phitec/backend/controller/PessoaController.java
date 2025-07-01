package com.phitec.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.phitec.backend.model.Pessoa;
import com.phitec.backend.repository.PessoaRepository;

@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {

    @Autowired
    private PessoaRepository pessoaRepository;

    //Salvar
    @PostMapping
    public ResponseEntity<Pessoa> salvar(@RequestBody Pessoa pessoa) {

        // Salva no banco
        Pessoa pessoaSalva = pessoaRepository.save(pessoa);

        return ResponseEntity.ok(pessoaSalva);
    }

    //Listar
    @GetMapping
    public List<Pessoa> listar() {
        return pessoaRepository.findAll();
    }

    /**
     * Buscar pessoa por ID (usado na edição)
     */
    @GetMapping("/{id}")
    public ResponseEntity<Pessoa> buscarPorId(@PathVariable Long id) {
        return pessoaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    //alterar/atualizar
    @PutMapping("/{id}")
    public ResponseEntity<Pessoa>atualizar(@PathVariable Long id, @RequestBody Pessoa pessoaAtualizada){
        return pessoaRepository.findById(id)
        .map(pessoa ->{
            pessoa.setNome(pessoaAtualizada.getNome());
            pessoa.setEmail(pessoaAtualizada.getEmail());
            Pessoa pessoaSalva = pessoaRepository.save(pessoa);
            return ResponseEntity.ok(pessoaSalva);

        }).orElse(ResponseEntity.notFound().build());
    }

    //deletar um registro
    @DeleteMapping("/{id}")
    public ResponseEntity<Void>excluir(@PathVariable Long id){
        if(pessoaRepository.existsById(id)){
            pessoaRepository.deleteById(id);
            return ResponseEntity.noContent().build();//204
        }else{
            return ResponseEntity.notFound().build();//404
        }
    }
}
