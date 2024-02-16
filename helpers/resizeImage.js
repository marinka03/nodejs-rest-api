const Jimp = require('jimp');

const resizeImage = async () => {
  const image = await Jimp.read(req);
  image.resize(250, 250);
  await image.writeAsync(res);
};

module.exports = resizeImage;
