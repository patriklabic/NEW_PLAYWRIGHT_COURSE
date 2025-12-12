import { Page, Locator } from "@playwright/test";

export class ProjectsPage {
  readonly page: Page;
  readonly addProjectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addProjectButton = page.locator('[data-test-id="Add Project"]');
  }

  async clickAddProject() {
    await this.addProjectButton.click();
    return new CreateNewProjectModal(this.page);
  }
}
