import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import axios from 'axios';
import Image from 'next/image';
import profImg from '../../public/image/user.png';
import Location from '../../public/image/location.png';
import Email from '../../public/image/mail-icon.png';
import Button from 'react-bootstrap/Button';
import {Skeleton} from '@mui/material';
import Swal from 'sweetalert2';

const Hire = () => {
  const router = useRouter();
  const {id} = router.query;

  // GET Recruiter
  const [login] = useState(localStorage.getItem('id'));

  // GET ALL DATA
  const [profiles, setProfiles] = useState([]);
  const [recruiter, setRecruiter] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, isLoading] = useState(false);

  // Profile page
  useEffect(() => {
    isLoading(true);
    if (router.isReady) {
      axios
        .get(`https://zany-ruby-whale-veil.cyclic.app/user/profile/${router.query.id}`)
        .then((response) => {
          setProfiles(response.data.data[0]);
          isLoading(false);
        })
        .catch((error) => console.log(error));
      axios
        .get(`https://zany-ruby-whale-veil.cyclic.app/skill/profile/${id}`)
        .then((response) => {
          setSkills(response.data.data);
          isLoading(false);
        })
        .catch((error) => console.log(error));
      axios
        .get(`https://zany-ruby-whale-veil.cyclic.app/user/profile/${login}`)
        .then((response) => {
          setRecruiter(response.data.data[0]);
          isLoading(false);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // POST OFFERING
  const [data, setData] = useState({
    offering: '',
    description: '',
    worker_name: '',
    worker_id: '',
    worker_email: '',
    rec_id: '',
    rec_company: '',
    rec_email: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitHire = (e) => {
    e.preventDefault();
    try {
      axios.post(`https://zany-ruby-whale-veil.cyclic.app/hire`, data).then((res) => {
        if (res.data.statusCode === 201) {
          Swal.fire({
            title: "Your offer message has been sent to this person's email",
            showConfirmButton: false,
            icon: 'success',
            target: '#custom-target',
            timer: 3000,
            timerProgressBar: true,
            customClass: {
              container: 'position-absolute',
            },
            toast: true,
            position: 'bottom-right',
          });
          router.push(`/profile/${router.query.id}`);
        }
      });
    } catch (err) {}
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
        .purpleBg {
          background-color: #5e50a1;
          height: 30vh;
        }
      `}</style>
      <Navbar />
      <div className="purpleBg"></div>
      <div className="container" style={{marginTop: -120}}>
        <div className="row mb-5">
          <div className="col-lg-4 col-12">
            <div className="card p-2 mb-4 shadow">
              {loading ? (
                <>
                  <div className="m-auto my-3">
                    <Skeleton variant="circular" width={200} height={200} />
                  </div>
                  <div className="card-body">
                    <h3>
                      {' '}
                      <Skeleton variant="rounded" width={230} height={25} />
                    </h3>
                    <h5>
                      {' '}
                      <Skeleton variant="rounded" width={230} height={25} />
                    </h5>
                    <p>
                      {' '}
                      <Skeleton variant="rounded" width={230} height={25} />
                    </p>
                    <div className="d-flex mt-3">
                      <Skeleton variant="rounded" width={230} height={25} />
                    </div>
                    <p className="descriptionWorker my-2">
                      <Skeleton variant="rounded" width="100%" height={50} />
                    </p>
                    <div className="mt-3">
                      <h4 className="mb-4">Skills</h4>

                      <Button variant="warning" className="mb-2 mx-1">
                        <Skeleton variant="rounded" width={80} height={25} />
                      </Button>
                    </div>
                    <button className="button-home p-4 w-100 my-3">Hire</button>
                    <div>
                      <div className="d-flex my-3">
                        <Skeleton variant="rounded" width="100%" height={25} />
                      </div>
                      <div className="d-flex my-3">
                        <Skeleton variant="rounded" width="100%" height={25} />
                      </div>
                      <div className="d-flex my-3">
                        <Skeleton variant="rounded" width="100%" height={25} />
                      </div>
                      <div className="d-flex my-3">
                        <Skeleton variant="rounded" width="100%" height={25} />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {!profiles.photo ? (
                    <Image src={profImg} className="m-auto my-3" height="200" width="200" alt="avatar" style={{borderRadius: '50%', border: '5px solid #FFBF00'}} />
                  ) : (
                    <Image src={profiles.photo} className="m-auto my-3" height={200} width={200} alt="avatar" style={{borderRadius: '50%', objectFit: 'cover', border: '5px solid #FFBF00'}} />
                  )}
                  <div className="card-body">
                    <h3>{profiles.name}</h3>
                    <h5>{profiles.job_position}</h5>
                    <p>{profiles.phone}</p>
                    <div className="d-flex mt-3">
                      <div className="location col-1">
                        <Image src={Location} alt="location" className="mb-1" />
                      </div>
                      {!profiles.location ? <p>Location have not been added </p> : <p>{profiles.location}</p>}
                    </div>
                    <p className="descriptionWorker mb-4">{profiles.description}</p>
                    <div className="mt-3">
                      <h4 className="mb-4">Skills</h4>
                      {skills.map((item) => (
                        <>
                          {!item.skill_name ? (
                            <Button variant="warning" className="mb-2 mx-1">
                              Skills have not been added{' '}
                            </Button>
                          ) : (
                            <Button variant="warning" className="mb-2 mx-1">
                              {item.skill_name}
                            </Button>
                          )}
                        </>
                      ))}
                    </div>
                    <div>
                      <div className="d-flex my-3">
                        <div className="location col-2">
                          <Image src={Email} alt="location" className="mb-1" />
                        </div>
                        <p>{profiles.email}</p>
                      </div>
                      <div className="d-flex my-3">
                        <h5>There is a form on the right side of this page to send an email to the experts you want to recruit to your company</h5>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>{' '}
          <div className="col-lg-8 col-12">
            <div className="card p-3 shadow">
              <>
                <div>
                  <div className=" p-3">
                    <div>
                      {loading ? (
                        <>
                          <div className="container my-3">
                            <Skeleton variant="rounded" width="100%" height={390} />
                          </div>
                        </>
                      ) : (
                        <div className="container my-3">
                          <div className="row p-3">
                            <div className="col-12">
                              <h3 className="card-title">Contact {profiles.name}</h3>
                              <p className="card-text">Fill in this form to send an email to {profiles.name} email as a sign of your interest in recruiting him as a professional expert into your company </p>
                              <form onSubmit={handleSubmitHire}>
                                <div>
                                  <label htmlFor="offering">Position you are offering</label>
                                  <input type="text" className="form-control mt-1" placeholder="Input the offering" name="offering" value={data.offering} onChange={handleChange} required />
                                </div>
                                <div className="mt-3">
                                  <label htmlFor="description">Brief description</label>
                                  <textarea className="form-control mt-1" placeholder="Input your description" name="description" value={data.description} onChange={handleChange} required />
                                </div>
                                {/* Hidden Form */}
                                <input type="hidden" name="worker_id" value={(data.worker_id = profiles.id)} onChange={handleChange} />
                                <input type="hidden" name="worker_name" value={(data.worker_name = profiles.name)} onChange={handleChange} />
                                <input type="hidden" name="worker_email" value={(data.worker_email = profiles.email)} onChange={handleChange} />
                                <input type="hidden" name="rec_id" value={(data.rec_id = recruiter.id)} onChange={handleChange} />
                                <input type="hidden" name="rec_company" value={(data.rec_company = `${recruiter.name} at ${recruiter.company_name}`)} onChange={handleChange} />
                                <input type="hidden" name="rec_email" value={(data.rec_email = recruiter.email)} onChange={handleChange} />
                                <button type="submit" className="button-home p-4 w-100 my-3">
                                  Send this offer
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hire;
