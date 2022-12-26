const asyncHandler = require("express-async-handler");
const projectModel = require("../models/project.model.js");
const customerModel = require("../models/customer.model.js");

// @desc Get projects
// @route GET /api/project
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await projectModel.find();

  res.status(200).json(projects);
});

// @desc Get projects by CustomerID
// @route GET /api/project/id:
// @access Private
const getProjectsbyCustomerId = asyncHandler(async (req, res) => {
  CustomerID = req.params.id;

  const projects = await projectModel.find({ CustomerID });

  res.status(200).json(projects);
});

// @desc Create project
// @route POST /api/projects/
// @access Private
const createProject = asyncHandler(async (req, res) => {
  const { ProjectNumber, Adress, CustomerID } = req.body;

  if (!ProjectNumber || !Adress || !CustomerID) {
    res.status(400);
    throw new Error("Please add json object from type Project in the Body.");
  }

  //Check if Project exists
  const projectExists = await projectModel.findOne({
    ProjectNumber,
    CustomerID,
  });
  const customerExtis = await customerModel.findOne({ _id: CustomerID });

  if (customerExtis == null) {
    res.status(400);
    throw new Error("Customer dosent exists");
  }

  if (projectExists) {
    res.status(400);
    throw new Error("Project already exists");
  }

  const newProject = await projectModel.create(req.body);

  res.status(201).json({ message: "Project wurde erfolgreich hinzugefügt" });
});

module.exports = {
  getProjects,
  getProjectsbyCustomerId,
  createProject,
};
