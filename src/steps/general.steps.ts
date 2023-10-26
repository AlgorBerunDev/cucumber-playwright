import { ICustomWorld } from '../support/custom-world';
import { compareToBaseImage, getImagePath } from '../utils/compareImages';
import { Then } from '@cucumber/cucumber';

Then('Snapshot {string}', async function (this: ICustomWorld, name: string) {
  const { page } = this;
  await page?.goto('http://localhost:4000/auth/login?callback_uri=http://localhost:4000/');
  await page?.screenshot({ path: getImagePath(this, name) });
});

Then('Snapshot', async function (this: ICustomWorld) {
  const { page } = this;
  const image = await page?.screenshot();
  image && (await this.attach(image, 'image/png'));
});

Then('debug', async function () {
  // eslint-disable-next-line no-debugger
  debugger;
});

Then('Screen matches the base image {string}', async function (this: ICustomWorld, name: string) {
  await this.page?.waitForTimeout(1000);
  const screenshot = await this.page!.screenshot();
  await compareToBaseImage(this, name, screenshot as Buffer);
});
