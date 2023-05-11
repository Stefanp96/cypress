/// <reference types = "Cypress" />


describe('test2',() => {
    
    it('addToCart',() =>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        

        // CheckBox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('input[type = checkbox]').check(['option2','option3']).should('have.value','option2','option2');
      

        //Static Select
        cy.get('select').select('option1').should('have.value','option1')

        //Dynamic Select

        cy.get('#autocomplete').type('ind').each(($el, index, $list) => {
        } )


        //Alert
        cy.get('#alertbtn').click();
       

        //window:alert

        cy.on('window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        //Switch Tab
       // cy.get('#opentab').invoke('removeAttr','target').click();
        //cy.wait(3000);
        //cy.url().should('include','www.rahulshettyacademy.com');
        //cy.go('back');



        //Lists Forms

        cy.get('tr td:nth-child(2)').each(($el,index,$list) => {
            
        const text = $el.text();
        if (text.includes('Pthon')){
            cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
            
                expect(price .text()).to.equal('25');
            } )
        }

        })


        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include','top');
    } )






})