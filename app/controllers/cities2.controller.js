const { cities2 } = require("../models");
const db = require("../models");
const city = db.cities2;
const Op = db.Sequelize.Op;
// tao va luu thanh pho moi
 

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // tao thanh pho
    const city = {
      name: req.body.name,
      code: req.body.code,
    };
    // Luu thanh pho vao database
    cities2.create(city)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the cities."
        });
      });
  };
  exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    cities2.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cities."
        });
      });
  };
  exports.findOne = (req, res) => {
    const id = req.params.id;
    cities2.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find cities with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving cities with id=" + id
        });
      });
  };
  exports.update = (req, res) => {
    const id = req.params.id;
    cities2.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "cities was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update cities with id=${id}. Maybe cities was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating cities with id=" + id
        });
      });
  };
  exports.delete = (req, res) => {
    const id = req.params.id;
    cities2.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "cities was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete cities with id=${id}. Maybe cities was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete cities with id=" + id
        });
      });
  };
  exports.deleteAll = (req, res) => {
    cities2.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} cities were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all cities."
        });
      });
  };
  exports.findAllPublished = (req, res) => {
    cities2.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cities."
        });
      });
  };
  