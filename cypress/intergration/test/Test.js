/// <reference types = "Cypress" />




describe("test", () => {
    it('first test case', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('input[placeholder = "Search for Vegetables and Fruits"]')
        .type("ca");
        cy.get('.search-button')
        .click();
        
        
        cy.wait(2000);

        cy.get('.products').
        find('.product')
        .each(($el,index, $list) => {const productName = $el.find('h4.product-name').text();
        if (productName.includes('Capsicum')){
            $el.find('button').trigger('click');
            

        } });
        





     

    })

})