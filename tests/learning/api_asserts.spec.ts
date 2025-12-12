import test, { expect } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );

  expect(response.status(), "Response status is 200 OK").toEqual(200);
});
