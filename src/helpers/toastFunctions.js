import { toast } from "react-toastify";
import { successStyles, errorStyles } from "./toastStyles";
import { stringCapitalized } from "./utils";

export const saveToPokeDexSuccess = name =>
  toast.success(`${stringCapitalized(name)} added to My PokeDex`, successStyles);

export const saveToPokeDexError = name =>
  toast.error(`Unable To add ${stringCapitalized(name)} to My PokeDex`, errorStyles);

export const deleteFromPokeDexSuccess = name => {
  toast.success(`${stringCapitalized(name)} deleted from to My PokeDex!`, successStyles);
};

export const deleteFromPokeDexError = name =>
  toast.error(`Unable to delete ${stringCapitalized(name)} from to My PokeDex!`, errorStyles);

export const noResponseFromServer = () =>
  toast.error("The server is not responding. Please try to refresh the page", errorStyles);
