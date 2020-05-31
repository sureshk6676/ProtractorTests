let homepage = function(){
    let firstNumberInput = element(by.model('first'))
    let secondNumberInput = element(by.model('second'))
    let goButton = element(by.css('[ng-click="doAddition()"]'))

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(num){
        firstNumberInput.sendKeys(num);
    };

    this.enterSecondNumber = function(num){
        secondNumberInput.sendKeys(num);
    };

    this.clickOnGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result)).getText();
        expect(output).toEqual(result);
    };
};

module.exports = new homepage();