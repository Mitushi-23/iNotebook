
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Thisisainotebookapp";

// Route-1 Create user
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be of atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Sorry the user already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
)

// Route-2 Login user
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user)
      {
        return res.status(400).json({error: "Please login with correct credentials"});
      }
      const passwordCompare = await bcrypt.compare(password,user.password);
      if(!passwordCompare)
      {
        return res.status(400).json({error: "Please login with correct credentials"});
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server Error");
   } })


// Route-3 Get logged in user details
router.post(
  "/getuser",fetchuser,async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
      } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
)


module.exports = router;
