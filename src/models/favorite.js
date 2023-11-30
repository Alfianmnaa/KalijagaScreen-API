const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Favorite = new Schema(
  {
    movieId: {
      type: Schema.Types.ObjectId,
      ref: "Movies", // Menghubungkan dengan model Movies
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", Favorite);
