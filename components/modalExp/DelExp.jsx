import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Swal from 'sweetalert2';

function DeleteExperience({id}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`https://zany-ruby-whale-veil.cyclic.app/experience/${id}`)
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Delete Experience Success',
        });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Delete experience failed',
        });
      });
  };

  return (
    <>
      <Button className="w-100" variant="dark" onClick={handleShow}>
        Delete experience
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h3 className="text-danger text-center">Sure wanna delete this experience? This action are permanent</h3>
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

export default DeleteExperience;
