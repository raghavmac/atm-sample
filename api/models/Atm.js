/**
* Atm.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: { type: 'string', required: true },
    total: { type: 'float', required: true },
    x: { type: 'integer', defaultsTo: 0 }, // For 1000's
    y: { type: 'integer', defaultsTo: 0 }, // For 500's
    z: { type: 'integer', defaultsTo: 0 }  // For 100''
  }
};
