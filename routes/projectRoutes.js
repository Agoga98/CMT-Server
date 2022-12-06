const express = require('express')
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController.js')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', protect, getProjects)
router.post('/', protect, createProject)
//router.put('/:id', protect, updateProject)
//router.delete('/:id', protect, deleteProject)

module.exports = router;