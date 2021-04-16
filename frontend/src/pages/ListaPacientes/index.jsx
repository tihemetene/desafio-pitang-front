import React from 'react';
import {
  Row, Button, Table,
} from 'react-bootstrap';

const TodoList = () => { 
  return (
    <Row>
      <Table className="m-2">
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td>
                <input
                  className="m-2"
                  type="checkbox"
                />

              </td>
              <td width="70%">
                
              </td>
              <td>
                <Button onClick={() => {}}>Editar</Button>
                <Button
                  className="ml-2"
                  variant="danger"
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))
        </tbody>
      </Table>
    </Row>
  );
};

export default TodoList;