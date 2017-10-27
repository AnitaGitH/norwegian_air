//afterHooks.angularPage.js

var path = require("path")
var Cucumber = require('cucumber')
var JsonFormatter = Cucumber.Listener.JsonFormatter()
var fs = require('fs')
console.log('Pokrenulooooo!!___**************')
module.exports = function afterScenario () {
this.registerHandler('AfterScenario', function (scenario, callback) {
    console.log('\n After each scenario...');
    if (scenario.isFailed() ===true) {
      console.log('\n Scenario failed \n\n\n\n\n\n\n...');
      callback.fail(new Error("\n\n\n\nThis scenario definitely failed!!"));
    }
  });
}