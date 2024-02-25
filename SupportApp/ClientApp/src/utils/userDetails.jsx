const useDetails = () => {
  const userData = localStorage.getItem("user");
  console.log(userData);
<<<<<<< HEAD

=======
>>>>>>> b8822d5cdc2d84fc3203793d3b3dda524d36a7e2
  let email = "";
  let name = "";
  let empCode = "";
  let phoneNumber = "";

  if (userData) {
    const {
      email: userEmail,
      name: userName,
      empCode: userEmpCode,
      phoneNumber: userPhoneNumber,
    } = JSON.parse(userData);
    email = userEmail;
    name = userName;
    empCode = userEmpCode;
    phoneNumber = userPhoneNumber;
  }

  return { email, name, empCode, phoneNumber };
};

export default useDetails;
