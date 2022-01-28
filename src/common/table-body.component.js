import React from 'react';


const TableBody = ({ items: rows, columns }) => {
    
    return (
        <tbody>
            {
                rows.map(row => (
                    <tr>
                        {
                           columns.map( column =>{
                               return column.content(row,column.path);
                           })
                        }
                    </tr>
                ))
            }
        </tbody>
    );
}
 
export default TableBody;