var assert = require('assert');

const { Builder, Browser, By, Key, until, WebElement } = require("selenium-webdriver");
require("chromedriver");

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
var numbers = [1, 2, 3, 4, 5];



describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('Assert', function () {
      assert.isArray(numbers, 'is array of numbers');
      assert.include(numbers, 2, 'array contains 2');
      assert.lengthOf(numbers, 5, 'array contains 5 numbers');
    });
    it('Expect', function () {
      assert.isArray(numbers, 'is array of numbers');
      expect(numbers).to.be.an('array').that.includes(2);
      expect(numbers).to.have.lengthOf(5);
    });
    it('Should', function () {
      numbers.should.be.an('array').that.includes(2);
      numbers.should.have.lengthOf(5);
    });

    // setTimeout(function() {
    //   run()
    // }, 5000);
  });
});

// describe('slow test', function() {

//   // Tests will be considered slow after 1 second elapses
//   this.slow(1000);
  
//   // Completes after the specified 1 second elapses
//   it('should be complete in a second', function(done) {
//     setTimeout(done, 1500);
//   })
  
//   // Completes immediately
//   it('should be complete instantly', function() {})
  
// })

// describe('some time-consuming operation', function() {

//   // set a 5 seconds timeout for this suite
//   this.timeout(5000);
  
//   before('some long setup', function(done) {
//     // set a hook-level timeout
//     this.timeout(2500);
    
//     setTimeout(done, 2250);
//   })
  
//   it('should take less than 200ms', function(done) {
//     // set a test-level timeout
//     this.timeout(300);
    
//     setTimeout(done, 150);
//   })
  
// })

// let awal = 1;
// let akhir = 1;
// describe('Authentication', function () {
//   beforeEach(async function () {
//     console.log("Awal #"+awal++);
//   })

//   it('should return -1 when the value is not present', async function () {
//     assert.equal([1, 2, 3].indexOf(4), -1);
//   })

//   it('Assert', async function () {
//     assert.isArray(numbers, 'is array of numbers');
//     assert.include(numbers, 2, 'array contains 2');
//     assert.lengthOf(numbers, 5, 'array contains 5 numbers');
//   })

//   it('Expect', async function () {
//     assert.isArray(numbers, 'is array of numbers');
//     expect(numbers).to.be.an('array').that.includes(2);
//     expect(numbers).to.have.lengthOf(5);
//   })

//   it('Should', async function () {
//     numbers.should.be.an('array').that.includes(2);
//     numbers.should.have.lengthOf(5);
//   })

//   afterEach(async function () {
//     console.log("Akhir #"+akhir++);
//   })
// })


// describe('Learn Xpath', function () {
  // it('Basic Form', async function () {
  //   let driver = await new Builder().forBrowser("chrome").build(); 
  //   await driver.manage().window().maximize();
  //   const baseURL = "https://demoqa.com/automation-practice-form";
  //   await driver.get(baseURL);

  //   await driver.findElement(By.id("firstName")).sendKeys("Amar Hapizh");
  //   await driver.findElement(By.id("lastName")).sendKeys("Lauza");
  //   await driver.findElement(By.id("userEmail")).sendKeys("amarhapizhlauza@gmail.com");
    
  //   await driver.findElement(By.xpath("//*[@id='genterWrapper']//*[text()='Male']")).click();

  //   await driver.findElement(By.xpath("//input[@id='userNumber']")).sendKeys("089665662337");

  //   let tanggal = await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']"));
  //   driver.executeScript("arguments[0].scrollIntoView()", tanggal);

  //   await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']")).click();
  //   await driver.sleep(2000);
  //   await driver.findElement(By.xpath("//*[@id='dateOfBirth']//*[text()='Previous Month']")).click();
  //   await driver.findElement(By.xpath("//*[@id='dateOfBirth']//*[text()='16']")).click();
    
  //   let textField = await driver.findElement(By.xpath("//*[@id='subjectsInput']"));
  //   textField.sendKeys("Mat");
  //   await driver.sleep(2000);
  //   await driver.findElement(By.xpath("//*[text()='Maths']")).click();
    
  //   await driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]//*[text()='Reading']")).click();
  //   await driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]//*[text()='Music']")).click();
    
  //   let file = await driver.findElement(By.xpath("//*[@class='form-file']//*[text()='Select picture']"));
  //   driver.executeScript("arguments[0].scrollIntoView()", file);
  //   await driver.sleep(3000);
  //   var path = process.cwd()+'/Upload.png';
  //   await driver.findElement(By.id('uploadPicture')).sendKeys(path);
  //   console.log(path);
  //   await driver.sleep(6000);
  //   await driver.quit();
  // })

  // it('Garda Trip', async function () {
  //   let driver = await new Builder().forBrowser("chrome").build(); 
  //   await driver.manage().window().maximize();
  //   const baseURL = "https://www.gardaoto.com/";
  //   await driver.get(baseURL);

  //   await driver.findElement(By.xpath("//div[contains(@class, 'fusion-builder-row-3')]//a[@id='fusion-tab-perjalanan']")).click();
    // await driver.findElement(By.id("lastName")).sendKeys("Lauza");
    // await driver.findElement(By.id("userEmail")).sendKeys("amarhapizhlauza@gmail.com");
    
    // await driver.findElement(By.xpath("//*[@id='genterWrapper']//*[text()='Male']")).click();

    // await driver.findElement(By.xpath("//input[@id='userNumber']")).sendKeys("089665662337");

    // let tanggal = await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']"));
    // driver.executeScript("arguments[0].scrollIntoView()", tanggal);

    // await driver.findElement(By.xpath("//input[@id='dateOfBirthInput']")).click();
    // await driver.sleep(2000);
    // await driver.findElement(By.xpath("//*[@id='dateOfBirth']//*[text()='Previous Month']")).click();
    // await driver.findElement(By.xpath("//*[@id='dateOfBirth']//*[text()='16']")).click();
    
    // let textField = await driver.findElement(By.xpath("//*[@id='subjectsInput']"));
    // textField.sendKeys("Mat");
    // await driver.sleep(2000);
    // await driver.findElement(By.xpath("//*[text()='Maths']")).click();
    
    // await driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]//*[text()='Reading']")).click();
    // await driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]//*[text()='Music']")).click();
    
    // let file = await driver.findElement(By.xpath("//*[@class='form-file']//*[text()='Select picture']"));
    // driver.executeScript("arguments[0].scrollIntoView()", file);
    // await driver.sleep(3000);
    // var path = process.cwd()+'/Upload.png';
    // await driver.findElement(By.id('uploadPicture')).sendKeys(path);
    // console.log(path);
    // await driver.sleep(6000);
  //   await driver.quit();
  // })

  // it('Assert', async function () {
  //   assert.isArray(numbers, 'is array of numbers');
  //   assert.include(numbers, 2, 'array contains 2');
  //   assert.lengthOf(numbers, 5, 'array contains 5 numbers');
  // })

  // it('Expect', async function () {
  //   assert.isArray(numbers, 'is array of numbers');
  //   expect(numbers).to.be.an('array').that.includes(2);
  //   expect(numbers).to.have.lengthOf(5);
  // })

  // it('Should', async function () {
  //   numbers.should.be.an('array').that.includes(2);
  //   numbers.should.have.lengthOf(5);
  // })

