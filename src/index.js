const context = require.context('./operations', false, /\.op\.js$/);
const operations = context.keys().forEach(context);

const calculib = operations.reduce((acc, mod) => {
  acc = {...acc, ...mod};
  return acc;
}, {});

export default calculib;