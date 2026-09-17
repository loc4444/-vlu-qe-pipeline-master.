const login = require("./auth");

describe("Regression Test - Login", () => {

    test("Mật khẩu sai", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Username rỗng", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Username chỉ chứa khoảng trắng", () => {
        expect(login("   ", "123")).toBe(false);
    });

    test("Mật khẩu rỗng", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt", () => {
        expect(login("admin", "123@")).toBe(false);
    });

    test("Mật khẩu chứa ký tự đặc biệt khác", () => {
        expect(login("admin", "12#3")).toBe(false);
    });

    test("Tài khoản bị khóa", () => {
        expect(login("locked", "123")).toBe(false);
    });

    test("Username không tồn tại", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Username và password đều sai", () => {
        expect(login("user", "456")).toBe(false);
    });

});
