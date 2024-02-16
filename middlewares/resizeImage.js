const Jimp = require('jimp');

const resizeImage = async (req, res, next) => {
  const { path } = req.file;
  const image = await Jimp.read(path);
  image.resize(250, 250);
  await image.writeAsync(path);
  next();
};

module.exports = resizeImage;
