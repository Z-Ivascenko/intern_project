const request = require("supertest");
const app = require("../../src/server");

describe("Users routes (integration)", () => {
  const email = `test_${Date.now()}@example.com`;

  test("GET /users returns array", async () => {
    const res = await request(app).get("/users?page=1&limit=10");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /users creates user", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        name: "Test User",
        email,
        password: "123456",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.email).toBe(email);
  });

  test("POST /users with duplicate email returns DUPLICATE", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        name: "Test User",
        email,
        password: "123456",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.error.code).toBe("DUPLICATE");
  });

  test("GET /users with invalid page returns INVALID_PAGE", async () => {
    const res = await request(app).get("/users?page=0&limit=10");

    expect(res.statusCode).toBe(400);
    expect(res.body.error.code).toBe("INVALID_PAGE");
  });
});