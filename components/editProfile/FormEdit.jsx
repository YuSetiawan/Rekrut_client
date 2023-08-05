import React from 'react';

const FormEdit = () => {
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
      <form className="card row g-3 mb-5 p-3 shadow">
        <div class="card-header">
          <h3>Personal data</h3>
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Full name
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Your name" required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Job desk
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Web developer" required />
        </div>
        <div className="col-6">
          <label htmlFor="validationDefault01" className="form-label">
            Province
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Sudirman" required />
        </div>
        <div className="col-6">
          <label htmlFor="validationDefault01" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Jakarta" required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Company
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Your corporate" required />
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
          <label htmlFor="validationDefault01" className="form-label">
            Skill
          </label>
          <input type="text" className="form-control col-8" id="validationDefault01" placeholder="React JS" required />
          <div className="col-12">
            <button className="button-home w-100 my-3" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
      <form className="card row g-3 mb-5 p-3 shadow">
        <div class="card-header">
          <h3>Experience</h3>
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Position
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Software Engineer" />
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-12">
            <label htmlFor="validationDefault01" className="form-label">
              Company name
            </label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="Succes Corp" />
          </div>
          <div className="col-lg-3 col-6">
            <label htmlFor="validationDefault01" className="form-label">
              Started at
            </label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="June 2021" />
          </div>
          <div className="col-lg-3 col-6">
            <label htmlFor="validationDefault01" className="form-label">
              Ended at
            </label>
            <input type="text" className="form-control" id="validationDefault01" placeholder="June 2022" />
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Brief Description
          </label>
          <div>
            <textarea class="form-control col-12" placeholder="Job description" rows="3"></textarea>
          </div>
        </div>
        <div className="col-12">
          <button className="button-home w-100 my-3" type="submit">
            Submit
          </button>
        </div>{' '}
      </form>
      <form className="card row g-3 p-3 shadow">
        <div class="card-header">
          <h3>Portofolio</h3>
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Portofolio name
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="Your portofolio name" required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Portofolio link
          </label>
          <input type="text" className="form-control" id="validationDefault01" placeholder="www.portofolio.com" required />
        </div>
        <div className="col-12">
          <label htmlFor="validationDefault01" className="form-label">
            Upload thumbnail
          </label>
          <input className="form-control" type="file" id="formFile" required />
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

export default FormEdit;
