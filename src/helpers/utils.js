const NAME_MAX_LENGTH = 10;
const CAPTURE_RATE_MAX = 255;

export const stringCapitalized = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const shortenString = str => (str.length > NAME_MAX_LENGTH ? `${str.slice(0, 8)}...` : str);

export const formatString = str => stringCapitalized(shortenString(str));

export const toInt = value => parseInt(value, 10);

export const isInMyPokeDex = (pokeDex, pokemonId) =>
  pokeDex.find(p => toInt(p.id) === toInt(pokemonId));

export const fromHgtoKg = hg => toInt(hg) / 10;

export const fromDmToCm = dm => toInt(dm) * 10;

export const getCaptureRate = captureRate =>
  Math.round((toInt(captureRate) / CAPTURE_RATE_MAX) * 100);

export const getGenders = genderRate => {
  if (toInt(genderRate) === 8) {
    return "Female";
  }
  if (genderRate > 0) {
    return "Female, Male";
  }
  return "Genderless";
};

export const getIdFromUrl = url => {
  const urlParts = url.split("/");
  const id = urlParts[urlParts.length - 2];
  return id;
};
