var chai = require('chai');
var chaiSub = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var Pages = require('../pages/Pages.js');

var pages = new Pages();

var helper = function () {

    this.getRandomUsername = function () {
        var randomUsername = Math.random().toString(8).slice(2, 10);
        return username = "testCTrade123" + randomUsername + "@gmail.com";
    };
    this.getRandomPhoneNum = function () {
        var randomPhoneNum = Math.random().toString(6).slice(2, 8);
        return phoneNum = "61" + randomPhoneNum.toString();
    };









};
module.exports = helper;