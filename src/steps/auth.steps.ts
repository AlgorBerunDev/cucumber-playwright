import { ICustomWorld } from '../support/custom-world';
import { AuthenticationPage } from '../support/pom/auth.page';
import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';

Given('the user is on the authentication page', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto(
    'https://praktikum.mohirdev.dev/auth/login?callback_uri=https://praktikum.mohirdev.dev/dashboard/login',
  );
});

When('the user enters a correct phone and password', async function (this: ICustomWorld) {
  const { page } = this;
  if (page) {
    const authenticationPage = new AuthenticationPage(page);
    await authenticationPage.enterPhone('900000000');
    await authenticationPage.enterPassword('12345678');
  }
});

Given('clicks on the "Login" button', async function (this: ICustomWorld) {
  const { page } = this;
  if (page) {
    const authenticationPage = new AuthenticationPage(page);
    await authenticationPage.clickLogin();
  }
});

Then('the user should be redirected to the homepage', async function (this: ICustomWorld) {
  const { page } = this;
  if (page) {
    await this.page?.waitForURL('https://praktikum.mohirdev.dev/dashboard-moderator');
    await expect(page).toHaveURL('https://praktikum.mohirdev.dev/dashboard-moderator');
  }
});

Given('see a welcome message with their name', async function (this: ICustomWorld) {
  // await expect(this.page.locator('#welcome_message')).toContainText('Welcome');
});
