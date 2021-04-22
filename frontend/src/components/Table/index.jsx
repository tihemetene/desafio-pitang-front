/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Table } from 'react-bootstrap';


const TableComponent = ({ columns = [], rows = [] }) => {
  // columns.sort(function(a,b){
  //   // Turn your strings into dates, and then subtract them
  //   // to get a value that is either negative, positive, or zero.
  //   return new Date(b.date) - new Date(a.date);
  // });

  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.id}>
                {
                column.render ? column.render(row[column.id], row) : row[column.id]
              }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableComponent;