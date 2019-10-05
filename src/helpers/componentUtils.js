import React from "react";
import Button from "../components/common/Button";

const renderButton = (id, name, myPokeDex, savePokemon, deletePokemon) => {
  let clickHandler = () => savePokemon(name, id);
  let text = "Save To My PokeDex";
  let classes = "btn";
  if (myPokeDex.find(p => parseInt(p.id, 10) === parseInt(id, 10))) {
    clickHandler = () => deletePokemon(id);
    text = "Delete From My PokeDex";
    classes += " btn-danger";
  }
  return <Button classes={classes} text={text} handleClick={clickHandler} />;
};

export { renderButton };
