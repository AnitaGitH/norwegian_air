
var SharedPage = function () {


    this.signInButton = function () {
        return element(by.xpath('//a[@class="page-header__profile__trigger"]'));
    };
    this.usernameField = function () {
        return element(by.id('username'));
    };
    this.passwordField = function () {
        return element(by.id('password'));
    };
    this.saveButtonLarge = function () {
        return element(by.xpath('//button[contains(text(),"Sign In")]'));
    };
    this.loginConfirm = function () {
        return element(by.xpath('//a[@href="/us/start/profile/edit/"]'));
    };
};

module.exports = SharedPage;