class SignUpPage {
    enterEmail(email){
        cy.get('input[name="email"]')
          .clear()
          .type(email);
    }
    enterPassword(password){
        cy.get('input[name="password"]')
          .should('be.visible')
          .clear()
          .type(password);
    }
    passwordStrength(length){
        cy.get('[class=password-hint-container]')
          .should('be.visible');
        cy.get('[class=fulfilled]')
          .and('have.length', length);
    }
    goToSignUpPage(){
        cy.visit('/');
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        cy.get(':nth-child(1) > .radio-control').click();
        cy.wait(1000);
        cy.get('.button').should('be.visible').and('be.enabled').click();
    }
}

export default new SignUpPage