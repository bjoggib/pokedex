import { toast } from "react-toastify";
import { successStyles, errorStyles } from "./toastStyles";
import { stringCapitalized } from "./utils";

const saveToPokeDexSuccess = name =>
  toast.success(`${stringCapitalized(name)} added to My PokeDex`, successStyles);

const saveToPokeDexError = name =>
  toast.error(`Unable To add ${stringCapitalized(name)} to My PokeDex`, errorStyles);

const deleteFromPokeDexSuccess = name => {
  toast.success(`${stringCapitalized(name)} deleted from to My PokeDex!`, successStyles);
};

const deleteFromPokeDexError = name =>
  toast.error(`Unable to delete ${stringCapitalized(name)} from to My PokeDex!`, errorStyles);

const noResponseFromServer = () =>
  toast.error("The server is not responding. Please try to refresh the page", errorStyles);

export {
  saveToPokeDexSuccess,
  saveToPokeDexError,
  deleteFromPokeDexSuccess,
  deleteFromPokeDexError,
  noResponseFromServer
};
