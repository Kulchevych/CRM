import Row from "./Row/Row";
import classes from "./styles.module.scss";

export default function Tbody({ columns }) {
  return (
    <tbody className={classes.Tbody}>
      {columns.map((item) => (
        <Row key={`${Math.random()}`} row={item} />
      ))}
    </tbody>
  );
}
