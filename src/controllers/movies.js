const Movies = require("../models/movies");

// POST
exports.createMovie = async (req, res) => {
  try {
    const newMovie = new Movies(req.body);
    const saveMovie = await newMovie.save();
    res.status(200).json({
      message: "Create movie success",
      saveMovie,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GETALL
exports.getAllMovies = async (req, res) => {
  try {
    const getDataMovies = await Movies.find();
    res.status(200).json(getDataMovies);
  } catch (error) {
    res.status(500).json(error);
  }
};
// GETONE
exports.getOneMovie = async (req, res) => {
  try {
    const getDataMovie = await Movies.findById(req.params.id);
    res.status(200).json(getDataMovie);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE
exports.deleteMovie = async (req, res) => {
  try {
    await Movies.findByIdAndDelete(req.params.id);
    res.status(200).json("Berhasil Menghapus Movie");
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE
exports.updateMovie = async (req, res) => {
  try {
    const updateDataMovie = await Movies.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },

      { new: true }
    );
    res.status(200).json({
      message: "Movie berhasil diupdate",
      updateDataMovie,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
