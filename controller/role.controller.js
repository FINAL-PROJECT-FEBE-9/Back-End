const repository = require("./role.repository");

module.exports = {
  list: async function(req, res) {
    const roles = await repository.getAll();

    return res.json(roles);
  },

  create: async function(req, res) {
    const role = await repository.add(1, {
      name: req.body.name
    })
    return res.json(role);
  },

  detail: async function(req, res) {
    const role = await repository.getDetail(req.params.id);

    return res.json(role);
  },

  update: async function(req, res) {
    await repository.update(req.params.id, req.body);
    return res.json('Updated')
  },

  deleteData: async function(req, res) {
    await repository.delete(req.params.id)
    return res.json('Deleted')
  },
};
