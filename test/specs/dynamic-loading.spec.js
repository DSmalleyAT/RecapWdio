//const { startButton, HelloWorld } = require('../pageobjects/dynamic-loading.page');
const DynamicLoadingPage = require('../pageobjects/dynamic-loading.page');


describe('My Dynamic Loading Page', () => {
    describe('My Start Button...', () => {
        it ('...should be clickable', async () => {
            await DynamicLoadingPage.open();
            await (DynamicLoadingPage.startButton).click();
        });
        it ('...should load a Hello World Message on click', async () => {
            await (DynamicLoadingPage.HelloWorld).waitForDisplayed ({timeout: 10000});
        });
    });
});