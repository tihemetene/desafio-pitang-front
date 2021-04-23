/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from '../../util/api'
import TableComponent from '../Table'

const List = ({ columns, endpoint, reloadCount}) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () =>{
    setLoading(true);
    try{
      const response = await axios.get(endpoint);
      setRows(response.data.data);
      setLoading(false);
    }catch(e){
      console.log("Falha na requisição")
    }
  }

  useEffect(() => {
    fetchData();
  }, [reloadCount]);

  return (
        <>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Carregando...</span>
            </Spinner>
          ) : (
            <TableComponent columns={columns} rows={rows} />
          )}
        </>
  )
}
export default List;
