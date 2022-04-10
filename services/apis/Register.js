const RegisterFinder = {};
const URL = `${process.env.REACT_APP_URL_SERVER}auth/`;

RegisterFinder.signup = async (user) => {
  const response = await fetch(URL + "register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

RegisterFinder.login = async (user) => {
  const response = await fetch(URL + "login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  });
  return await response.json();
};

RegisterFinder.verify = async (user) => {
  const response = await fetch(URL + "is-verify", {
    method: "GET",
    headers: { token: localStorage.token },
  });
  return await response.json();
};

export default RegisterFinder;
