// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Testes de Regressão', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it.only('Comprar Passagens', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1024, height: 728 })
    await driver.wait(until.elementIsVisible(await driver.findElement(By.name("fromPort"))), 30000)
    await driver.wait(until.elementIsVisible(await driver.findElement(By.name("fromPort"))), 30000)
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
    }
    await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'Cairo']")).click()
    }
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    await driver.findElement(By.id("inputName")).click()
    await driver.findElement(By.id("inputName")).sendKeys("Dunha Patto")
    await driver.findElement(By.id("address")).click()
    await driver.findElement(By.id("address")).sendKeys("Avenida Paulista, 100")
    await driver.findElement(By.id("city")).click()
    await driver.findElement(By.id("city")).sendKeys("São Paulo")
    await driver.findElement(By.id("state")).click()
    await driver.findElement(By.id("state")).sendKeys("São Paulo/SP")
    await driver.findElement(By.id("zipCode")).click()
    await driver.findElement(By.id("cardType")).click()
    {
      const dropdown = await driver.findElement(By.id("cardType"))
      await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
    }
    await driver.findElement(By.id("creditCardMonth")).click()
    await driver.findElement(By.id("creditCardMonth")).sendKeys("12")
    await driver.findElement(By.id("creditCardYear")).click()
    await driver.findElement(By.id("creditCardYear")).sendKeys("2025")
    await driver.findElement(By.id("nameOnCard")).click()
    await driver.findElement(By.id("nameOnCard")).sendKeys("Dunha Patto")
    await driver.findElement(By.id("rememberMe")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    await driver.findElement(By.css("h1")).click()
    await driver.findElement(By.css("h1")).click()
    await driver.findElement(By.css("h1")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).click()
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).click()
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
    await driver.close()
  })
  // it('Login', async function() {
  //   await driver.get("https://blazedemo.com/")
  //   await driver.manage().window().setRect({ width: 1024, height: 728 })
  //   await driver.findElement(By.linkText("home")).click()
  //   await driver.findElement(By.linkText("Login")).click()
  //   await driver.findElement(By.id("email")).sendKeys("admademar@test")
  //   await driver.findElement(By.id("password")).click()
  //   await driver.findElement(By.id("password")).sendKeys("123456")
  //   await driver.findElement(By.name("remember")).click()
  //   await driver.findElement(By.css(".btn-primary")).click()
  //   await driver.close()
  // })
})