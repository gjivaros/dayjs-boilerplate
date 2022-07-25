const dayjs = require('dayjs');

const today = dayjs(new Date().toISOString());
const diff = today.diff('2022 07 27', 'days');
console.log(diff);
