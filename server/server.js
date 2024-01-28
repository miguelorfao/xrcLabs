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

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "zrclabs",
});

db.connect();

// Login function
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
app.delete("AdminAccount/:id", (req, res) => {
  const q = "DELETE FROM admin  WHERE ID = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/AdminAccount/:id", (req, res) => {
  const q =
    "UPDATE admin SET Name = ?, Email = ?, Password = ?, AdminAccess = ? WHERE ID = ?";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });

    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.adminAccess,
      req.params.id,
    ];
    console.log(values);
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("success");
    });
  });
});
app.post("/AdminAccount", (req, res) => {
  const q =
    "INSERT INTO `admin`(`Name`, `Email`,`Password`,`AdminAccess`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    const values = [req.body.name, req.body.email, hash, req.body.adminAccess];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("success");
    });
  });
});

app.post("/Admin", (req, res) => {
  console.log(req.body.password.toString());
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

app.get("/Logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Cookies have been cleared" });
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
  console.log(req.body.fname);
  console.log(req.body.email);
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
