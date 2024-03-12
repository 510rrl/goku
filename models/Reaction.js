const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(

  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = reactionSchema;