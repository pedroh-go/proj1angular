package com.phitec.backend.person.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phitec.backend.person.entity.PersonEntity;

public interface PersonRepository extends JpaRepository<PersonEntity, Long>{

    // Métodos automáticos(exemplo: save, findById, deleteById, findAll) herdados do JpaRepository
    // Não precisa implementar!
}
