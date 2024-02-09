import Cell from "./Cell/Cell";

export default function Row({ row }) {
  const cols = Object.entries(row);

  return (
    <tr>
      {cols.map((col) => (
        <Cell key={`${Math.random()}`} field={col[0]} col={col[1]} />
      ))}
    </tr>
  );
}
