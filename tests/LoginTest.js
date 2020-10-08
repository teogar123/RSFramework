const actions = require('../base/Actions');
const loginPage = require('../page_objects/LoginPage');
const page = require('../page_objects/Page');

beforeAll( function () {
    page.openUrl();
});

describe('Given: I want to login' , function (){
    it('Wnen: Fulfiing the login form' , function (){
        loginPage.loginflow();
    })
})