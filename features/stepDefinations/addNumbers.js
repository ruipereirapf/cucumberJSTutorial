const { Given, When, Then } = require('@cucumber/cucumber')

Given('Numbers are provided', function () {
    num1 = 1;
    num2 = 2;
    return console.log(`Numbers are ${num1} and ${num2}`);
});

When('Sum up both numbers here', function () {
    sum = num1 + num2;
    return console.log('The sum is done here');
});

Then('Display result of sum', function () {
    return console.log(`The sum is ${sum}`);
});