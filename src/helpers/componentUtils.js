import React from "react";

import Button from "../components/common/Button";
import { isInMyPokeDex } from "../helpers/utils";
import * as toast from "./toastFunctions";

const renderButton = (id, name, myPokeDex, savePokemon, deletePokemon) => {
  let text = "Save To My PokeDex";
  let classes = "btn";
  let clickHandler = () =>
    savePokemon(name, id)
      .then(() => toast.saveToPokeDexSuccess(name))
      .catch(() => toast.saveToPokeDexError(name));

  if (isInMyPokeDex(myPokeDex, id)) {
    text = "Delete From My PokeDex";
    classes += " btn-danger";
    clickHandler = () =>
      deletePokemon(id)
        .then(() => toast.deleteFromPokeDexSuccess(name))
        .catch(() => toast.deleteFromPokeDexError(name));
  }
  return <Button classes={classes} text={text} handleClick={clickHandler} />;
};

export { renderButton };
