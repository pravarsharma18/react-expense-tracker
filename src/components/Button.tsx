import React from "react";

interface Props {
  name: string;
  color?: "primary" | "secondary" | "warning" | "danger";
}
const Button = ({ name, color = "primary" }: Props) => {
  return <button className={"btn btn-" + color}>{name}</button>;
};

export default Button;
