
module.exports = function () {
    this.setDefaultTimeout(60 * 1000);
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    var Cucumber = require('cucumber');
    chai.use(chaiAsPromised);
    var expect = chai.expect;

    // register user scenario
    this.When(/^I click Signin button$/, function () {
        pages.sharedPage.signInButton().click();
        pages.registerUserPage.logoutButton().click();
        return pages.sharedPage.signInButton().click();

    });
    this.When(/^I click register button$/, function () {
        browser.sleep(2000);
        return actions.registerUserActions.clickRegisterLink();
    });
    this.When(/^I enter all credentials$/, function () {
     var username = helper.getRandomUsername();
     var phoneNum = helper.getRandomPhoneNum();
        return actions.registerUserActions.createNewUser(username, "password123", "password123", "firstName", "lastName", "Fra Matije Divkovica", "71000", "Sarajevo", phoneNum); 
    });
    this.Then(/^I should be able to see my profile page$/, function () {
     
      waitHelper.waitForElementToBeVisible(pages.registerUserPage.registerConfirm(), 5000);
         expect(pages.registerUserPage.registerConfirm().getText()).to.eventually.equal("My Travels"); 
    });
    this.Then(/^I should Logout$/, function () {
       return pages.registerUserPage.logoutButton().click();     
      });
};
