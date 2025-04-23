const express = require("express");
const { addSchool, listSchools } = require("../controllers/schoolController");

const router = express.Router();
// Add a simple home route
router.get("/", (req, res) => {
    res.json({ message: "Welcome to School API" });
  });
  
router.post("/addSchool", addSchool);
router.get("/listSchools", listSchools);

module.exports = router;
