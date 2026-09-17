function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Username rỗng
    if (!username || username.trim() === "") {
        return false;
    }

    // Password rỗng
    if (typeof password !== "string" || password.length === 0) {
        return false;
    }

    // Password chứa ký tự đặc biệt
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        return false;
    }

    // Kiểm tra tài khoản và mật khẩu
    return username === "admin" && password === "123";
}

module.exports = login;
//ghi chu//
