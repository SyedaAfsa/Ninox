import signUp from '../pages/signUp'

describe('Test name', () =>{
  const email ='test@test.com';
	beforeEach(()=>{
    signUp.goToSignUpPage();
  	})

	it('Valid password is entered following all the Owasp rules',() =>{
    signUp.enterEmail(email);
    signUp.enterPassword('Testing123?');
    signUp.passwordStrength(4);
	});
  it('Invalid password is entered not following all the Owasp rules',() =>{
    signUp.enterEmail(email);
    // Special character missing
    signUp.enterPassword('Testing123')
    signUp.passwordStrength(3);
    // Alphanumeric missing
    signUp.enterPassword('Testing?')
    signUp.passwordStrength(3);
    // No capital letter is provided
    signUp.enterPassword('testing123?')
    signUp.passwordStrength(3);
    // No small letter is provided
    signUp.enterPassword('TESTING123?')
    signUp.passwordStrength(3);
    // Minimum length of password characters is not fulfilled
    signUp.enterPassword('Test12?')
    signUp.passwordStrength(3);
	});

  // Adding skip to it until the functionality is implemented
  it.skip('Create account button should be disabled until valid email and password is entered',() =>{
    signUp.enterEmail(email);
    signUp.enterPassword('Testing123');
    signUp.passwordStrength(3);
    cy.get('.button')
      .contains('Create account')
      .should('be.visible')
      .and('be.disabled');
	});
  
  // Adding skip to it until the functionality is implemented
  it.skip('Should show a field error if the password rules are not satisfied',() =>{
    signUp.enterEmail(email);
    signUp.enterPassword('Testing123');
    cy.get('[data_test="field_error"]')
      .should('be.visible')
      .contains('Password is not fulfuliing the requirements');
	});

  // Adding skip to it until the functionality is implemented
  it.skip('Password field should be disabled until email is entered',() =>{
    cy.get('input[name="password"]')
      .should('be.disabled');
    signUp.enterEmail(email);
    signUp.enterPassword('Testing123?');
    cy.get('[class=password-hint-container]')
      .should('be.visible');
    cy.get('[class=fulfilled]')
      .and('have.length',4);
	});
})