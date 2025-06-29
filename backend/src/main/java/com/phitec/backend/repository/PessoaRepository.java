package com.phitec.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phitec.backend.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

    // Métodos automáticos(exemplo: save, findById, deleteById, findAll) herdados do JpaRepository
    // Não precisa implementar!
}
