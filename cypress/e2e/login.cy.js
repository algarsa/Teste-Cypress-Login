describe('Teste de Login', function () {
  
  const url = 'https://bugbank.netlify.app/'
  const email = 'alice.santos@email.com'
  const name = 'Alice'
  const password = String(Math.ceil(Math.random()*1000000))
  const mensagem = 'foi criada com sucesso'

  context('HTML form submission', function () {
    beforeEach(function () {
      cy.visit(url)
    })

  
  it('Realizar cadastro de usuário e acessar cadastro realizado', function () {

    //cy.visit(url);

    cy.contains('Registrar').click()

    // Fazendo cadastro de usuário
    cy.get('input[type="email"]').eq(1).type(email, {force: true})
    //cy.get('input[type="name"]').eq(1).type(name, {force: true})
    cy.get('input[type="name"]').type(name, {force: true})
    cy.get('input[type="password"]').eq(1).type(password, {force: true})
    cy.get('input[name="passwordConfirmation"]').type(password, {force: true})
    cy.contains('Cadastrar').click({force: true})

    cy.get('#modalText').should('contain', mensagem);
    cy.get('#btnCloseModal').should('be.visible')
    cy.contains('Fechar').click({force: true})

    // Fazendo Login no sistema com o usuário criado
    cy.get('input[name="email"').eq(0).type(email, {force: true});
    cy.get('input[name="password"').eq(0).type(password, {force: true});
    cy.contains('Acessar').click();

    // Verificando se o login foi feito com sucesso
    cy.get('p[id="textName"').should('contain.text', 'Olá');
    cy.get('p[id="textName"').should('contain.text', name);
    cy.get('p[class="home__Text-sc-1auj767-9 jjmPHj"').should('contain.text', 'bem vindo ao BugBank');
  })
})
})