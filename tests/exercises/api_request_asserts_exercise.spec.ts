import { test, expect } from "@playwright/test";

test("Excercise: Request with assertion", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  expect(response.status(), "Response Status Should be 200").toEqual(200);
  const responseBody = await response.json();
});

/*{
  "userId": 4,
  "username": "petrfifka",
  "email": "petr.fifka@tredgate.cz",
  "createdAt": "2023-10-24",
  "updatedAt": null,
  "active": 1
}

*/
