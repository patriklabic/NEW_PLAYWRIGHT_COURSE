import { test, expect } from "@playwright/test";

test("Excercise: Request with Body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: "Patrik Labič",
        password: "PatrikPatrik",
        email: "patriklabic123232132144354367854@gmail.com",
      },
    }
  );
});
