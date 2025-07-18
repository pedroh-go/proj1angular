package com.phitec.backend.user.service;

import java.util.Set;

import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Service;

import com.phitec.backend.user.entity.UserEntity;
import com.phitec.backend.user.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Este serviço será chamado assim que o usuário logar (via filtro ou interceptor) 
     * para registrar no banco da aplicação, caso ainda não exista.
     * @param oidcUser
     * @return
     */
    public UserEntity getOrCreateUserFromToken(OidcUser oidcUser) {
        String sub = oidcUser.getSubject();

        return userRepository.findBySub(sub).orElseGet(() -> {
            UserEntity user = new UserEntity();

            user.setSub(sub);
            user.setEmail(oidcUser.getEmail());
            user.setName(oidcUser.getFullName());
            user.setRoles(Set.of("CLIENT"));// padrão inicial

            return userRepository.save(user);
        });
    }

}