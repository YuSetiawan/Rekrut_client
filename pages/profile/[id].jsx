import {useRouter} from 'next/router';
import React, {useState} from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import {useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';
import profImg from '../../public/image/user.png';
import Location from '../../public/image/location.png';
import Email from '../../public/image/mail-icon.png';
import Instagram from '../../public/image/instagram-icon.png';
import Github from '../../public/image/github-icon.png';
import Button from 'react-bootstrap/Button';
import {Skeleton} from '@mui/material';
import Link from 'next/link';

const Profile = () => {
  const router = useRouter();
  const {id} = router.query;

  // GET ALL DATA
  const [profiles, setProfiles] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  const [loading, isLoading] = useState(false);

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
        .get(`https://zany-ruby-whale-veil.cyclic.app/experience/profile/${id}`)
        .then((response) => {
          setExperience(response.data.data);
          isLoading(false);
        })
        .catch((error) => console.log(error));
      axios
        .get(`https://zany-ruby-whale-veil.cyclic.app/portofolio/profile/${id}`)
        .then((response) => {
          setPortofolio(response.data.data);
          isLoading(false);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
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
                    <Skeleton variant="rounded" width="90%" height={35} />
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
                    <Link href={`/hire/${profiles.id}`}>
                      <button className="button-home p-4 w-100 my-3">Hire this professional</button>
                    </Link>
                    <div>
                      <div className="d-flex my-3">
                        <div className="location col-2">
                          <Image src={Email} alt="location" className="mb-1" />
                        </div>
                        <p>{profiles.email}</p>
                      </div>
                      <div className="d-flex my-3">
                        <div className="location col-2">
                          <Image src={Instagram} alt="location" className="mb-1" />
                        </div>
                        <p>@{profiles.name}</p>
                      </div>
                      <div className="d-flex my-3">
                        <div className="location col-2">
                          <Image src={Github} alt="location" className="mb-1" />
                        </div>
                        <p>@{profiles.name}</p>
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
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-Portofolio-tab" data-bs-toggle="tab" data-bs-target="#nav-Portofolio" type="button" role="tab" aria-controls="nav-Portofolio" aria-selected="true">
                      <h4>Portofolio</h4>
                    </button>
                    <button className="nav-link" id="nav-Experience-tab" data-bs-toggle="tab" data-bs-target="#nav-Experience" type="button" role="tab" aria-controls="nav-Experience" aria-selected="false">
                      <h4>Experience</h4>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active p-3" id="nav-Portofolio" role="tabpanel" aria-labelledby="nav-Portofolio-tab">
                    <div className="row p-lg-0 p-4">
                      {loading ? (
                        <>
                          <div className="col-lg-4 col-12 my-2 text-center">
                            <Skeleton variant="rounded" width="100%" height={150} />
                            <div className="card-body">
                              <h3 className="card-title">
                                {' '}
                                <Skeleton variant="rounded" width="100%" height={40} />
                              </h3>
                              <h5 className="card-text">
                                <Skeleton variant="rounded" width="100%" height={40} />
                              </h5>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {portofolio.map((item, index) => (
                            <div className="col-lg-4 col-12 my-2 text-center" key={index}>
                              <Image src={item.photo} alt="portImg" height={150} width={220} className="m-auto m-lg-0 mt-3" style={{objectFit: 'cover'}} />
                              <div className="card-body">
                                <h3 className="card-title">{item.name}</h3>
                                <h5 className="card-text">{item.repository}</h5>{' '}
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="tab-pane fade p-3" id="nav-Experience" role="tabpanel" aria-labelledby="nav-Experience-tab">
                    <div>
                      {loading ? (
                        <>
                          <div className="card container my-3">
                            <div className="row p-3">
                              <div className="col-12">
                                <h3 className="card-title">
                                  <Skeleton variant="rounded" width="100%" height={50} />
                                </h3>
                                <h5 className="card-text">
                                  <Skeleton variant="rounded" width="100%" height={30} />
                                </h5>
                                <p className="mt-3">
                                  <Skeleton variant="rounded" width="100%" height={25} />
                                </p>
                                <p className="description">
                                  <Skeleton variant="rounded" width="100%" height={25} />
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {experience.map((item, index) => (
                            <div className="card container my-3" key={index}>
                              <div className="row p-3">
                                <div className="col-12">
                                  <h3 className="card-title">{item.job_position}</h3>
                                  <h5 className="card-text">{item.company_name}</h5>
                                  <p className="mt-3">
                                    <i>from</i> {item.working_started} <i>to</i> {item.working_ended}
                                  </p>
                                  <p className="description">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </>
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

export default Profile;
