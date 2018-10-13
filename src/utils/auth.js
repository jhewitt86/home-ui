import jwt_decode from "jwt-decode";

let decoded, expire;
const now = new Date();
const token = localStorage.getItem("JWT");

if (token) {
  decoded = jwt_decode(token);
  expire = new Date(0);
  expire.setUTCSeconds(decoded.exp || 0);
  if (now.getTime() >= expire.getTime()) {
    localStorage.removeItem("JWT");
  }
}

export default {
  logged_in: token,
  expire: expire,
  logout: () => {
    localStorage.removeItem("JWT");
    window.location.href = "/login";
  }
};
