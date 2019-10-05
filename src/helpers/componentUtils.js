import React from "react";
import { toast } from "react-toastify";
import { css } from "glamor";

import Button from "../components/common/Button";

const commonStyles = {
  color: "black",

  borderRadius: "15px !important",
  border: "2px solid black",
  fontFamily: "Gloria Hallelujah !important",
  textAlign: "center"
};
const successStyle = {
  className: css({
    ...commonStyles,
    background: "#69e781 !important"
  })
};

const errorStyle = {
  className: css({
    ...commonStyles,
    background: "#c82333; !important",
    color: "#fff"
  })
};

const renderButton = (id, name, myPokeDex, savePokemon, deletePokemon) => {
  let clickHandler = () =>
    savePokemon(name, id)
      .then(() => toast.success(`${name} added to My PokeDex!`, successStyle))
      .catch(() => toast.error(`Unable to add ${name} to My PokeDex!`, errorStyle));
  let text = "Save To My PokeDex";
  let classes = "btn";
  if (myPokeDex.find(p => parseInt(p.id, 10) === parseInt(id, 10))) {
    clickHandler = () =>
      deletePokemon(id)
        .then(() => toast.success(`${name} deleted from to My PokeDex!`, successStyle))
        .catch(() => toast.error(`Unable to delete ${name} from to My PokeDex!`, errorStyle));
    text = "Delete From My PokeDex";
    classes += " btn-danger";
  }
  return <Button classes={classes} text={text} handleClick={clickHandler} />;
};

export { renderButton };
