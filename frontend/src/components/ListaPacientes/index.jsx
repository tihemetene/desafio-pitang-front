import React from 'react';
import {
  Row, Button, Table,
} from 'react-bootstrap';

const ListaPacientes = () => { 
  return (
    <Row>
      <Table className="m-2">
        <thead>
            <th>#</th>
            <th>Paciente</th>
            <th>Dia</th>
            <th>Status</th>
        </thead>
        <tbody>
            <tr>
              <td>
                <input
                  className="m-2"
                  type="checkbox"
                />

              </td>
              <td width="70%">
                
              </td>
              <td>
                <Button
                  className="ml-2"
                  variant="secondary"
                >
                  +
                </Button>
              </td>
            </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default ListaPacientes;