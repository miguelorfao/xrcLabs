import express from "express";
import cors from "cors";
import jwt, { decode } from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import db from "./db.config.js";
const salt = 10;
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

// ADMIN ACCOUNT

// Validation data for users to sign up, login or either edited their details or event forgotten pass word
// password ar hashed with regex pattern for the following
// Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one underscore but no other special character, no space and it must be 8 - 16 characters long.

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
app.get("/AdminLogin", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

// post new admin user from admin account
app.post("/AdminAccount", (req, res) => {
  const isValidEmail = "SELECT * FROM `admin` WHERE Email = ?";
  db.query(isValidEmail, [req.body.email], (err, data) => {
    if (err) return console.log(err);

    if (data.length > 0) {
      return res.json({ Error: "Email taken try a different Email" });
    } else {
      console.log("Email Available");
      const q = "INSERT INTO `admin`(`Name`, `Email`,`Password`) VALUES (?)";
      bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error for hashing password" });
        const values = [req.body.name, req.body.email, hash];
        db.query(q, [values], (err, data) => {
          if (err) return res.json({ Error: "Theres seems to be an error" });
          return res.json({ Status: "Employee added Successfully" });
        });
      });
    }
  });
});

// Login user
app.post("/AdminLogin", (req, res) => {
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

// collecting data fro db for all signed up Admin staff members
// collecting data
app.get("/AdminAccount", (req, res) => {
  const q = "SELECT * FROM `admin`";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});

// The end of admin Account
// ------------------------------------------------------------------------------------------------------------//

// Calender data input, collection as delete
// Input data to calendar db
// app.put("/AdminCalendar", (req, res) => {
//   const q =
//     "INSERT INTO Calendar (`Title`,`StartDate`, `EndDate`, `startTime`,`endTime`) VALUES (?)";
//   db.query(q, [
//     req.body.title,
//     req.body.startDate,
//     req.body.endDate,
//     req.body.startTime,
//     req.body.endTime,
//   ]);
//   if (err) return res.json({ Error: "An error has happened" });
//   return res.json({ Status: "Success" });
// });

// app.get("AdminCalendar", (req, res) => {
//   const q = "SELECT * FROM Calendar";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// app.delete("/AdminCalendar/:id", (req, res) => {
//   const q = "DELETE FROM Calendar WHERE ID = ?";
//   db.query(q, [req.params.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

// end of calendar data Api
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
