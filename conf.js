//cucumber.conf.js
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 30000,
  allScriptsTimeout: 200000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function (config, capabilities) {
    browser.driver.manage().window().maximize();
    var path = require('path');
    var fs = require('fs');
    const resultsJsonLocation = path.join(__dirname, 'tests_result_norwegian.json');
    if (fs.existsSync(resultsJsonLocation)) {
      fs.unlinkSync(resultsJsonLocation)
    }; 
    var Actions = require('./features/actions/Actions.js');
    var Pages = require('./features/pages/Pages.js');
    var waitHelper = require('./features/helpers/waitHelper.js');
    var helper = require('./features/helpers/helper.js');
 
    global.EC = protractor.ExpectedConditions;
    global.actions = new Actions();
    global.pages = new Pages();
    global.waitHelper = new waitHelper();
    global.helper = new helper();
    global.username;

    var MailListener = require("mail-listener2");
    
    var mailListener = new MailListener({
     // username: "username",
      username: "testCTrade123@gmail.com",
      password: "pass123A",
      host: "imap.gmail.com",
      port: 993, // imap port
      tls: true,
      connTimeout: 10000, // Default by node-imap
      authTimeout: 5000, // Default by node-imap,
      debug: console.log, // Or your custom function with only one incoming argument. Default: null
      tlsOptions: { rejectUnauthorized: false },
      mailbox: "INBOX", // mailbox to monitor
      searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved
      markSeen: true, // all fetched email willbe marked as seen and not fetched next time
      fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
      mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
      attachments: true, // download attachments as they are encountered to the project directory
      attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
    });
    
    mailListener.start(); // start listening
    
    // stop listening
    //mailListener.stop();
    
    mailListener.on("server:connected", function(){
      console.log("imapConnected");
    });
    
    mailListener.on("server:disconnected", function(){
      console.log("imapDisconnected");
    });
    
    mailListener.on("error", function(err){
      console.log(err);
    });
    
    mailListener.on("mail", function(mail, seqno, attributes){

      // do something with mail object including attachments
      console.log("emailParsed", mail);
      // mail processing code goes here
    });
    
    mailListener.on("attachment", function(attachment){
      console.log(attachment.path);
    });
    


    global.mailListener = mailListener;

    
 


  

  },
  // Spec patterns are relative to this directory.
  specs: [
    'features/features/homeNorvegian.feature',
    'features/features/registerUser.feature',
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: [
              'features/step_definitions/homeNorvegianSteps.js',
              'features/step_definitions/registerUserSteps.js',
              'features/hooks.norwegian.js',     
  ],
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true,
    strict: true,
    showColors: true,
  },
};