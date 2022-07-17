const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
// const chrome = require('selenium-webdriver/chrome');
require("chromedriver");

async function example() {


        try {
                // let options = new chrome.Options();
                // let driver = await new Builder()
                //         .setChromeOptions(options)
                //         .forBrowser('chrome')
                //         .build();

                let driver = await new Builder().forBrowser("chrome").build(); 

                const baseURL = "https://demoqa.com/alerts";
                await driver.get(baseURL);
                await driver.manage().window().maximize();

                await driver.findElement(By.id("alertButton")).click();
                await driver.sleep(2000);
                await driver.switchTo().alert().accept();

                await driver.findElement(By.id("timerAlertButton")).click();
                await driver.sleep(6000);
                await driver.switchTo().alert().accept();

                await driver.findElement(By.id("confirmButton")).click();
                await driver.sleep(2000);
                await driver.switchTo().alert().dismiss();

                await driver.findElement(By.id("promtButton")).click();
                await driver.sleep(2000);
                await driver.switchTo().alert().sendKeys("Amar");
                await driver.switchTo().alert().accept();
                await driver.sleep(6000);
                await driver.quit();
        } catch (error) {
                console.log(error)
        }

}

example()