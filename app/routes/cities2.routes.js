module.exports = app => {
    const cities2 = require("../controllers/cities2.controller.js");
    var router = require("express").Router();
    // Create a new cities
    router.post("/", cities2.create);
    // lay thong tin tat ca thanh pho
    router.get("/", cities2.findAll);
    // lay thong tin mot thanh pho voi id
    router.get("/:id", cities2.findOne);
    // cap nhat thong pho voi id
    router.put("/:id", cities2.update);
    // xoa thanh pho voi id
    router.delete("/:id", cities2.delete);
    // xoa tat ca thanh pho
    router.delete("/", cities2.deleteAll);
    app.use('/api/cities2', router);
  };