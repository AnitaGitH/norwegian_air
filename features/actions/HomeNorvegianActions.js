
var Pages = require('../pages/Pages.js');

var pages = new Pages();

var HomeNorvegianActions = function () {

    var homeNorvegianPage = pages.homeNorvegianPage;
    var sharedPage = pages.sharedPage;

    this.loginRegisterUser = function (email, password) {
        waitHelper.waitForElementToBeVisible(pages.sharedPage.signInButton(), 5000);
        pages.sharedPage.signInButton().click();
        pages.sharedPage.usernameField().sendKeys(email);
        pages.sharedPage.passwordField().sendKeys(password);
        pages.sharedPage.saveButtonLarge().click();
        return pages.homeNorvegianPage.homeLink().click();
    };

    this.selectOriginFlight = function () {
        pages.homeNorvegianPage.originLocation().click();
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.originAirport(), 5000);
        return browser.executeScript("arguments[0].click();", pages.homeNorvegianPage.originAirport());
    };
    this.selectDestinationFlight = function () {

        pages.homeNorvegianPage.departureLocation().click();
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.departureAirport(), 5000);
        return browser.executeScript("arguments[0].click();", pages.homeNorvegianPage.departureAirport());
    };
    this.clickOneWay = function () {
        return browser.executeScript("arguments[0].click();", pages.homeNorvegianPage.oneWay());
    };
    this.selectOutboundDate = function () {
        pages.homeNorvegianPage.outboundCalendar().click();
        return pages.homeNorvegianPage.actualDate().get(1).click();
    };
    this.clickSearchAndBook = function () {
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.searchButton(), 5000);
        return pages.homeNorvegianPage.searchButton().click();
    };
    this.clickOutboundFares = function () {
        return pages.homeNorvegianPage.outboundFares().click();
    };
    this.clickStartReservation = function () {
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.startReservation(), 5000);
        return browser.executeScript("arguments[0].click();", pages.homeNorvegianPage.startReservation());
    };
    this.clickContinueReservationButton = function () {
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.continueReservationButton(), 5000);
        return browser.executeScript("arguments[0].click();", pages.homeNorvegianPage.continueReservationButton());
    };
    this.selectVacantSeat = function () {
        var selected = pages.homeNorvegianPage.vacantSeat().get(3);
        return browser.executeScript("arguments[0].click();", selected);
    };
    this.clickContinueButton = function () {
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.continueButton(), 5000);
        return browser.executeScript("arguments[0].click();", pages.homeNorvegianPage.continueButton());
    };
    this.clickProceedToPayment = function () {
        return pages.homeNorvegianPage.proceedToPayment().click();
    };
    this.enterPaymentInformation = function (cardNumber, cardHolder, verificationCode) {
        browser.ignoreSynchronization = true;
        pages.homeNorvegianPage.cardTypeDrop().click();
        pages.homeNorvegianPage.cardType().get(4).click();
        browser.sleep(2000);
        pages.homeNorvegianPage.cardNumber().sendKeys(cardNumber);
        browser.sleep(2000);
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.cardHolder(), 5000);
        pages.homeNorvegianPage.cardHolder().click();
        browser.sleep(1000);
        pages.homeNorvegianPage.cardHolder().sendKeys(cardHolder);
        browser.sleep(2000);
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.expiryMonth(), 5000);
        pages.homeNorvegianPage.expiryMonth().click();
        pages.homeNorvegianPage.expiryMonthNumber().get(3).click();
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.expiryYear(), 5000);
        pages.homeNorvegianPage.expiryYear().click();
        browser.sleep(1000);
        pages.homeNorvegianPage.expiryYearNumber().get(5).click();
        //waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.verificationCode(), 5000);
        return pages.homeNorvegianPage.verificationCode().sendKeys(verificationCode);

    };
    this.checkboxConfirm = function () {
        browser.sleep(4000);
        waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.checkBoxConf(), 5000);
        return pages.homeNorvegianPage.checkBoxConf().click();
    };
    this.clickConfirmAndPay = function () {
        browser.sleep(2000);
       waitHelper.waitForElementToBeVisible(pages.homeNorvegianPage.confAndPay(), 5000);
        return pages.homeNorvegianPage.confAndPay().click();
    };
    
};

module.exports = HomeNorvegianActions;

