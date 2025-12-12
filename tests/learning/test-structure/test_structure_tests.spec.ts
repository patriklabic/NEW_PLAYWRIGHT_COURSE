import test from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test.describe("Test Structure - Describe", () => {
  test("Pmtool Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage
      .open()
      .then((login) => login.login("pw_skoleni", "TEG2023"));
  });

  test("Login and Logout",{
tag:"@Smoke_test"

  } async({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage
      .open()
      .then((login) => login.login("pw_skoleni", "TEG2023"))
      .then((dashboard) => dashboard.clickProfile())
      .then((dashboard) => dashboard.clickLogout());
  });
});
