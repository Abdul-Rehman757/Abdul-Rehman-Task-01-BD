var routes = require("express").Router();

const { createTeacher, getTeacher, DelTeacher } = require("../controllers/teacherController");
const {createschema}= require("../validations/admin");



routes.post("/create-teacher",createschema,createTeacher);
routes.get("/get-teacher",getTeacher);
routes.delete("/delete-teacher",DelTeacher);

module.exports = routes;