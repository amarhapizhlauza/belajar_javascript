const { Builder, Browser, By, Key, until, WebElement } = require("selenium-webdriver");
// const chrome = require('selenium-webdriver/chrome');
require("chromedriver");

async function example() {
    try {
        let driver = await new Builder().forBrowser("chrome").build(); 

        const baseURL = "https://demoqa.com/automation-practice-form";
        await driver.manage().window().maximize();
        await driver.get(baseURL);

        await driver.findElement(By.id("firstName")).sendKeys("Amar Hapizh");
        await driver.findElement(By.id("lastName")).sendKeys("Lauza");
        await driver.findElement(By.id("userEmail")).sendKeys("amarhapizhlauza@gmail.com");
        
        await driver.findElement(By.xpath("//*[@id='genterWrapper']//*[text()='Male']")).click();

        await driver.findElement(By.xpath("//input[@id='userNumber']")).sendKeys("089665662337");
        
        await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']")).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//*[@id='dateOfBirth']//*[text()='Previous Month']")).click();
        await driver.findElement(By.xpath("//*[@id='dateOfBirth']//*[text()='16']")).click();
        
        let textField = await driver.findElement(By.xpath("//*[@id='subjectsInput']"));
        textField.sendKeys("Mat");
        await driver.sleep(2000);
        await driver.findElement(By.xpath("//*[text()='Maths']")).click();
        
        await driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]//*[text()='Reading']")).click();
        await driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]//*[text()='Music']")).click();
        
        let file = await driver.findElement(By.xpath("//*[@class='form-file']//*[text()='Select picture']"));
        driver.executeScript("arguments[0].scrollIntoView()", file);
        await driver.sleep(3000);
        var path = process.cwd()+'/Upload.png';git
        await driver.findElement(By.id('uploadPicture')).sendKeys(path);
        console.log(path);
        // await file.sendKeys(path);
        // await file.click();
        await driver.sleep(6000);

        

        // await driver.findElement(By.xpath("//*[@class='form-file']//*[text()='Select picture']")).click();
        // await driver.sleep(3000);
        
        // StringSelection ss = new StringSelection("C:\\Users\\Amar\\OneDrive\\Desktop\\Upload.png");
        // Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);
        
        // Ctrl + v
        // Robot robot = new Robot();
        // robot.keyPress(KeyEvent.VK_CONTROL);
        // robot.keyPress(KeyEvent.VK_V);
        // robot.keyRelease(KeyEvent.VK_V);
        // robot.keyRelease(KeyEvent.VK_CONTROL);
        // await driver.sleep(3000);
        // robot.keyPress(KeyEvent.VK_ENTER);
        // robot.keyRelease(KeyEvent.VK_ENTER);
        
        
        // let address = await driver.findElement(By.id("currentAddress"));
        // address.sendKeys("Jl. Guru Mughni Gg SD RT 03 Rw 03 Kuningan");
        
        // await driver.findElement(By.xpath("//*[@id='state']//*[text()='Select State']")).click();
        // await driver.findElement(By.xpath("//*[text()='NCR']")).click();
        
        // await driver.findElement(By.xpath("//*[@id='city']//*[text()='Select City']")).click();
        // await driver.findElement(By.xpath("//*[text()='Delhi']")).click();
        // await driver.sleep(3000);
        await driver.quit();
    } catch (error) {
        console.log(error)
    }

}

example()