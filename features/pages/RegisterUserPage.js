var RegisterUserPage = function () {

    
    this.registerLink = function () {
        return element(by.xpath('//a[contains(text(),"register")]'));
    };
    this.passwordConfirmField = function () {
        return element(by.id('passwordConfirm'));
    };
    this.firstNameField = function () {
        return element(by.id('firstname'));
    };
    this.lastNameField = function () {
        return element(by.id('lastname'));
    };
    this.addressField = function () {
        return element(by.id('address'));
    };
    this.postalField = function () {
        return element(by.id('postalcode'));
    };
    this.cityField = function () {
        return element(by.id('city'));
    };
    this.countryButton = function () {
        return element(by.id('country'));
    };
    this.allCountries = function () {
        return element.all(by.xpath('//select[@id="country"]/option'));
    };
    this.genderButton = function () {
        return element(by.id('gender'));
    };
    this.allGenders = function () {
        return element.all(by.xpath('//select[@id="gender"]/option'));
    };
    this.phoneCountryButton = function () {
        return element.all(by.id('country_37'));
    };
    this.allPhoneCountries = function () {
        return element.all(by.xpath('//select[@id="country_37"]/option'));
    };
    this.phoneField = function () {
        return element(by.id('number_37'));
    };
    this.saveButton = function () {
        return element(by.xpath('//button[@class="button button--secondary"]'));
    };
    this.registerConfirm = function () {
        return element(by.xpath('//h1[contains(text(),"My Travels")]'));
    };
    this.logoutButton = function () {
        return element(by.xpath('//a[@class="page-header__profile__logout"]'));
    };

};

module.exports = RegisterUserPage;