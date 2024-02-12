const hasPermission = (requiredRole) => {
  const token = localStorage.getItem("token");

  // Check if token exists
  if (!token) {
    return false;
  }

  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding token:", error.message);
      return null;
    }
  };

  try {
    const decodedToken = decodeToken(token);
    const userRole = decodedToken.role;
    return userRole === requiredRole;
  } catch (error) {
    console.error("Error decoding token:", error.message);
    return false;
  }
};

export default hasPermission;
