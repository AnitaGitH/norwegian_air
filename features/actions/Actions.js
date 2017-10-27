var HomeNorvegianActions = require('./HomeNorvegianActions.js');
var RegisterUserActions = require('./RegisterUserActions.js');
var SharedActions = require('./SharedActions.js');

var Actions = function () {
    this.homeNorvegianActions = new HomeNorvegianActions();
    this.registerUserActions = new RegisterUserActions();
    this.sharedActions = new SharedActions();
};

module.exports = Actions;