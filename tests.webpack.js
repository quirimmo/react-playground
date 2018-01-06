var context = require.context('./src/app', true, /\.spec\.jsx$/);
context.keys().forEach(context);
module.exports = context;