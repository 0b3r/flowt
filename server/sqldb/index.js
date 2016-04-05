/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Account = db.sequelize.import('../api/account/account.model');
db.Location = db.sequelize.import('../api/location/location.model');
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');

db.Account.hasMany(db.User, {as: 'User'});
db.Account.hasMany(db.Location, {as: 'Location'});



/*Object.keys(db).forEach(function(modelName){
	if('associate' in db[modelName]){
		db[mdoelName].associate(db);
	}
});*/


module.exports = db;