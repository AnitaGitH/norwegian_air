var Pages = require('../pages/Pages.js');

var pages = new Pages();

var RegisterUserActions = function () {

    var registerUserPage = pages.registerUserPage;
    var sharedPage = pages.sharedPage;

    this.clickRegisterLink = function(){
        waitHelper.waitForElementToBeVisible(pages.registerUserPage.registerLink(), 5000);
        pages.registerUserPage.registerLink().click();
    };

    this.createNewUser = function (username,password, passwordConfirm, firstname, lastname, address, postalCode,city, phoneNum) {
        waitHelper.waitForElementToBeVisible(pages.sharedPage.usernameField(), 5000);
        pages.sharedPage.usernameField().sendKeys(username);
        pages.sharedPage.passwordField().sendKeys(password);
        pages.registerUserPage.passwordConfirmField().sendKeys(passwordConfirm);
        pages.registerUserPage.firstNameField().sendKeys(firstname);
        pages.registerUserPage.lastNameField().sendKeys(lastname);
        pages.registerUserPage.addressField().sendKeys(address);
        pages.registerUserPage.postalField().sendKeys(postalCode);
        pages.registerUserPage.cityField().sendKeys(city);
        pages.registerUserPage.countryButton().click();
        pages.registerUserPage.allCountries().get(28).click();
        pages.registerUserPage.genderButton().click();
        pages.registerUserPage.allGenders().get(2).click();
        pages.registerUserPage.phoneCountryButton().click();
        pages.registerUserPage.allPhoneCountries().get(27).click();
        pages.registerUserPage.phoneField().sendKeys(phoneNum); 
        waitHelper.waitForElementToBeVisible(pages.sharedPage.saveButton(), 5000);
        return pages.registerUserPage.saveButton().click();
  
       
    };
  
};
module.exports = RegisterUserActions;