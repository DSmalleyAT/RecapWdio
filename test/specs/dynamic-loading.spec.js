//const { startButton, HelloWorld } = require('../pageobjects/dynamic-loading.page');
const DynamicLoadingPage = require('../pageobjects/dynamic-loading.page');


describe('My Dynamic Loading Page', () => {
    describe('My INITIAL Dynamic Loading Page', () => {
        it('should verify that start button exists', async () => {
            await DynamicLoadingPage.open();
            await expect(DynamicLoadingPage.startButton).toBeExisting();
        
        });
    });
    describe('My WORKING Dynamic Loading Page', () => {
        it ('should click the start button', async () => {
            await DynamicLoadingPage.open();
            await (DynamicLoadingPage.startButton).click();
        });
        it ('should load a Hello World Message', async () => {
            await (DynamicLoadingPage.HelloWorld).waitForDisplayed ({timeout: 10000});
        });
    });
});