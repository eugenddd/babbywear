const express = require("express");
const session = require("express-session");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consola = require("consola");

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3001;

const mongoose = require("mongoose");
const dbConfig = require("./config/db");

// import "dotenv/config";
const app = express();

const fileUpload = require("express-fileupload");
// app.use(busboy());

const { exec } = require("child_process");

exec(
  "mongod --config /usr/local/etc/mongod.conf --fork",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

// mongoose.set("useCreateIndex", true);

mongoose
  .connect(dbConfig.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });

// app.use(express.static("public"));
app.use(
  fileUpload({
    createParentPath: true,
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: ["sofyisthenumber1"],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

var corsOptions = {
  origin: "http://localhost",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const sessionConfig = {
  secret: "GSL",
  name: "GSL",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "strict", // THIS is the config you are looing for.
  },
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(session(sessionConfig));

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

app.use("/static", express.static("public"));

// app.use(async(req, res, next) => {
//   if (req.headers["x-access-token"]) {
//     const accessToken = req.headers["x-access-token"];
//     const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
//     // Check if token has expired
//     if (exp < Date.now().valueOf() / 1000) {
//       return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
//     }
//     res.locals.loggedInUser = await User.findById(userId);
//     next();
//   } else {
//     next();
//   }
// });

const productRoute = require("./api/v1/routes/product");
app.use("/api", productRoute);

const itemRoute = require("./api/v1/routes/item");
app.use("/api", itemRoute);

const cartRoute = require("./api/v1/routes/cart");
app.use("/api", cartRoute);

app.listen(port, () => {
  console.log(`Checkout Backend is running on ${port}`);
});

module.exports = app;
