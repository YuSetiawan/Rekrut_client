import React from 'react';
import Image from 'next/image';
import Banner1 from '../../public/image/first-lp.png';
import Location from '../../public/image/location.png';
import Button from 'react-bootstrap/Button';
// import Link from 'next/link';

const SideProfile = () => {
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
        <div class="card p-2 mb-4">
          <Image src={Banner1} className="m-auto my-3" alt="userImg" style={{height: 200, width: 200, borderRadius: '50%', objectFit: 'cover'}} />
          <div class="card-body">
            <h3>Username</h3>
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
            {/* <Link href={`editProfile/${profile.id}`}> */}
            <button className="button-home p-4 w-100 mb-3">Edit</button>
            {/* </Link> */}
            {/* <Link href="/profile/1"> */}
            <Button variant="outline-secondary" className="w-100 p-3">
              Back to Profile
            </Button>{' '}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideProfile;
