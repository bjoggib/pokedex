const NAME_MAX_LENGTH = 10;
const CAPTURE_RATE_MAX = 255;
const stringCapitalized = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const shortenString = str => (str.length > NAME_MAX_LENGTH ? `${str.slice(0, 8)}...` : str);

const formatString = str => stringCapitalized(shortenString(str));

const toInt = value => parseInt(value, 10);

const isInMyPokeDex = (pokeDex, pokemonId) => pokeDex.find(p => toInt(p.id) === toInt(pokemonId));

const fromHgtoKg = hg => toInt(hg) / 10;

const fromDmToCm = dm => toInt(dm) * 10;

const getCaptureRate = captureRate => Math.round((toInt(captureRate) / CAPTURE_RATE_MAX) * 100);

const getGenders = genderRate => {
  if (toInt(genderRate) === 8) {
    return "Female";
  }
  if (genderRate > 0) {
    return "Female, Male";
  }
  return "Genderless";
};

const getIdFromUrl = url => {
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];
  return id;
};

export {
  stringCapitalized,
  shortenString,
  formatString,
  isInMyPokeDex,
  fromHgtoKg,
  fromDmToCm,
  getGenders,
  getCaptureRate,
  getIdFromUrl
};
