const Role =  require('../models/role')

module.exports = {
  getAll: async function() {
    const result = await Role.find()

    return result
  },

  getDetail: async function (id) {
    const result = await Role.findById(id).exec()

    return result
  },

  getRoleByName: async function(name) {
    return await Role.findOne({ name: name}).exec()
  },

  add: async function(name) {
    const role = await Role.create({
      name: name
    })

    return role
  },

  update: async function (id, model) {
    return Role.findByIdAndUpdate(
      id, 
      {
        $set: {
          name: model.name
        }
      },
      { new: true }
    )
  },

  delete: async function (id) {
    return Role.findByIdAndRemove(id)
  }
}
