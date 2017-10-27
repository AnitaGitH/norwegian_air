var HomeNorvegianPage = function () {


    this.homeLink = function () {
        return element(by.xpath('//a[@class="breadcrumbs__link"][@href="/us/"]'));
    };
    this.originLocation = function () {
        return element(by.id('fly_from'));
    };
    this.originAirport = function () {
        return element(by.xpath('//*[contains(text(),"Amsterdam (AMS)")]'));
    };
    this.departureLocation = function () {
        return element(by.id('fly_to'));
    };
    this.departureAirport = function () {
        return element(by.xpath('//*[contains(text(),"Algarve-Faro (FAO)")]'));
    };
    this.oneWay = function () {
        return element(by.xpath('//*[@value="OneWay"]'));
    };
    this.outboundCalendar = function () {
        return element(by.xpath('//*[@id="outboundDate"]//input'));
    };
    this.actualDate = function () {
        return element.all(by.xpath('//*[@id="outboundDate"]//button[@class="btn btn-default btn-sm"][@aria-disabled="false"]'));
    };
    this.calendarNav = function(){
        return element(by.xpath('//button[@class="calendarnavigation__button pull-right" ]'));
    };
    this.searchButton = function () {
        return element(by.id('searchButton'));
    };
    this.outboundFares = function () {
        return element(by.id('FlightSelectOutboundStandardFlex0'));
    };
    this.nextDay = function(){
        return element(by.xpath('//span[@class="navlink nextdaylink"]'));
    };
    this.startReservation = function () {
        return element(by.id('ctl00_MainContent_ipcAvaDay_lbtContinue'));
    };
    this.continueReservationButton = function () {
        return element(by.id('ctl00_MainContent_ipcResMakePax_ipcContinueButtonBar_lnkContinue'));                                  
    };
    this.continueButton = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeSeating_ipcButtonBar_lnkContinue'));
                                      
    };
    this.continueButton2 = function () {
        return element(by.xpath('//a[@class="button"]'));
    };
    this.proceedToPayment = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeNonAir_ipcContinueButtonBar_lnkContinue'));
    };
    this.vacantSeat = function () {
        return element.all(by.xpath('//*[@class="seatVacant"]'));
    };
    this.cardTypeDrop = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcPayment_ddlCcType'));
    };
    this.cardType = function () {
        return element.all(by.xpath('//select[@id="ctl00_MainContent_ipcResMakeConfirm_ipcPayment_ddlCcType"]/option'));
    };
    this.cardNumber = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcPayment_txtCcNumber'));
    };
    this.cardHolder = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcPayment_txtCcHolder'));
    };
    this.expiryMonth = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcPayment_ddlCcExpiryMonth'));
    };
    this.expiryMonthNumber = function () {
        return element.all(by.xpath('//select[@id="ctl00_MainContent_ipcResMakeConfirm_ipcPayment_ddlCcExpiryMonth"]/option'));
    };
    this.expiryYear = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcPayment_ddlCcExpiryYear'));
    };
    this.expiryYearNumber = function () {
        return element.all(by.xpath('//select[@id="ctl00_MainContent_ipcResMakeConfirm_ipcPayment_ddlCcExpiryYear"]/option'));
    };
    this.verificationCode = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcPayment_txtCcCvc'));
    };
    this.checkBoxConf = function () {
        return element(by.xpath('//input[@id="checkboxConfirm"]'));
    };
    this.confAndPay = function () {
        return element(by.id('ctl00_MainContent_ipcResMakeConfirm_ipcButtonBar_lnkContinue'));
    };
    this.warnMessage = function () {
        return element(by.xpath('//*[contains(text(),"Credit card was not authorized. Make sure all fields are filled in correctly.")]'));
    };

};

module.exports = HomeNorvegianPage;