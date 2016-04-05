/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var Thing = sqldb.Thing;
var User = sqldb.User;
var Location = sqldb.Location;
var Account = sqldb.Account;

Thing.sync()
  .then(() => {
    return Thing.destroy({ where: {} });
  })
  .then(() => {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });


Account.sync()
  .then(() => Account.destroy({ where: {} }))
  .then(() => User.destroy({ where: {} }))
  .then(() => Location.destroy({ where: {} }))
  .then(() => {

    User.create({
      provider: 'local',
      fname: 'Justin',
      lname: 'Ober',
      email: 'justindober@gmail.com',
      password: 'synergy66',
      role: 'admin'
    });

    Account.create({
      creditCard: 87889,
      active: true,
      Users: [{
        provider: 'local',
        fname: 'Kim',
        lname: 'Nelson',
        email: 'knelson@gmail.com',
        password: 'synergy66',
        role: 'owner'
      }],
      Locations: [{
        name: 'Default Location',
        address: '1716 Lakeside Road S.',
        city: 'Lethbridge',
        zip: 'T1K 3G8',
        region: 'Alberta',
        country: 'Canada',
        active: true
      }]
    },{
      include: [User, Location]
    }).then( account => {

    });
  });



