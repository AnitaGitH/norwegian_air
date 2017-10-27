var Pages = require('../pages/Pages.js');

var pages = new Pages();

var SharedActions = function () {

    var sharedPage = pages.sharedPage;

  
    this.setUsername = function(email){
      return usernameField().sendKeys(email);
    };
    this.setPassword = function (password) {
        return passwordField.sendKeys(password);
    };
   this.loginConfirmation = function(){
        loginConfirm.isDisplayed().toBeTruthy;
    };

};

module.exports = SharedActions;