const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Mehmet" };
    user["lastName"] = "Eyupoglu";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
