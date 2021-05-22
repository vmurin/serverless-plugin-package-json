# DEPRECATED

**This package is deprecated!** You don't need it anymore.
Just use the built in serverless syntax like following:

```yaml

plugins:
  - serverless-plugin-package-json

functions:
  myFunction:
    name: just-do-the-job
    description: 'App version: ${file(./package.json):version}'

```

## OLD README serverless-plugin-package-json

Expose `package.json` properties to your serverless services and make it available in `serverless.yml`.

## Usage

For example: use package version in function description

```yaml

plugins:
  - serverless-plugin-package-json

functions:
  myFunction:
    name: just-do-the-job
    description: 'Version: ${pkgjson:version}'

```

Using the snippet above you can any time check the version of deployed Lambda function
