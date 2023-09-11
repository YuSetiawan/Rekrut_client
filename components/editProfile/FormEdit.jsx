import Image from 'next/image';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import DeleteSkill from '../modalSkills';
import DeletePorto from '../modalPorto/DelPorto';
import EditPortofolio from '../modalPorto/EditPorto';
import DeleteExperience from '../modalExp/DelExp';
import EditExperience from '../modalExp/EditExp';
import {useDispatch, useSelector} from 'react-redux';
import {createExperience, getExperienceUser} from '../../configs/redux/actions/experienceAction';
import {createSkill, getSkillUser} from '../../configs/redux/actions/skillActions';
import {createPortofolio, getPortofolioUser} from '../../configs/redux/actions/portofolioAction';
import {editUser} from '../../configs/redux/actions/userAction';

const FormEdit = ({id, name, job_position, location, description}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  // GET ALL DATA
  const {skillUser} = useSelector((state) => state.skill);
  const {experienceUser} = useSelector((state) => state.experience);
  const {portofolioUser} = useSelector((state) => state.portofolio);
  useEffect(() => {
    if (router.isReady) {
      dispatch(getSkillUser(id));
      dispatch(getExperienceUser(id));
      dispatch(getPortofolioUser(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // POST & PUT DATA
  const [userAction, setUserAction] = useState({
    id: {id},
    name,
    job_position,
    location,
    description,
  });
  const [skillAction, setSkillAction] = useState({
    skill_name: '',
    id_users: {id},
  });
  const [experienceAction, setExperienceAction] = useState({
    job_position: '',
    company_name: '',
    working_started: '',
    working_ended: '',
    description: '',
    id_users: {id},
  });
  const [portoAction, setPortoAction] = useState({
    name: '',
    repository: '',
    photo: '',
    id_users: {id},
  });

  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  const handleChangeUser = (e) => {
    setUserAction({
      ...userAction,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSkills = (e) => {
    setSkillAction({
      ...skillAction,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeExperience = (e) => {
    setExperienceAction({
      ...experienceAction,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePortofolio = (e) => {
    setPortoAction({
      ...portoAction,
      [e.target.name]: e.target.value,
    });
  };

  const handlePutUser = () => {
    dispatch(editUser(id, userAction));
  };

  const handleSubmitSkills = (e) => {
    e.preventDefault();
    dispatch(createSkill(skillAction));
  };

  const handleSubmitExperience = (e) => {
    e.preventDefault();
    dispatch(createExperience(experienceAction));
  };

  const handleSubmitPortofolio = (e) => {
    e.preventDefault();
    dispatch(createPortofolio(portoAction, photo));
  };
  return (
    <>
      <style jsx>{`
        .button-home {
          align-items: center;
          appearance: none;
          border-radius: 4px;
          border-style: none;
          box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          font-family: Roboto, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          height: 36px;
          justify-content: center;
          letter-spacing: 0.0892857em;
          line-height: normal;
          min-width: 64px;
          outline: none;
          overflow: visible;
          padding: 0 16px;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: middle;
          will-change: transform, opacity;
        }

        .button-home:hover {
          box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
        }

        .button-home:disabled {
          background-color: rgba(0, 0, 0, 0.12);
          box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 0, rgba(0, 0, 0, 0.14) 0 0 0 0, rgba(0, 0, 0, 0.12) 0 0 0 0;
          color: rgba(0, 0, 0, 0.37);
          cursor: default;
          pointer-events: none;
        }

        .button-home:not(:disabled) {
          background-color: #5e50a1;
        }

        .button-home:focus {
          box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0, rgba(0, 0, 0, 0.12) 0 1px 10px 0;
        }

        .button-home:active {
          box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px -3px, rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
          background: #a46bf5;
        }
      `}</style>
      <form className="card row g-3 mb-5 p-3 shadow" onSubmit={handlePutUser}>
        <div className="card-header">
          <h3>Personal data</h3>
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Full name
          </label>
          <input type="hidden" className="form-control" id="validationDefault01" placeholder="Your name" name="id " value={(userAction.id = id)} onChange={handleChangeUser} required />
          <input type="text" className="form-control" id="validationDefault01" placeholder="Your name" name="name" value={userAction.name || name} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Job desk
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Web developer" name="job_position" value={userAction.job_position || job_position} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Location
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Sudirman" name="location" value={userAction.location || location} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="About you" name="description" value={userAction.description || description} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <button className="button-home w-100 my-3" type="submit">
            Submit
          </button>
        </div>{' '}
      </form>
      <div className="card row g-3 mb-5 p-4 shadow">
        <div class="card-header">
          <h3>Skills</h3>
        </div>
        <div className="col-12">
          <div>
            {skillUser.map((item) => (
              <>
                <Button variant="warning" className="m-1">
                  {item.skill_name}
                </Button>
                <DeleteSkill id={item.id} />
              </>
            ))}
          </div>
          <label htmlFor="validationDefault01" className="form-label mt-3">
            Skill
          </label>
          <form onSubmit={handleSubmitSkills}>
            <input type="text" className="form-control col-8" id="validationDefault01" placeholder="React JS" name="skill_name" value={skillAction.skill_name} onChange={handleChangeSkills} required />
            <input type="hidden" className="form-control col-8" id="validationDefault01" placeholder="React JS" name="id_users" value={(skillAction.id_users = id)} onChange={handleChangeSkills} required />
            <div className="col-12">
              <button className="button-home w-100 my-3" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="card row g-3 mb-5 p-3 shadow ">
        <div class="card-header my-2">
          <h3>Experience</h3>
        </div>
        {experienceUser.map((item, index) => (
          <div className="card container my-3" key={index}>
            <div className="row p-3">
              <div className="col-lg-9 col-12">
                <h3 className="card-title">{item.job_position}</h3>
                <h5 className="card-text">{item.company_name}</h5>
                <p className="mt-3">
                  <i>from</i> {item.working_started} <i>to</i> {item.working_ended}
                </p>
                <p className="description">{item.description}</p>
              </div>
              <div className="col-lg-3 col-12">
                <DeleteExperience id={item.id} />
                <EditExperience id={item.id} job_position={item.job_position} company_name={item.company_name} working_started={item.working_started} working_ended={item.working_ended} description={item.description} />
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={handleSubmitExperience}>
          <div className="col-12">
            <div className="m-1"></div>
            <label htmlFor="validationDefault01" className="form-label">
              Position
            </label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="Software Engineer" name="job_position" value={experienceAction.job_position} onChange={handleChangeExperience} required />
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-12">
              <label htmlFor="validationDefault01" className="form-label">
                Company name
              </label>
              <input type="hidden" className="form-control" id="validationDefault01" name="id_users" value={(experienceAction.id_users = id)} onChange={handleChangeExperience} required />
              <input type="text" className="form-control" id="validationDefault01" placeholder="Succes Corp" name="company_name" value={experienceAction.company_name} onChange={handleChangeExperience} required />
            </div>
            <div className="col-lg-3 col-6 mt-2 mt-lg-0">
              <label htmlFor="validationDefault01" className="form-label">
                Started at
              </label>
              <input type="date" className="form-control" id="validationDefault01" name="working_started" value={experienceAction.working_started} onChange={handleChangeExperience} required />
            </div>
            <div className="col-lg-3 col-6 mt-2 mt-lg-0">
              <label htmlFor="validationDefault01" className="form-label">
                Ended at
              </label>
              <input type="date" className="form-control" id="validationDefault01" name="working_ended" value={experienceAction.working_ended} onChange={handleChangeExperience} required />
            </div>
          </div>
          <div className="col-12 mt-3">
            <label htmlFor="validationDefault01" className="form-label">
              Brief Description
            </label>
            <input type="text" class="form-control" id="validationDefault01" placeholder="Job description" name="description" value={experienceAction.description} onChange={handleChangeExperience} required />
          </div>
          <div className="col-12">
            <button className="button-home w-100 my-3" type="submit">
              Submit
            </button>
          </div>{' '}
        </form>
      </section>
      <section className="card row g-3 p-3 shadow">
        <div class="card-header my-3">
          <h3>Portofolio</h3>
        </div>
        <div className="m-1">
          {portofolioUser.map((item, index) => (
            <div className="card container my-3" key={index}>
              <div className="row p-3">
                <div className="col-lg-8 col-md-12">
                  <h3 className="card-title">{item.name}</h3>
                  <h5 className="card-text">{item.repository}</h5>
                  <DeletePorto id={item.id} />
                  <EditPortofolio id={item.id} name={item.name} repository={item.repository} />
                </div>
                <div className="col-lg-4 col-md-12 text-center">
                  <Image src={item.photo} alt="portImg" height={150} width={200} className="m-auto m-lg-0 mt-3" style={{objectFit: 'contain'}} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmitPortofolio}>
          <div className="col-12">
            <label htmlFor="validationDefault01" className="form-label">
              Portofolio name
            </label>
            <input type="hidden" className="form-control" id="validationDefault01" placeholder="Your portofolio name" name="id_users" value={(portoAction.id_users = id)} onChange={handleChangePortofolio} required />
            <input type="text" className="form-control" id="validationDefault01" placeholder="Your portofolio name" name="name" value={portoAction.name} onChange={handleChangePortofolio} required />
          </div>
          <div className="col-12">
            <label htmlFor="validationDefault01" className="form-label">
              Portofolio link
            </label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="www.portofolio.com" name="repository" value={portoAction.repository} onChange={handleChangePortofolio} required />
          </div>
          <label htmlFor="validationDefault01" className="form-label">
            Upload thumbnail
          </label>
          <div className="col-12 text-center">
            <input className="form-control" type="file" id="formFile" name="photo" onChange={handleUpload} required />
            {preview ? <Image src={preview} alt="avatar" height={200} width={200} className="m-auto my-3" style={{objectFit: 'contain'}} /> : ''}
          </div>
          <div className="col-12">
            <button className="button-home w-100 my-3" type="submit">
              Submit
            </button>
          </div>{' '}
        </form>
      </section>
    </>
  );
};

export default FormEdit;
