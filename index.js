const moment = require("moment/moment");

function DateTime(){
    return `Your locale is:${moment.locale()}. Today is ${moment().format('DD-MM-YYYY')};`;
  //return 'This is Kangana';
}

module.exports = DateTime;