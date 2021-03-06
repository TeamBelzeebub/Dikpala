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
import ScanCtrl from '../controllers/scan.controller.js';
// Modules

const App = 'dikpala';

// App
Angular.module(App, [
  'angular-meteor',
  'ionic'
]);


new Loader(App)
  .load(RoutesConfig)
  .load(ScanCtrl);


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
