const express = require('express')
const { getProjects, getProjectsbyCustomerId, createProject, updateProject, deleteProject } = require('../controllers/projectController.js')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', protect, getProjects)
router.get('/:id', protect, getProjectsbyCustomerId)
router.post('/', protect, createProject)
//router.put('/:id', protect, updateProject)
//router.delete('/:id', protect, deleteProject)

module.exports = router;