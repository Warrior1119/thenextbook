import React from "react";

import MoonLoader from "react-spinners/MoonLoader";

interface BaseSpinner {
  size?: number;
  color?: string;
}

const Spinner: React.FunctionComponent<BaseSpinner> = ({
  size = 20,
  color = "#645df6",
}) => {
  return <MoonLoader size={size} color={color} />;
};
export default Spinner;
