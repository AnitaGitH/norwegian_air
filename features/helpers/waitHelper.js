var waitHelper = function () {
    var printStack = function (error, element, message) {
        throw error;
    };
    this.waitForElementToBeVisible = function (element, timeout) {
        var isVisible = EC.visibilityOf(element);
        if (timeout !== undefined) {
            return browser.wait(isVisible, timeout).then(function () {
            }, function (error) {
                return printStack(error, element, "Wait for element to be visible");
            });
        }
        else {
            return browser.wait(isVisible, constants.TIMEOUT).then(function () {
            }, function (error) {
                return printStack(error, element, "Wait for element to be visible");
            });
        }
    };
};
module.exports = waitHelper;