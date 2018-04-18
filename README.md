# serverless-plugin-package-json

Expose package.json properties to your serverless services.

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
