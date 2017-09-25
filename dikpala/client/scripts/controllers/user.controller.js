import { MeteorCameraUI } from 'meteor/okland:camera-ui';
import { Controller } from 'angular-ecmascript/module-helpers';


export default class UserCtrl extends Controller {
 constructor() {
    super(...arguments);


 }

 scanPicture(){
  console.log("reached")
    MeteorCameraUI.getPicture({ width: 60, height: 60 }, (err, data) => {
      // if (err) return this.handleError(err);

      this.$ionicLoading.show({
        template: 'Updating picture...'
      });

      this.callMethod('updatePicture', data, (err) => {
        this.$ionicLoading.hide();
        // this.handleError(err);
      });
    });
 }
}

UserCtrl.$name = 'UserCtrl';
UserCtrl.$inject = ['$state', '$log'];
