const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movies = new Schema(
  {
    moviesName: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    posterMovie: {
      type: String,
      required: true,
    },
    urlMovie: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movies", Movies);
