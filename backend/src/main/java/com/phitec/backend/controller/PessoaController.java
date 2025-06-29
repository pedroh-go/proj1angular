package com.phitec.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping
    public ResponseEntity<Pessoa> salvar(@RequestBody Pessoa pessoa) {

        // Salva no banco
        Pessoa pessoaSalva = pessoaRepository.save(pessoa);

        return ResponseEntity.ok(pessoaSalva);
    }

    @GetMapping
    public List<Pessoa> listar() {
        return pessoaRepository.findAll();
    }
}
