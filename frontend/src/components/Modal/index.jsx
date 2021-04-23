import React from 'react';
import { Modal} from 'react-bootstrap'

const MeuModal = ({props, title, children}) => (
  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
  

export default MeuModal;