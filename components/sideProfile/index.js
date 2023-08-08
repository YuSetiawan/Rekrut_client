import React, {useState} from 'react';
import Image from 'next/image';
import Banner1 from '../../public/image/first-lp.png';
import Location from '../../public/image/location.png';
import Email from '../../public/image/mail-icon.png';
import Instagram from '../../public/image/instagram-icon.png';
import Github from '../../public/image/github-icon.png';
import Gitlab from '../../public/image/gitlab-icon.png';
import Button from 'react-bootstrap/Button';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import axios from 'axios';
// import Link from 'next/link';

const SideProfile = () => {
  const router = useRouter();
  const {id} = router.query;

  // GET ALL DATA
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [portofolio, setPortofolio] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`http://localhost:4000/skill/profile/${id}`)
        .then((response) => setSkills(response.data.data))
        .catch((error) => console.log(error));
      axios
        .get(`http://localhost:4000/experience/profile/${id}`)
        .then((response) => setExperience(response.data.data[0]))
        .catch((error) => console.log(error));
    }
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
      `}</style>
      <div className="col-lg-4 col-12">
        <div class="card p-2 mb-4 shadow">
          <Image src={Banner1} className="m-auto my-3" alt="userImg" style={{height: 200, width: 200, borderRadius: '50%', objectFit: 'cover'}} />
          <div class="card-body">
            <h2>Username</h2>
            <h5>Job Title</h5>
            <div className="d-flex my-3">
              <div className="location col-1">
                <Image src={Location} alt="location" className="mb-1" />
              </div>
              <p> Lenteng Agung, Jakarta.</p>
            </div>
            <p className="descriptionWorker mb-4">
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quis sit aliquam deserunt tenetur earum doloremque dolore molestiae similique, eaque ipsam aspernatur nobis iure impedit?
            </p>
            <div className="mt-3">
              <h4 className="mb-4">Skills</h4>
              {skills.map((item) => (
                <Button variant="warning" className="mb-2 mx-1">
                  {item.skill_name}
                </Button>
              ))}
            </div>
            {/* <Link href={`editProfile/${profile.id}`}> */}
            <button className="button-home p-4 w-100 my-3">Hire</button>
            {/* </Link> */}
            <div>
              <div className="d-flex my-3">
                <div className="location col-2">
                  <Image src={Email} alt="location" className="mb-1" />
                </div>
                <p> Lenteng Agung, Jakarta.</p>
              </div>
              <div className="d-flex my-3">
                <div className="location col-2">
                  <Image src={Instagram} alt="location" className="mb-1" />
                </div>
                <p> Lenteng Agung, Jakarta.</p>
              </div>
              <div className="d-flex my-3">
                <div className="location col-2">
                  <Image src={Github} alt="location" className="mb-1" />
                </div>
                <p> Lenteng Agung, Jakarta.</p>
              </div>
              <div className="d-flex my-3">
                <div className="location col-2">
                  <Image src={Gitlab} alt="location" className="mb-1" />
                </div>
                <p> Lenteng Agung, Jakarta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideProfile;
