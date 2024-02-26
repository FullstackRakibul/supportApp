const useDetails = () => {
  const userData = localStorage.getItem("user");
  console.log(userData);
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
