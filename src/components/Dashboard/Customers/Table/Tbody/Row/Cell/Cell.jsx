import classNames from "classnames";
import classes from "./styles.module.scss";

export default function Cell({ col, field }) {
  switch (field) {
    case "status":
      return (
        <td
          className={classNames(classes.Cell, {
            [classes.inactive]: col === "Inactive",
          })}
          align="center"
        >
          <div>{col}</div>
        </td>
      );
    default:
      return <td>{col}</td>;
  }
}
