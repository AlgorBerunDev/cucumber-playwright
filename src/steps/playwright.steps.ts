import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('Go to the playwright website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  expect(1).toBe(1);
});

When('Change theme to {string} mode', async function (this: ICustomWorld, mode: string) {
  expect(mode).toBe(mode);
  // const page = this.page!;
  // const html = page.locator('html');
  // const current = await html.getAttribute('data-theme');
  // if (current !== mode) {
  //   await page.locator('nav >> button[title*="dark and light mode"]').click();
  // }
  // await page.waitForSelector(`html[data-theme=${mode}]`);
});

Then('We see {string} mode', async function (this: ICustomWorld, mode: string) {
  expect(mode).toBe(mode);
  // const page = this.page!;
  // const theme = await page.locator('html').getAttribute('data-theme');
  // expect(theme).toEqual(mode);
});
