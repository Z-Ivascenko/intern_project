// tests/services/userService.test.js

// 1) Мокаем модуль с базой данных ДО импорта тестируемых функций
jest.mock("../../src/db/db", () => {
  const pool = { query: jest.fn() };
  return {
    pool,
    createUser: jest.fn(async (name, email, passwordHash) => {
      const [result] = await pool.query("INSERT ...", [name, email, passwordHash]);
      return result.insertId;
    }),
    getUsers: jest.fn(async () => {
      const [rows] = await pool.query("SELECT id, name, email FROM users");
      return rows;
    }),
  };
});

const { pool, createUser, getUsers } = require("../../src/db/db");

describe("DB functions (mocked)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createUser()", () => {
    test("returns insertId on success", async () => {
      pool.query.mockResolvedValueOnce([{ insertId: 123 }]);

      const id = await createUser("Anna", "anna@test.com", "HASH");
      expect(id).toBe(123);
      expect(pool.query).toHaveBeenCalledTimes(1);
    });

    test("throws error when DB fails", async () => {
      pool.query.mockRejectedValueOnce(new Error("DB down"));

      await expect(createUser("Anna", "anna@test.com", "HASH")).rejects.toThrow("DB down");
      expect(pool.query).toHaveBeenCalledTimes(1);
    });
  });

  describe("getUsers()", () => {
    test("returns rows on success", async () => {
      pool.query.mockResolvedValueOnce([
        [{ id: 1, name: "Anna", email: "anna@test.com" }],
      ]);

      const rows = await getUsers();
      expect(rows).toEqual([{ id: 1, name: "Anna", email: "anna@test.com" }]);
      expect(pool.query).toHaveBeenCalledTimes(1);
    });

    test("throws error when DB fails", async () => {
      pool.query.mockRejectedValueOnce(new Error("SELECT failed"));

      await expect(getUsers()).rejects.toThrow("SELECT failed");
      expect(pool.query).toHaveBeenCalledTimes(1);
    });
  });
});
