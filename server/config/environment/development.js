'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/flowt-dev'
  },

  // Sequelize connection opions
  sequelize: {
    uri: 'mysql://root:synergy66@127.0.0.1:3306/flowt',
    options: {
      logging: console.log,
      //storage: 'dev.sqlite',
      define: {
        timestamps: true
      }
    }
  },

  // Seed database on startup
  seedDB: false

};
