const sum = require("./sum");
const request = require("supertest");

const app = require("./app.js");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

describe("GET /", () => {
    it("should return JSON data", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
    });
});
