import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import {deletePortofolio} from '../../configs/redux/actions/portofolioAction';

function DeletePorto({id}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deletePortofolio(id, setShow));
  };

  return (
    <>
      <Button className="w-100 mt-2" variant="dark" onClick={handleShow}>
        Delete Portofolio
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h3 className="text-danger text-center">Sure wanna delete this portofolio? This action are permanent</h3>
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

export default DeletePorto;
