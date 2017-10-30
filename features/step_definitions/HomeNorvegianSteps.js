
module.exports = function () {

    this.setDefaultTimeout(60 * 1000);
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    var Cucumber = require('cucumber');
    chai.use(chaiAsPromised);
    var expect = chai.expect;
    var EC = protractor.ExpectedConditions;

    this.Given(/^I go to "([^"]*)"$/, function (site) {
        browser.get(site);
    });
    // flight reservation with invalid card
    this.When(/^I login as registered user$/, function () {
        return actions.homeNorvegianActions.loginRegisterUser("sdss@gmail.com", "auto123A");
    });
    this.When(/^I select origin and destination fligt$/, function () {
        actions.homeNorvegianActions.selectOriginFlight();
        return actions.homeNorvegianActions.selectDestinationFlight();
    });
    this.When(/^I check one\-way direction$/, function () {
        return actions.homeNorvegianActions.clickOneWay();
    });
    this.When(/^I select outbound date$/, function () {
        return actions.homeNorvegianActions.selectOutboundDate();
    });
    this.When(/^I click search and book button$/, function () {
        return actions.homeNorvegianActions.clickSearchAndBook();
    });
    this.When(/^I check outbound fare$/, function () {
        browser.ignoreSynchronization = true;
        return actions.homeNorvegianActions.clickOutboundFares();
    });
    this.When(/^I click start reservation button$/, function () {
        browser.sleep(4000);
        return actions.homeNorvegianActions.clickStartReservation();
    });
    this.When(/^I click continue and select seat$/, function () {
        actions.homeNorvegianActions.clickContinueReservationButton();
        actions.homeNorvegianActions.selectVacantSeat();
        browser.sleep(3000);
        actions.homeNorvegianActions.clickContinueButton();
        return actions.homeNorvegianActions.selectVacantSeat();
    });
    this.When(/^I click continue$/, function () {
        return actions.homeNorvegianActions.clickContinueButton();
    });
    this.When(/^I click proceed to payment$/, function () {
        return actions.homeNorvegianActions.clickProceedToPayment();
    });
    this.When(/^I enter Payment information$/, function () {
       // browser.ignoreSynchronization = true;
        return actions.homeNorvegianActions.enterPaymentInformation("5362746430604487", "firstName lastName", "068");
    });
      this.When(/^I check I accept tearms checkbox$/, function () {
       return actions.homeNorvegianActions.checkboxConfirm();
      });
      this.When(/^I click confirm and pay button$/, function () {
          return actions.homeNorvegianActions.clickConfirmAndPay();
      });
     this.Then(/^I should be able to see warning message for invalid card$/, function () {
         browser.sleep(5000);
          var warnMessage = element(by.xpath('//*[contains(text(),"Credit card was not authorized. Make sure all fields are filled in correctly.")]'));
          waitHelper.waitForElementToBeVisible(warnMessage, 5000);
          return expect(warnMessage.getText()).to.eventually.equal("Credit card was not authorized. Make sure all fields are filled in correctly."); 
          });
     
};

