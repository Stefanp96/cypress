class HomePage
{

    getEditBox()
    {
       return cy.get(':nth-child(1) > .form-control').type(globalThis.data.name);

        
    }
    getTwoWayData()
    {
        return cy.get(':nth-child(4) > .ng-untouched');    
    }

    gerGender(){
        return cy.get('select');
        
    }
    
    getShopTab(){
        return cy.get( cy.get(':nth-child(2) > .nav-link'));
    }
}

export default HomePage;