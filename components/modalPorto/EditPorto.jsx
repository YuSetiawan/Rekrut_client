import Image from 'next/image';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {updatePortofolio} from '../../configs/redux/actions/portofolioAction';
import {useDispatch} from 'react-redux';

function EditPortofolio({id, name, repository}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  const [portoAction, setPortoAction] = useState({
    name,
    repository,
    photo: '',
  });

  const handleChangePortofolio = (e) => {
    setPortoAction({
      ...portoAction,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditPortofolio = (e) => {
    e.preventDefault();
    dispatch(updatePortofolio(id, portoAction, photo, setShow));
  };
  return (
    <>
      <Button variant="warning" onClick={handleShow} className="w-100 mt-2">
        Update Portofolio
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Portofolio</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleEditPortofolio}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder={name} name="name" id={id} value={portoAction.name} onChange={handleChangePortofolio} />
            <input className="form-control mt-3" type="text" placeholder={repository} name="repository" id={id} value={portoAction.repository} onChange={handleChangePortofolio} />
            <input className="form-control mt-3 p-1" type="file" placeholder="photo" name="photo" id={id} onChange={handleUpload} />
            <div className="text-center">{preview ? <Image src={preview} alt="avatar" height={200} width={200} className="m-auto my-3" style={{objectFit: 'contain'}} /> : ''}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditPortofolio;
