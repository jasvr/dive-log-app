const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");
// const cookieParser = require("cookie-parser");
// const flash = require("connect-flash");
// const session = require("express-session");
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));