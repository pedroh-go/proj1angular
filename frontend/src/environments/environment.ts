export const environment = {
  production: false,

  // Backend API
  apiUrl: 'http://localhost:8080/api',

  // Autenticação com Keycloak (ambiente local)
  issuer: 'http://localhost:8081/realms/proj1angular',
  clientId: 'proj1angular-app',
  redirectUri: window.location.origin, //detecta automaticamente a origem atual da aplicação local ou não
  ambiente: 'DESENVOLVIMENTO' //indica o ambiente
};