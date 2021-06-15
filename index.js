const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");
const session = require("express-session");
const { isLoggedIn } = require("./middleware");

const sessionConfig = {
  secret: "thisshouldberealsecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() * 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(methodOverride("_method"));

const Dana = require("./models/Dana");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });

mongoose.connect("mongodb://localhost:27017/test-crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(session(sessionConfig));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
app.get("/", isLoggedIn, async (req, res) => {
  try {
    const data = await Dana.find({});
    res.render("home", { data });
  } catch (error) {
    res.status(300).send("an error occured!", error);
  }
});
app.get("/form", isLoggedIn, (req, res) => {
  Dana.find({}, (err, item) => {
    if (err) {
      res.status(500).send("an error occured!", err);
    } else {
      res.render("form", { item: item });
    }
  });
});
app.post("/form", upload.single("gambar"), (req, res, next) => {
  const {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
  } = req.body;
  console.log(req.body);
  var obj = {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    gambar: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  obj.creator = req.user._id;
  Dana.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});
app.get("/list", isLoggedIn, async (req, res) => {
  try {
    const data = await Dana.find({});
    res.render("campaign", { data });
  } catch (error) {
    res.status(404).send("an error occured!", error);
  }
});
app.get("/campaign", async (req, res) => {
  try {
    const item = await Dana.find({});
    res.render("galang", { item });
  } catch (error) {
    res.status(300).send("an error occured!", error);
  }
});

// REGISTER
app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email });
  try {
    const newUser = await User.register(user, password);
    req.login(newUser, (err) => {
      if (err) return next(err);
      res.redirect("/list");
    });
  } catch (error) {
    res.status(404).send("an error occured!", error);
  }
});

// LOGIN
app.get("/login", (req, res) => {
  res.render("login");
});
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

// LOGOUT
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/new", (req, res) => {
  res.render("new-campaign");
});

app.get("/show/:id", async (req, res) => {
  const e = await Dana.findById(req.params.id).populate("creator");
  res.render("show", { e });
});

//DONASI
app.get("/donate/:id", (req, res) => {
  const id = req.params.id;
  res.render("donate", { id });
});
app.patch("/donasi/:id", async (req, res) => {
  const id = req.params.id;
  const item = await Dana.findById(id);
  const nilai = (item.donasi += Number(req.body.donasi));
  const donate = await Dana.findByIdAndUpdate(id, { ...item, donasi: nilai });
  await donate.save();
  res.redirect(`/show/${id}`);
});

app.get("/edit/:id", async (req, res) => {
  const e = await Dana.findById(req.params.id);
  res.render("edit", { e });
});
app.put("/edit/:id", upload.single("gambar"), async (req, res) => {
  try {
    const data = await Dana.findByIdAndUpdate(req.params.id, req.body);
    await data.save();
    res.redirect("/");
  } catch (error) {
    res.status(404).send("an error occured!", error);
  }
});
app.delete("/delete/:id", async (req, res) => {
  try {
    await Dana.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(404).send("an error occured!", error);
  }
});

app.get("/admin/:id", async (req, res) => {
  const id = req.params.id;
  const item = await Dana.findById(id).populate("creator");
  res.render("verify", { item });
});
app.patch("/admin/:id", async (req, res) => {
  const id = req.params.id;
  const item = await Dana.findById(id);
  const newItem = await Dana.findByIdAndUpdate(id, {
    ...item,
    verified: mongoose.Schema.Types.Boolean.convertToTrue,
  });
  console.log(newItem);
  await newItem.save();
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
