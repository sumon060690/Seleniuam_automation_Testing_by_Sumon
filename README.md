# Q2 Automation Test Report – SauceDemo (30 Marks)
## Objective:
Automate the following user journey using Selenium with JavaScript:
Login with standard_user.
From the hamburger menu, reset the App State.
Add any three items to the cart.
Go to the final checkout page.
Verify the product names and total price.
Finish the purchase.
Verify the successful order message.
Reset App State again and log out.

## Tools & Technologies Used:
Language: JavaScript (Node.js)
Framework: Selenium WebDriver
Package Manager: npm
Test Runner: Mocha (optional)
Assertion Library: Chai (optional)
Browser: Chrome (via ChromeDriver)

## 1. Login:
Navigate to: https://www.saucedemo.com/
Enter:
Username: standard_user
Password: secret_sauce
Click Login Button

## Reset App State:
Click the top-left hamburger icon
Click “Reset App State”
Close the menu
