import { Config } from 'angular-ecmascript/module-helpers';

import homeTemplateUrl from '../templates/home.html';
import userTemplateUrl from '../templates/user.html';
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
      .state('home.user', {
        url: '/user',
            templateUrl: userTemplateUrl,
            controller: 'UserCtrl as user'
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


    this.$urlRouterProvider.otherwise('home/user');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
// export default RoutesConfig;
