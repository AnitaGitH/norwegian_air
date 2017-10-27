var HomeNorvegianPage = require('./HomeNorvegianPage.js');
var RegisterUserPage = require('./RegisterUserPage.js');
var SharedPage = require('./SharedPage.js');
var Pages = function () {
    this.homeNorvegianPage = new HomeNorvegianPage();
    this.sharedPage = new SharedPage();
    this.registerUserPage = new RegisterUserPage();
    
};
module.exports = Pages;