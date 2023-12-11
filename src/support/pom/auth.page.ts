import { Page } from '@playwright/test';

class AuthenticationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterPhone(phone: string) {
    await this.page.fill("input[type='tel']", phone);
  }

  async enterPassword(password: string) {
    await this.page.fill("input[type='password']", password);
  }

  async clickLogin() {
    await this.page.click('button[type="submit"]');
  }

  async getErrorMessage() {
    return this.page.textContent('#error_message');
  }
}

export { AuthenticationPage };
