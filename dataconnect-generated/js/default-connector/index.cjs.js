const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'weather-app',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

