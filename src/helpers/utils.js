const stringCapitalized = str =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const shortenString = str => (str.length > 10 ? `${str.slice(0, 8)}...` : str);

const formatString = str => stringCapitalized(shortenString(str));

export { stringCapitalized, shortenString, formatString };
