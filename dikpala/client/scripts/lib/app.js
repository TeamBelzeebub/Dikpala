// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';
import Loader from 'angular-ecmascript/module-loader';

import RoutesConfig from '../routes';
import DestinationCtrl from '../controllers/destination.controller.js';
// Modules

const App = 'dikpala';

// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);


new Loader(App)
  .load(RoutesConfig);


// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}