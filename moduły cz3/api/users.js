const users = [
  { id: 1, name: "Adam" },
  { id: 2, name: "Jas" },
  { id: 3, name: "Staszek" },
];
module.exports = {
  // showUsers: function(){}
  showUsers() {
    const names = users.map((user) => user.name);
    console.log("Nasi użytkownicy to: ");
    names.forEach((name) => console.log(name));
  },
  showuUserObj(id) {
    console.log("Szukany użytkownik to: ");
    const user = users.find((user) => id === user.id);
    console.log(user);
  },
  usersListLength: users.length,
};
