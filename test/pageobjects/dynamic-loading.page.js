const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class DynamicLoadingPage extends Page {

    /**
     * Your selectors go here
     */
    get startButton() {
        return $('#start button')
    }

    get HelloWorld() {
        return $('#finish h4')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamic_loading/1');
    }
}

module.exports = new DynamicLoadingPage();