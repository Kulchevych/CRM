import classes from "./styles.module.scss";

export default function Thead({ columns }) {
  return (
    <thead className={classes.Thead}>
      <tr>
        {columns.map((column) => (
          <td
            key={column}
            style={{ textAlign: column === "Status" ? "center" : "" }}
          >
            {column}
          </td>
        ))}
      </tr>
    </thead>
  );
}
