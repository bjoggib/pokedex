import React from "react";
import { toast } from "react-toastify";

import Button from "../components/common/Button";
import { successStyles, errorStyles } from "./toastStyles";

const renderButton = (id, name, myPokeDex, savePokemon, deletePokemon) => {
  let text = "Save To My PokeDex";
  let classes = "btn";
  let clickHandler = () =>
    savePokemon(name, id)
      .then(() => toast.success(`${name} added to My PokeDex!`, successStyles))
      .catch(() => toast.error(`Unable to add ${name} to My PokeDex!`, errorStyles));

  if (myPokeDex.find(p => parseInt(p.id, 10) === parseInt(id, 10))) {
    text = "Delete From My PokeDex";
    classes += " btn-danger";
    clickHandler = () =>
      deletePokemon(id)
        .then(() => toast.success(`${name} deleted from to My PokeDex!`, successStyles))
        .catch(() => toast.error(`Unable to delete ${name} from to My PokeDex!`, errorStyles));
  }
  return <Button classes={classes} text={text} handleClick={clickHandler} />;
};

export { renderButton };
