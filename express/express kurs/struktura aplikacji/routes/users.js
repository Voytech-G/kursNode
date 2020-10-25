function usersRoutes(app) {
  app.get("/", (req, res) => {
    const { imie_gosc } = req.cookies;
    if (imie_gosc) {
      res.send(`Witaj, ${imie_gosc}`);
    } else {
      res.send("Czy na pewno sie zalogowales?");
    }
    console.log(req.cookies);
  });
  app.get("/hi/:name", (req, res) => {
    const { name } = req.params;
    res.cookie("imie_gosc", name, {
      maxAge: 5 * 60 * 1000,
    });
    res.send(`Witaj ${name}`);
  });
  app.get("/logout", (req, res) => {
    res.clearCookie("imie_gosc");
    res.redirect("/");
  });
}
module.exports = usersRoutes;
