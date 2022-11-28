const User = require('../models/user')

module.exports = {
  register: async function(username, password, role) {

    // const brcyptedPassword =  bcryptjs.hash(password, 10)

    return await User.create({
      username: username,
      password: password,
      role: role
    })
  },

  getUserById: async function(id) {
    const user = await User.findById(id).populate("role").exec()

    return user
  },

  getUserByUsername: async function(username) {
    const user = await User.findOne({ username: username}).populate("role").exec()

    return user
  },

  updateRole: async function(id, role) {
    return User.findByIdAndUpdate(
      id, 
      {
        $set: {
          role: role
        }
      },
      { new: true }
    )
  }
};
