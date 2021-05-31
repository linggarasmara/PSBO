const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const methodOverride = require("method-override");
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

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const data = await Dana.find({});
    res.render("home", { data });
  } catch (error) {
    res.status(300).send("an error occured!", error);
  }
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

app.get("/show/:id", async (req, res) => {
  const e = await Dana.findById(req.params.id);
  res.render("show", { e });
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
app.listen(3000, () => {
  console.log("listening on port 3000");
});
