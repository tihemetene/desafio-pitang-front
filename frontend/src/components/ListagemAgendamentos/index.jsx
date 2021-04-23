/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from '../../util/api'
import TableComponent from '../Table'
import { toast } from 'react-toastify'

const List = ({ columns, reloadCount}) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () =>{
    setLoading(true);
    try{
      const response = await axios.get('/user');
      setRows(response.data.data);
      setLoading(false);
    }catch(e){
      toast.error("Falha na requisição")
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
