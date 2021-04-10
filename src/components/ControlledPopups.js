import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
function ControlledPopups(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

    return (
      <>
        {setShow(props.canShow)}
        <Modal show={props.canShow} onHide={handleClose}>
        
        <Modal.Header closeButton>
        <Modal.Title>MESSAGE BOX</Modal.Title>
        </Modal.Header>

        <Modal.Body>Thank you for Registration!!</Modal.Body>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        </Modal.Footer>
        </Modal>

      </>
    )
}

export default ControlledPopups
