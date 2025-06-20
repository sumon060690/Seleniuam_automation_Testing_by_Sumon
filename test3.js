const { Builder, By, Key, until } = require('selenium-webdriver');

(async function saucedemoTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 1. Open site and login
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    // 2. Open hamburger menu and reset app state
    await driver.findElement(By.id('react-burger-menu-btn')).click();
    await driver.sleep(1000);
    await driver.findElement(By.id('reset_sidebar_link')).click();
    await driver.findElement(By.id('react-burger-cross-btn')).click();

    // 3. Add 3 products to cart
    const productsToAdd = ['add-to-cart-sauce-labs-backpack', 'add-to-cart-sauce-labs-bike-light', 'add-to-cart-sauce-labs-bolt-t-shirt'];
    for (let product of productsToAdd) {
      await driver.findElement(By.id(product)).click();
    }

    // 4. Go to cart and checkout
    await driver.findElement(By.className('shopping_cart_link')).click();
    await driver.findElement(By.id('checkout')).click();

    // 5. Fill checkout form
    await driver.findElement(By.id('first-name')).sendKeys('Test');
    await driver.findElement(By.id('last-name')).sendKeys('User');
    await driver.findElement(By.id('postal-code')).sendKeys('12345');
    await driver.findElement(By.id('continue')).click();

    // 6. Verify product names
    const items = await driver.findElements(By.className('inventory_item_name'));
    for (let item of items) {
      const name = await item.getText();
      console.log("Product:", name);
    }

    // 7. Verify total price
    const totalElement = await driver.findElement(By.className('summary_total_label'));
    const totalText = await totalElement.getText();
    console.log("Total:", totalText);

    // 8. Finish order
    await driver.findElement(By.id('finish')).click();

    // 9. Verify success message
    const successMsg = await driver.findElement(By.className('complete-header')).getText();
    if (successMsg === 'Thank you for your order!') {
      console.log(" Order placed successfully!");
    } else {
      console.log("❌ Order placement failed.");
    }

    // 10. Reset App State again
    await driver.findElement(By.id('react-burger-menu-btn')).click();
    await driver.sleep(1000);
    await driver.findElement(By.id('reset_sidebar_link')).click();
    await driver.findElement(By.id('react-burger-cross-btn')).click();

    // 11. Logout
    await driver.findElement(By.id('react-burger-menu-btn')).click();
    await driver.sleep(1000);
    await driver.findElement(By.id('logout_sidebar_link')).click();

    console.log(" Test completed successfully!");

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
})();
