import { jwtDecode } from "jwt-decode";

const hasPermission = (requiredRole) => {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const { role } = decodedToken;

  // Check if token exists
  if (!token) {
    return false;
  }

  try {
    return role === requiredRole;
  } catch (error) {
    console.error("Error decoding token:", error.message);
    return false;
  }
};

export default hasPermission;
