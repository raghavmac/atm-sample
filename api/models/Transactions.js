/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    atmId: { model: 'atm' },
    amount: { type: 'float', defaultsTo: 0 },
    mode: { type: 'string', enum: ['Credit', 'Debit'], required: true },
    x: { type: 'integer', defaultsTo: 0 },
    y: { type: 'integer', defaultsTo: 0 },
    z: { type: 'integer', defaultsTo: 0 }
  }
};
