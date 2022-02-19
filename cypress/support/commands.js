import "@testing-library/cypress/add-commands"
const auth0 = require('auth0-js');

Cypress.Commands.add('login', (overrides = {}) => {
    Cypress.log({
      name: 'loginViaAuth0',
    });
  
    const options = {
      method: 'POST',
      url: Cypress.env('auth_url'),
      body: {
        grant_type: 'password',
        username: Cypress.env('auth_username'),
        password: Cypress.env('auth_password'),
        audience: Cypress.env('auth_audience'),
        scope: 'openid profile email',
        client_id: Cypress.env('auth_client_id'),
        client_secret: Cypress.env('auth_client_secret'),
      },
    };
    cy.request(options);
  });

 

Cypress.Commands.add('loginAsAdmin', (overrides = {}) => {
  Cypress.log({
    name: 'loginAsAdminBySingleSignOn',
  });

  const webAuth = new auth0.WebAuth({
    domain: 'dev-vxyxnrxg.us.auth0.com', // Get this from https://manage.auth0.com/#/applications and your application
    clientID: 'kSyuXO0dc9dkK2s6ISecJmnCN6NrGyNd', // Get this from https://manage.auth0.com/#/applications and your application
    responseType: 'token id_token',
  });

  webAuth.client.login(
    {
      realm: 'Username-Password-Authentication',
      username: 'gusmonterop@gmail.com',
      password: '29863402gustavoP!',
      audience: 'https://dev-vxyxnrxg.us.auth0.com/api/v2/', // Get this from https://manage.auth0.com/#/apis and your api, use the identifier property
      scope: 'openid',
    },
    function (err, authResult) {
      // Auth tokens in the result or an error
      if (authResult && authResult.accessToken && authResult.idToken) {
        const token = {
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          // Set the time that the access token will expire at
          expiresAt: authResult.expiresIn * 1000 + new Date().getTime(),
        };

        window.sessionStorage.setItem(
          'my-super-duper-app:storage_token',
          JSON.stringify(token)
        );
      } else {
        console.error('Problem logging into Auth0', err);
        throw err;
      }
    }
  );
});

Cypress.Commands.add('visitHome', (overrides = {}) => {
  cy.visit('http://localhost:3000/', {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear();
    },
  });
});


