const TableHeader = ({columns, sortColumns, onSort}) => {//sortColumn = {path: id, order: descending/ascending}
    const handleSort = ({ path, sorting}) => {
        if(!sorting) return;

        if (sortColumns.path === path) {
            if (sortColumns.order === "asc") {
              onSort({ path, order: "desc" });
            } else {
              onSort({ path, order: "asc" });
            }
          } else {
            onSort({ path, order: "asc" });
          }  
    }
    const getIcon = (path) => {
        if (sortColumns.path === path) {
          if (sortColumns.order === "asc") {
            return <i className="bi bi-sort-down"></i>;
          } else return <i className="bi bi-sort-down-alt"></i>;
        } else return null;
      };
    return (  
        <thead>
            <tr>
                {
                    columns.map( column=> {
                        return(
                            <th scope="col"
                                onClick={()=>handleSort(column)}
                            >
                                {column.label}{" "}
                                {getIcon(column.path)}
                            </th>
                        );
                    })
                }
            </tr>
        
        </thead>
    );
}
 
export default TableHeader;