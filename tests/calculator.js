let homepage = require('../pages/homepage');

describe('demo page object model test suite', function(){
	it('page object model test', function(){
		homepage.get('http://juliemr.github.io/protractor-demo/');
    	homepage.enterFirstNumber(5);
    	homepage.enterSecondNumber(7);
    	homepage.clickOnGo();
    	homepage.verifyResult('12');
	});

	it('fail test page object model test', function(){
		homepage.get('http://juliemr.github.io/protractor-demo/');
    	homepage.enterFirstNumber(5);
    	homepage.enterSecondNumber(7);
    	homepage.clickOnGo1();
    	homepage.verifyResult('12');
	});
})