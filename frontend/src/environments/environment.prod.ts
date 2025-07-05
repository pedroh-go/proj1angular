console.log('🔧 Environment carregado: PRODUÇÃO');
/**
 * este será é o enviroment do ambiente de produção. 
 * No momento usado para o GitPod, mas depois será alterado para produção.
 */

export const environment = {
  production: true,

  // URL da sua API Spring Boot no Gitpod
  apiUrl: 'https://8080-pedrohgo-proj1angular-7xyo5c7jdnv.ws-us120.gitpod.io/api',
  //apiUrl: 'http://localhost:8080/api',

  // Autenticação com Keycloak no Gitpod
  issuer: 'https://8081-pedrohgo-proj1angular-7xyo5c7jdnv.ws-us120.gitpod.io/realms/proj1angular',
  //issuer: 'http://localhost:8081/realms/proj1angular',
  clientId: 'proj1angular-app',
  redirectUri: window.location.origin,
  ambiente: 'PRODUÇÃO' //indica o ambiente
};
