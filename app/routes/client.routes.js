module.exports = app => {
    const clients = require("../controllers/client.controller.js");

    var router = require("express").Router();

    // Create a new Client
    router.post("/", clients.create);

    // Retrieve all category Clients
    router.get("/clients", clients.findAllClients);

    // Retrieve a single Client with id
    router.get("/:id", clients.findOne);

    // Update a Client with id
    router.put("/:id", clients.update);

    // Delete a Client with id
    router.delete("/:id", clients.delete);

    // Delete all Clients
    router.delete("/", clients.deleteAll);

    app.use('/api/client', router);
};