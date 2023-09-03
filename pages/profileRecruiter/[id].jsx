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
import Gitlab from '../../public/image/gitlab-icon.png';
import Link from 'next/link';

const ProfileRecruiter = () => {
  const router = useRouter();
  const {id} = router.query;

  // GET ALL DATA
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`https://zany-ruby-whale-veil.cyclic.app/user/profile/${id}`)
        .then((response) => setProfiles(response.data.data[0]))
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
          height: 48vh;
        }
      `}</style>
      <Navbar />
      <div className="purpleBg"></div>
      <div className="container" style={{marginTop: -210}}>
        <div className="mb-5">
          <div className="col-12">
            <div className="card p-2 mb-4 shadow">
              {!profiles.photo ? (
                <Image src={profImg} className="m-auto my-3" height="200" width="200" alt="avatar" style={{borderRadius: '50%'}} />
              ) : (
                <Image src={profiles.photo} className="m-auto my-3" height={200} width={200} alt="avatar" style={{borderRadius: '50%', objectFit: 'cover'}} />
              )}
              <div className="card-body text-center">
                <h3>{profiles.company_name}</h3>
                <h5>{profiles.job_position}</h5>
                <p>{profiles.name}</p>
                <div className="d-flex">
                  <div className=" m-auto col-12">
                    <Image src={Location} alt="location" className="mb-1 " />
                    <>{!profiles.location ? <p className="m-0">Location not added</p> : profiles.location}</>
                  </div>
                </div>
                <p className="descriptionWorker mb-4">{profiles.description}</p>
                <Link href={`/home`}>
                  <button className="button-home p-4 w-100 my-3">Hiring</button>
                </Link>
                <div>
                  <div className="d-flex my-3">
                    <div className="location col-2">
                      <Image src={Email} alt="location" className="mb-1" />
                    </div>
                    <p> Email</p>
                  </div>
                  <div className="d-flex my-3">
                    <div className="location col-2">
                      <Image src={Instagram} alt="location" className="mb-1" />
                    </div>
                    <p> Instagram</p>
                  </div>
                  <div className="d-flex my-3">
                    <div className="location col-2">
                      <Image src={Github} alt="location" className="mb-1" />
                    </div>
                    <p> Github</p>
                  </div>
                  <div className="d-flex my-3">
                    <div className="location col-2">
                      <Image src={Gitlab} alt="location" className="mb-1" />
                    </div>
                    <p> Gitlab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileRecruiter;
