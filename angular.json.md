# angular.json
```js
{
  // tool to validate all the files in the directory
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  // maybe you have more than one projects, this define the container for all the projects
  "newProjectRoot": "projects",
  "projects": { // the projects you have
    "ng-arabi": { // project 1
      "projectType": "application", // you can have application or library
      "schematics": {// the schematics you want to use, manupulate the cli
        "@schematics/angular:component": { // the schematic you want to use
          "prefix": "hamza" // now when you create a component, the prefix will be hamza <hamza-componentName>
        }
      }
      }, 
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": { // the build configuration
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ng-arabi",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": { // the serve configuration
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "ng-arabi:build:production"
            },
            "development": {
              "browserTarget": "ng-arabi:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": { // the extract-i18n configuration
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "ng-arabi:build"
          }
        },
        "test": { // the test configuration
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}
