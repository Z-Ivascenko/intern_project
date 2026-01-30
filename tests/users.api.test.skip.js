const request = require("supertest");
const app = require("../src/server");

describe("GET /users", () => {
  it("returns list of users", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("POST /users", () => {
  it("creates new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        name: "Test User",
        email: `test${Date.now()}@example.com`,
        password: "123456"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("email");
  });
});
