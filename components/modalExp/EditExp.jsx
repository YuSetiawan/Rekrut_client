import Image from 'next/image';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import {updateExperience} from '../../configs/redux/actions/experienceAction';

function EditExperience({id, job_position, company_name, working_started, working_ended, description}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [experienceAction, setExperienceAction] = useState({
    job_position,
    company_name,
    working_started,
    working_ended,
    description,
  });

  const handleUpdateExperience = (e) => {
    setExperienceAction({
      ...experienceAction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitExperience = (e) => {
    e.preventDefault();
    dispatch(updateExperience(id, experienceAction, setShow));
  };
  return (
    <>
      <Button variant="warning" onClick={handleShow} className="w-100 mt-2">
        Update experience
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmitExperience}>
          <Modal.Header closeButton>
            <Modal.Title>Update experience</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="card-header">
              <h3>Experience</h3>
            </div>
            <div className="col-12">
              <div className="m-1"></div>
              <label htmlFor="validationDefault01" className="form-label">
                Position
              </label>
              <input type="text" className="form-control" id="validationDefault01" placeholder={job_position} name="job_position" value={experienceAction.job_position} onChange={handleUpdateExperience} required />
            </div>
            <div className="row mt-3">
              <div className=" col-12">
                <label htmlFor="validationDefault01" className="form-label">
                  Company name
                </label>
                <input type="text" className="form-control" id="validationDefault01" placeholder={company_name} name="company_name" value={experienceAction.company_name} onChange={handleUpdateExperience} required />
              </div>
              <div className=" col-6 mt-2 mt-lg-0">
                <label htmlFor="validationDefault01" className="form-label">
                  Started at
                </label>
                <input type="date" className="form-control" id="validationDefault01" name="working_started" value={experienceAction.working_started} onChange={handleUpdateExperience} required />
              </div>
              <div className=" col-6 mt-2 mt-lg-0">
                <label htmlFor="validationDefault01" className="form-label">
                  Ended at
                </label>
                <input type="date" className="form-control" id="validationDefault01" name="working_ended" value={experienceAction.working_ended} onChange={handleUpdateExperience} required />
              </div>
            </div>
            <div className="col-12 mt-3">
              <label htmlFor="validationDefault01" className="form-label">
                Brief Description
              </label>
              <input type="text" class="form-control" id="validationDefault01" placeholder={description} name="description" value={experienceAction.description} onChange={handleUpdateExperience} required />
            </div>
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

export default EditExperience;
