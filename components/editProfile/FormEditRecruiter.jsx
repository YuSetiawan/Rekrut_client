import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {editUser} from '../../configs/redux/actions/userAction';

const FormEditRecruiter = ({id, name, location, job_position, description}) => {
  const dispatch = useDispatch();

  // POST & PUT DATA
  const [userAction, setUserAction] = useState({
    id: {id},
    name: '',
    job_position: '',
    location: '',
    description: '',
  });

  const handleChangeUser = (e) => {
    setUserAction({
      ...userAction,
      [e.target.name]: e.target.value,
    });
  };

  const handlePutUser = () => {
    dispatch(editUser(id, userAction));
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
        <div class="card-header">
          <h3>Personal data</h3>
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Full name
          </label>
          <input type="hidden" className="form-control" id="validationDefault01" placeholder="Your name" name="id " value={(userAction.id = id)} onChange={handleChangeUser} required />
          <input type="text" className="form-control" id="validationDefault01" placeholder={name} name="name" value={userAction.name} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Job desk
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder={job_position} name="job_position" value={userAction.job_position} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Location
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder={location} name="location" value={userAction.location} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder={description} name="description" value={userAction.description} onChange={handleChangeUser} required />
        </div>
        <div className="col-12">
          <button className="button-home w-100 my-3" type="submit">
            Submit
          </button>
        </div>{' '}
      </form>
    </>
  );
};

export default FormEditRecruiter;
