var routes = require("express").Router();

const { create, getAll, Delete } = require("../controllers/studentController");
const {createschema}= require("../validations/admin");


routes.post("/create-std", createschema,create);
routes.get("/get-std",getAll);
routes.delete("/del-std",Delete);

module.exports = routes;