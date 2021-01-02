# AngularMongoFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Development server

Run `firebase serve --only functions,hosting` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Deploy

Run `firebase deploy` for deploying to firebase server. The files will get deployed as per you congigured in firebase.json file.

This project has the below configuration

{
"hosting": {
"public": "dist/angular-mongo-firebase",
"rewrites":[{
"source":"/api",
"function":"app"
}],
"ignore": [
"firebase.json",
"**/.*",
"**/node_modules/**"
]
}
}

## FireBase Blaze Plan

Inorder to host firebase functions you must have Blaze Plan

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
