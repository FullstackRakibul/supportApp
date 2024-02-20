const useDetails = () => {
  const userData = localStorage.getItem("user");
  console.log(userData);
  const { email, name, empCode, phoneNumber } = JSON.parse(userData);

  return { email, name, empCode, phoneNumber };
};

export default useDetails;
