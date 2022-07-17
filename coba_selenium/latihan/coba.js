const { Builder, Browser, By, Key, until, WebElement } = require("selenium-webdriver");
// const chrome = require('selenium-webdriver/chrome');
require("chromedriver");

async function example() {
    try {
        let driver = await new Builder().forBrowser("chrome").build();

        // const baseURL = "https://demoqa.com/automation-practice-form";
        // await driver.manage().window().maximize();
        // await driver.get(baseURL);

        var path = process.cwd()+'/Upload.png';
        await driver.get('http://www.fileconvoy.com/');
        await driver.findElement(By.id('upfile_0')).sendKeys(path);
        await driver.sleep(6000);

        // driver.get('http://www.fileconvoy.com/').then(function () {
        //     // File path specific to Linux
        //     driver.findElement(By.id('upfile_0')).sendKeys(path).then(function () {
        //         driver.sleep(6000);
        //         driver.findElement(By.id('readTermsOfUse')).click().then(function () {
        //             driver.sleep(6000);
        //             driver.findElement(By.id('upload_button')).click().then(function () {
        //                 driver.sleep(6000);
        //                 driver.getTitle().then(function (title) {
        //                     driver.sleep(6000);
        //                     console.log(title);
        //                     driver.sleep(6000);
        //                     driver.quit();
        //                 });
        //             });
        //         });
        //     });
        // })
    } catch (error) {
        console.log(error)
    }

}

example()