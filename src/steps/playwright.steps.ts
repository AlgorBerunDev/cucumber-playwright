// import { AuthenticationPage } from '../support/pom/auth.page';
// import { ICustomWorld } from '../support/custom-world';
// import { Given, When, Then } from '@cucumber/cucumber';
// import { expect } from '@playwright/test';

// Given('the user is on the authentication page', async function (this: ICustomWorld) {
//   this.page = await this.browser.newPage();
//   await this.page.goto('http://your-authentication-page-url.com');
// });

// When('the user enters a correct phone and password', async function (this: ICustomWorld) {
//   const authenticationPage = new AuthenticationPage(this.page);
//   await authenticationPage.enterPhone('correct_phone');
//   await authenticationPage.enterPassword('correct_password');
// });

// When('clicks on the "Login" button', async function (this: ICustomWorld) {
//   const authenticationPage = new AuthenticationPage(this.page);
//   await authenticationPage.clickLogin();
// });

// Then('the user should be redirected to the homepage', async function (this: ICustomWorld) {
//   // await expect(this.page).toHaveURL('http://your-homepage-url.com');
// });

// Then('see a welcome message with their name', async function (this: ICustomWorld) {
//   // await expect(this.page.locator('#welcome_message')).toContainText('Welcome');
// });

// Continue defining other steps using Given, When, Then as needed.
