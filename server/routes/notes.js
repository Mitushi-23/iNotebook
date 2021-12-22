const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");


router.get("/fetchname", fetchuser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.name);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// Route-1 Fetch all notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Route-2 Add notes
router.post(
  "/addnotes",
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be of atleast 8 characters").isLength(
      { min: 8 }
    ),
  ],
  fetchuser,
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route-3 Update notes
router.put(
  "/updatenote/:id",fetchuser,async (req, res) => {
    try {
      
      const { title, description, tag } = req.body;
      const newNote={};
      if(title){
        newNote.title=title
      };
      if(description){newNote.description=description};
      if(tag){newNote.tag=tag};
  
      let note = await Note.findById(req.params.id);
      if(!note){res.status(404).send("Not Found")}
  
      if(note.user.toString()!==req.user.id)
      {
        res.status(401).send("Not allowed");
      }
  
      note = await Note.findByIdAndUpdate(req.params.id, {$set:newNote}, {new:true});
      res.json({note});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

// Route-4 Delete Note
  router.delete(
    "/deletenote/:id",fetchuser,async (req, res) => {
      try {
        let note = await Note.findById(req.params.id);
        if(!note){res.status(404).send("Not Found")}
    
        if(note.user.toString()!==req.user.id)
        {
          res.status(401).send("Not allowed");
        }
    
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({"Success":"Note has been deleted!",note:note});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
    })



    



module.exports = router;
