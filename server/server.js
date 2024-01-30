import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt, { decode } from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000/Admin"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

// DB connections

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "zrclabs",
});

db.connect();

// Login function for verified user
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not Authenticated" });
  } else {
    jwt.verify(token, "jwt-secret", (err, decode) => {
      if (err) {
        return res.json({ Error: "Token is not okay" });
      } else {
        req.name = decode.name;
        next();
      }
    });
  }
};
app.get("/Admin", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

// post new admin user from admin account
app.post("/AdminAccount", (req, res) => {
  const q = "INSERT INTO `admin`(`Name`, `Email`,`Password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [req.body.name, req.body.email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json({ Error: "Theres seems to be an error" });
      return res.json({ Status: "Success" });
    });
  });
});

// Login user
app.post("/Admin", (req, res) => {
  const q = "SELECT * FROM `admin` WHERE Email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].Password,
        (err, response) => {
          if (err) return res.json({ Error: "Password compare error" });
          if (response) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "jwt-secret", { expiresIn: "1h" });
            res.cookie("token", token);
            return res.json({ Status: "Success" });
          } else {
            return res.json({ Error: "Password dose not match" });
          }
        }
      );
    } else {
      return res.json({ Error: "No Email Found" });
    }
  });
});

// Delete user from admin account
app.delete("/AdminAccount/:id", (req, res) => {
  const q = "DELETE FROM admin WHERE ID = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json({ Error: "An Error has happened" });
    return res.json({ Status: "Success" });
  });
});

// edit user from Admin Account
app.put("/AdminAccount/:id", (req, res) => {
  const q = "UPDATE admin SET Name = ?, Email = ?, Password = ?, WHERE ID = ?";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });

    db.query(
      q,
      [req.body.name, req.body.email, hash, req.params.id],
      (err, data) => {
        if (err) return console.log(err);
        return console.log(data);
      }
    );
  });
});

// logging out and clearing stored cookies
app.get("/Logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Cookies have been cleared" });
});

// forgotten password

app.put("/ForgottenPassword/:id", (req, res) => {
  const q = "UPDATE admin SET Password = ? WHERE Email = ?";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    db.query(q, [hash, req.params.id], (err, data) => {
      if (err) return res.json(err);
      return res.json({ Status: "Success" });
    });
  });
});

// collecting data
app.get("/AdminAccount", (req, res) => {
  const q = "SELECT * FROM `admin`";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});
app.get("/AdminCollabs", (req, res) => {
  const q = "SELECT * FROM `collabs`";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

// adding data
app.post("/AdminCollabs", (req, res) => {
  const q =
    "INSERT INTO `collabs`(`Date`, `Server`,`Allocation`,`Entries`, `Platform`) VALUES (?)";
  const values = [
    req.body.date,
    req.body.server,
    req.body.allocation,
    req.body.entries,
    req.body.platform,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
