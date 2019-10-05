import { css } from "glamor";

const commonStyles = {
  color: "black",

  borderRadius: "15px !important",
  border: "2px solid black",
  fontFamily: "Gloria Hallelujah !important",
  textAlign: "center"
};
const successStyles = {
  className: css({
    ...commonStyles,
    background: "#69e781 !important"
  })
};

const errorStyles = {
  className: css({
    ...commonStyles,
    background: "#c82333; !important",
    color: "#fff"
  })
};

export { successStyles, errorStyles };
