import { toast } from "react-toastify";
import { successStyles, errorStyles } from "./toastStyles";

const saveToPokeDexSuccess = name => toast.success(`${name} added to My PokeDex`, successStyles);

const saveToPokeDexError = name => toast.error(`Unable To add ${name} to My PokeDex`, errorStyles);

const deleteFromPokeDexSuccess = name => {
  console.log("name:", name);
  toast.success(`${name} deleted from to My PokeDex!`, successStyles);
};

const deleteFromPokeDexError = name =>
  toast.error(`Unable to delete ${name} from to My PokeDex!`, errorStyles);

export {
  saveToPokeDexSuccess,
  saveToPokeDexError,
  deleteFromPokeDexSuccess,
  deleteFromPokeDexError
};
