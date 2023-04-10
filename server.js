const express = require("express");

const data = require("./models/data");

const app = express();

//===========view engine setup==================
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
//============setting middleware===============

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

/**
 * / for Welcome page
 */

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

/**
 * / for Home page
 */

app.get("/home", (req, res) => {
  res.send("<h1>This is home page</h1>");
});

/**
 * / for Index page(About)
 */
app.get("/about", (req, res) => {
  //   res.send("<h1>This is About page</h1>");
  res.render("Index", { data: data });
});
/**
 * Projects page
 */

app.get("/projects", (req, res) => {
  //   res.send("<h1>This is Projects page</h1>");
  res.render("Show", { projectsData: data });
});
/**
 * Contact page
 */
app.get("/contact", (req, res) => {
  res.send("<h1>This is Contacts page</h1>");
});
/**
 * Last page
 */
app.get("/end", (req, res) => {
  console.log(req.params);
  res.send("<h1>Thanks for visiting </h1>");
});
/**
 * Greeting page which accepts user name as a parameter
 */
app.get("/greeting/:name", (req, res) => {
  res.send(` Hello ${req.params.name}`);
});
/**
 * Random name generator page -parameter what is your name
 */

app.get("/name/:question", (req, res) => {
  const ans = ["Shilpa", "Shree", "Mahati"];

  const randomName = ans[Math.floor(ans.length * Math.random())];
  console.log(randomName);

  res.send(`<h1>My name is ${randomName}</h1>`);
});
/**
 * Random age generator page -parameter to be given is what is your age
 */

app.get("/age/:question", (req, res) => {
  const randomAge = Math.floor(Math.random() * 100);
  console.log(randomAge);

  res.send(`<h1>My age is ${randomAge}</h1>`);
});
/**
 * Individual project page
 */
app.get("/projects/:project", (req, res) => {
  res.send("<h1>This is individual project page</h1>");
});

/**
 * for wrong url displaying 404 page
 */
app.get("*", (req, res) => {
  res.render("404");
});
/**
 * App is running at port number 3000
 */
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
