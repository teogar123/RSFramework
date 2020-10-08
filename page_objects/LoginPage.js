const actions = require('../base/Actions.js');






function LoginPage () {
  this.userNameField = element(by.xpath("//input[@id='identifierId']"));
  this.passwordField = element(by.xpath("//input[@name='password']"));
  this.submitButton = element(by.xpath("//button[@class='primary-button ripple no-margin']"));
  this.googleLogin = element(by.xpath("//span[contains(text(),'Log in With Google')]"));
  this.nextButton =element(by.xpath("//button[@class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc']//div[@class='VfPpkd-RLmnJb']"));
  
  /**
   * 
   * 
   * @decriptio FLoe to login into Real Synch Platform
   * 
   * 
   */
  this.loginflow = () => {
    //actions.enterText(this.userNameField, 'tgarcia@itexico.com');
    console.log('Given: I want to enter my creds to login to RS ');
    //actions.enterText(this.passwordField, "Teogar810316");
    console.log('When: Typing Creds')
    actions.clickToElement(this.googleLogin);
    browser.sleep(4000);
    var winHandles=browser.getAllWindowHandles();
      winHandles.then(function(handles) 
      {
        this.userNameField = element(by.xpath("//input[@id='identifierId']"));
        this.passwordField = element(by.xpath("//input[@name='password']"));
        this.submitButton = element(by.xpath("//button[@class='primary-button ripple no-margin']"));
        this.googleLogin = element(by.xpath("//span[contains(text(),'Log in With Google')]"));
        this.nextButton =element(by.xpath("//button[@class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc']//div[@class='VfPpkd-RLmnJb']"));
          var parentWindow=handles[0];
          var popUpWindow=handles[1];
          browser.switchTo().window(popUpWindow);
          actions.enterText(this.userNameField, "tgarcia@itexico.com");
          actions.clickToElement(this.nextButton);
          actions.enterText(this.passwordField, "teogar810316");
          actions.clickToElement(this.nextButton);
          browser.sleep(10000);
          browser.switchTo().window(parentWindow);
          console.log("Going back to the parent window " + "Logged to Real Synch");
      })
    console.log('Then: Logged in')
  }
};
module.exports = new LoginPage