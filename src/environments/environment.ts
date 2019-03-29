// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyDQVfe2KYXHjqw3gyoT8NQT7gM2i2gDoEY",
    authDomain: "angular-to-firebase.firebaseapp.com",
    databaseURL: "https://angular-to-firebase.firebaseio.com",
    projectId: "angular-to-firebase",
    storageBucket: "angular-to-firebase.appspot.com",
    messagingSenderId: "501544566071"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
