import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function DeleteSkill({id}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/skill/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow} style={{marginLeft: '-5px'}}>
        X
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h3 className="text-danger text-center">Sure wanna delete this Skill? This action are permanent</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="dark">
              Delete
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default DeleteSkill;
