import TableBody from "./table-body.component";
import TableHeader from "./table-header.component";

const Table = (props) => {
  const { items, columns, sortColumns, onSort } = props;

  return (
    <>
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumns={sortColumns}
          onSort={onSort}
        />
        <TableBody items={items} columns={columns} />
      </table>
    </>
  );
};

export default Table;
