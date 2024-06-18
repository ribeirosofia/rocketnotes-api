const express = require('express');
const NotesController = require('../controllers/NotesController');
const notesRoutes = express.Router(); 

const notesController = new NotesController();
notesRoutes.post("/:user_id", notesController.create.bind(notesController));
notesRoutes.get("/:id", notesController.show.bind(notesController));

module.exports = notesRoutes;