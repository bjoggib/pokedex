import React from "react";
import { toast } from "react-toastify";
import Button from "../components/common/Button";

const renderButton = (id, name, myPokeDex, savePokemon, deletePokemon) => {
  let clickHandler = () =>
    savePokemon(name, id)
      .then(() => toast.success(`${name} added to My PokeDex!`))
      .catch(() => toast.error(`Unable to add ${name} to My PokeDex!`));
  let text = "Save To My PokeDex";
  let classes = "btn";
  if (myPokeDex.find(p => parseInt(p.id, 10) === parseInt(id, 10))) {
    clickHandler = () =>
      deletePokemon(id)
        .then(() => toast.success(`${name} deleted from to My PokeDex!`))
        .catch(() => toast.error(`Unable to delete ${name} from to My PokeDex!`));
    text = "Delete From My PokeDex";
    classes += " btn-danger";
  }
  return <Button classes={classes} text={text} handleClick={clickHandler} />;
};

export { renderButton };
