
var routes = require("express").Router();
const { createAdmin, getAdmin, DeleteAdmin } = require("../controllers/adminController");
const {createschema}= require("../validations/admin");


routes.post("/create-admin",createschema,createAdmin);
routes.get("/get-admin",getAdmin);
routes.delete("/del-admin",DeleteAdmin);

module.exports= routes;