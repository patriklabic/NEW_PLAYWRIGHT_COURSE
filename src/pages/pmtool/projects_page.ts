import { Page, Locator } from "@playwright/test";

export class ProjectsPage {
  readonly page: Page;
  readonly addProjectButton: Location;

  constructor(page: Page) {
    this.page = page;
    this.addProjectButton = page.locator()'([test_id="Add Project"]);
 
 
 
    async clickAddProject() {
    await this.addProjectButton.click();
    return new CreateNewProjectModal(this.page);
  }
}

