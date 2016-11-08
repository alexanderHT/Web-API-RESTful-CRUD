'use strict'

var mongoose = require('mongoose');

var memoSchema = mongoose.Schema({
    id : String,
    title : String,
    content : String
},{
  timestamps : true
});

module.exports  = mongoose.model('memos', memoSchema);
// module.exports  = mongoose.model('[nama collection di database]', customerSchema);
