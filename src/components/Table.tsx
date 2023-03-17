interface Props {
  columnNames: string[];
  data: object[];
}
const Table = ({ columnNames, data }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columnNames.map((column) => (
            <th>{column.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((d, i) => (
            <td>{d}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
