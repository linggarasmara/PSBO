const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

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

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/contoh", (req, res) => {
  Dana.find({}, (err, item) => {
    if (err) {
      res.status(500).send("an error occured!", err);
    } else {
      res.render("contoh", { item: item });
    }
  });
});
app.post("/contoh", upload.single("gambar"), (req, res, next) => {
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
  Dana.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/contoh");
    }
  });
});
app.get("/list", (req, res) => {
  res.render("campaign");
});
app.get("/campaign", async (req, res) => {
  try {
    const item = await Dana.find({});
    res.render("galang", { item });
  } catch (error) {
    res.status(300).send("an error occured!", error);
  }
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/new", (req, res) => {
  res.render("new-campaign");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
