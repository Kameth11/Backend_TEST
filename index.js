const express = require("express");
const path = require("path");
const logger = require("./logger");
const exphbs = require("express-handlebars");
const app = express();
const members = require("./Member");

//Getr all members

//init Middleware
//app.use(logger);
//Body parser middleware
//homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

//handlebars middleware

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