// })

// const BTN_PERJALANAN = By.xpath('//div[contains(@class, "fusion-builder-row-3")]//a[@id="fusion-tab-perjalanan"]');
// const CLOSE = By.xpath('//img[@alt="Close"]');
// const DESTINATION_FROM = By.id('select2-DestinationFrom-container');
// const INPUT_FROM_TO = By.xpath('//input[@class="select2-search__field"]');
// const SELECT_FORM = By.xpath('//*[@id="select2-DestinationFrom-results"]//li[text()[contains(., "JAKARTA")]]');
// const DESTINATION_TO = By.id('select2-DestinationTo-container');
// const SELECT_TO = By.xpath('//*[@id="select2-DestinationTo-results"]//li[text()[contains(., "AUSTRALIA")]]');
// const TRIP_TYPE = By.id('select2-TripType-container');
// const SELECT_TRIP = By.xpath('//li[text()[contains(., "Sekali")]]');
// const DEPARTURE_DATE = By.id('DepartureDate');
// const DATE_FROM = By.xpath('//div[contains(@class, "xdsoft_datetimepicker") and contains(@style, "block")]//td[@data-date="23"]');
// const ARRIVAL_DATE = By.id('ArrivalDate');
// const NEXT_MONTH = By.xpath('//div[contains(@style, "block")]//div[@class="xdsoft_datepicker active"]//button[@class="xdsoft_next"]');
// const DATE_TO = By.xpath('//div[contains(@class, "xdsoft_datetimepicker") and contains(@style, "block")]//td[@data-date="28"]');
// const PARTICIPANT = By.id('psrt-up');
// const CHECKBOX = By.id('QuotePassengerFamType');
// const BTN_PENAWARAN = By.id('btnPenawaranGardaTrip');


// describe('Learn Xpath', function () {
//   it('Garda Trip', async function () {
//     let driver = await new Builder().forBrowser("chrome").build(); 
//     const baseURL = "https://www.gardaoto.com/";
//     await driver.get(baseURL);
//     // await driver.manage().setTimeouts( { implicit: 30000 } );
//     await driver.manage().window().maximize();
//     // await driver.navigate().refresh();

//     await driver.findElement(BTN_PERJALANAN).click();
//     await driver.findElement(CLOSE).click();
//     await driver.wait(until.elementLocated(By.id('select2-TripType-container')), 30000);
//     // await driver.navigate().refresh();
//     await driver.sleep(6000);
//     await driver.findElement(DESTINATION_FROM).click();
//     await driver.findElement(INPUT_FROM_TO).sendKeys("JAKARTA");
//     await driver.findElement(SELECT_FORM).click();
//     await driver.findElement(DESTINATION_TO).click();
//     await driver.findElement(INPUT_FROM_TO).sendKeys("AUSTRALIA");
//     await driver.findElement(SELECT_TO).click();
//     await driver.findElement(TRIP_TYPE).click();
//     await driver.findElement(SELECT_TRIP).click();
//     await driver.findElement(DEPARTURE_DATE).click();
//     await driver.findElement(DATE_FROM).click();
//     await driver.findElement(ARRIVAL_DATE).click();
//     await driver.findElement(NEXT_MONTH).click();
//     await driver.findElement(DATE_TO).click();
//     await driver.findElement(PARTICIPANT).click();
//     await driver.findElement(CHECKBOX).click();
//     await driver.findElement(BTN_PENAWARAN).click();

//     await driver.sleep(6000);
//     await driver.quit();
//   })
// })


