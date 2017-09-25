import { Config } from 'angular-ecmascript/module-helpers';

import homeTemplateUrl from '../templates/home.html';
import scanTemplateUrl from '../templates/scan.html';
import destinationTemplateUrl from '../templates/destination.html';
import mapTemplateUrl from '../templates/map.html';
import mapimageTemplateUrl from '../templates/mapimage.html';
import maptextTemplateUrl from '../templates/maptext.html';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('home', {
        url: '/home',
            templateUrl: homeTemplateUrl
          }
        )
      .state('scan', {
        url: '/scan',
            templateUrl: scanTemplateUrl,
            controller: 'ScanCtrl as scanner'
          }

        )
        .state('destination', {
          url: '/destination',
              templateUrl: destinationTemplateUrl
            }

        )
        .state('map', {
          url: '/map',
              templateUrl: mapTemplateUrl
            }

        )
        .state('mapimage', {
          url: '/mapimage',
              templateUrl: mapimageTemplateUrl
            }

        )
        .state('maptext', {
          url: '/maptext',
              templateUrl: maptextTemplateUrl
            })


    this.$urlRouterProvider.otherwise('/home');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
// export default RoutesConfig;
