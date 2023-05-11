
import HomePage from '../pageObject/homePage'
import ProductPage from '../pageObject/productPage'


describe('editVBOx',() => 
{

    before (() => {
        cy.fixture('example').then((data) => 
        {
            globalThis.data=data

        })
      

    })
    
    it('enterName',() =>{
        const homePage = new HomePage();
        const productPage = new ProductPage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getEditBox().type(globalThis.data.name);


        cy.openProductPage();
    
        
        globalThis.data.productName.forEach((element) =>{
            cy.selectProduct(element);
        
        })

        productPage.getCheckoutButton().click();

        cy.get(['numberOfAdults']).contains


    })

})