package com.phitec.backend.person.controller;

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

import com.phitec.backend.person.entity.PersonEntity;
import com.phitec.backend.person.repository.PersonRepository;

@RestController
@RequestMapping("/api/persons")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    //Salvar
    @PostMapping
    public ResponseEntity<PersonEntity> save(@RequestBody PersonEntity person) {

        // Salva no banco
        PersonEntity personSave = personRepository.save(person);

        return ResponseEntity.ok(personSave);
    }

    //Listar
    @GetMapping
    public List<PersonEntity> list() {
        return personRepository.findAll();
    }

    /**
     * Buscar pessoa por ID (usado na edição)
     */
    @GetMapping("/{id}")
    public ResponseEntity<PersonEntity> searchById(@PathVariable Long id) {
        return personRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    //alterar/atualizar
    @PutMapping("/{id}")
    public ResponseEntity<PersonEntity>update(@PathVariable Long id, @RequestBody PersonEntity personUpdated){
        return personRepository.findById(id)
        .map(person ->{
            person.setName(personUpdated.getName());
            person.setEmail(personUpdated.getEmail());
            PersonEntity personSaved = personRepository.save(person);
            return ResponseEntity.ok(personSaved);

        }).orElse(ResponseEntity.notFound().build());
    }

    //deletar um registro
    @DeleteMapping("/{id}")
    public ResponseEntity<Void>delete(@PathVariable Long id){
        if(personRepository.existsById(id)){
            personRepository.deleteById(id);
            return ResponseEntity.noContent().build();//204
        }else{
            return ResponseEntity.notFound().build();//404
        }
    }
}
