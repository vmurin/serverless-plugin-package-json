const VAR_PREFIX = 'pkgjson';

module.exports = class ServerlessPackageVars {
  constructor(serverless, options) {
    const delegate = serverless.variables.getValueFromSource.bind(serverless.variables)
    this.pjson = require(process.cwd() + '/package.json');

    serverless.variables.getValueFromSource = (variableString) => {
      if (variableString.startsWith(`${VAR_PREFIX}:`)) {
        const variable = variableString.split(`${VAR_PREFIX}:`)[1]
        return Promise.resolve(this.pjson[variable] || '')
      }

      return delegate(variableString)
    }
  }

}
