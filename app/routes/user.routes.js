module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    // Retrieve all category Users
    router.get("/users", users.findAllUsers);

    // Retrieve a single User with id
    router.get("/:id", users.findOne);

    // Update a User with id
    router.put("/:id", users.update);

    // Delete a User with id
    router.delete("/:id", users.delete);

    // Delete all Users
    router.delete("/", users.deleteAll);

    // Autentication user
    router.post('/auth', users.auth);

    app.use('/api/user', router);
};