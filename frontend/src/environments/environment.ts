console.log('🔧 Environment carregado: DESENVOLVIMENTO');

export const environment = {
  production: false,

  // Backend API: a porta abaixo deve ser igual a variável BACKEND_PORT definida no .env
  apiUrl: 'http://localhost:8080/api',

  // Autenticação com Keycloak (ambiente local): a porta abaixo deve ser igual a variável KEYCLOAK_PORT definida no .env
  issuer: 'http://localhost:8081/realms/proj1angular',
  clientId: 'proj1angular-app',
  redirectUri: window.location.origin, //detecta automaticamente a origem atual da aplicação local ou não
  ambiente: 'DESENVOLVIMENTO' //indica o ambiente
};