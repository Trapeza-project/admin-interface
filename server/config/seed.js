/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var Thing = sqldb.Thing;
var User = sqldb.User;
var Person = sqldb.Person;

Person.sync()
  .then(() =>
    Person.destroy({ where: {} })
  )
  .then(() => {
    Person.bulkCreate([{
      name: 'Anders Svensson',
      securityNumber: 199010101234,
      address: "Sveavägen 45",
      age: 45,
      activity: JSON.stringify([
        {timestamp: '2016-10-23 12:30:33', type: 'info', info: 'Data changed'},
        {timestamp: '2016-10-21 12:30:33', type: 'info', info: 'Got new data from Skatteverket'},
        {timestamp: '2016-10-18 12:30:33', type: 'info', info: 'Data changed'},
        {timestamp: '2016-09-20 12:30:33', type: 'warning', info: 'Data not verified'},
        {timestamp: '2016-08-23 12:30:33', type: 'error', info: 'Strange thing happened'}
      ])
    }])
      .then(() => {
        console.log('finished populating persons');
      });
  });

Thing.sync()
  .then(() =>
     Thing.destroy({ where: {} })
  )
  .then(() => {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    }])
      .then(() => {
        console.log('finished populating things');
      });
  });

User.sync()
  .then(() => User.destroy({ where: {} }))
  .then(() => {
    User.bulkCreate([{
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }])
    .then(() => {
      console.log('finished populating users');
    });
  });
