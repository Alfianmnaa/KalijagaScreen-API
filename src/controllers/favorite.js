const Favorite = require("../models/favorite");
const { findByIdAndDelete } = require("../models/movies");

exports.saveMovies = async (req, res) => {
  try {
    const { movieId, userId } = req.body;

    // Membuat instance Favorite
    const favorite = new Favorite({
      movieId,
      userId,
    });

    // Menyimpan data ke database
    const saveFavorite = await favorite.save();
    res.status(200).json({
      message: "Succes Saved movie",
      saveFavorite,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAllFavorite = async (req, res) => {
  try {
    const { userId } = req.params;

    // Menemukan semua film favorit berdasarkan userId
    const favorites = await Favorite.find({ userId }).populate("movieId");

    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengambil film favorit." });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.status(200).json("Succes Mengahapus movie dari favorite");
  } catch (error) {
    res.status(500).json(error);
  }
};
