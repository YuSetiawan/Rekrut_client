import Footer from '../../components/footer';
import FormEdit from '../../components/editProfile/FormEdit';
import Navbar from '../../components/navbar';
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import defaultPhoto from '../../public/image/user.png';
import Location from '../../public/image/location.png';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Link from 'next/link';
import Swal from 'sweetalert2';

const EditProfile = () => {
  const router = useRouter();
  const [login, setLogin] = useState();
  useEffect(() => {
    const id = localStorage.getItem('id');
    setLogin(id);
  }, []);

  // GET DATA
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`https://zany-ruby-whale-veil.cyclic.app/user/profile/${router.query.id}`)
        .then((response) => setProfiles(response.data.data[0]))
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // POST & PUT DATA
  const [userAction, setUserAction] = useState({
    id: {login},
    photo: '',
  });

  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  const handleSubmitUserImg = (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (photo) {
        formData.append('photo', photo);
      }
      axios.put(`https://zany-ruby-whale-veil.cyclic.app/user/profilephoto/${router.query.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Swal.fire({
        title: 'Update photo profile succes',
        showConfirmButton: false,
        icon: 'success',
        target: '#custom-target',
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          container: 'position-absolute',
        },
        toast: true,
        position: 'bottom-right',
      });
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: 'Update photo failed',
        showConfirmButton: false,
        icon: 'error',
        target: '#custom-target',
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          container: 'position-absolute',
        },
        toast: true,
        position: 'bottom-right',
      });
    }
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
            <div className="card p-2 mb-4">
              <div className="text-center my-3">
                {!profiles.photo ? (
                  <Image src={defaultPhoto} height="200" width="200" alt="avatar" style={{borderRadius: '50%', border: '5px solid #FFBF00'}} />
                ) : (
                  <Image src={profiles?.photo} alt="avatar" height={200} width={200} className="m-auto" style={{borderRadius: '50%', border: '5px solid #FFBF00', objectFit: 'cover'}} />
                )}
              </div>
              <div className="card-body">
                <h3>{profiles.name}</h3>
                <h5>{profiles.job_position}</h5>
                <p>{profiles.phone}</p>
                <div className="d-flex mt-3">
                  <div className="location col-1">
                    <Image src={Location} alt="location" height={20} width={20} className="mb-1" />
                  </div>
                  <p>{profiles.location}</p>
                </div>
                <p className="descriptionWorker mb-4">{profiles.description}</p>
                <form onSubmit={handleSubmitUserImg}>
                  <label className="form-label">Upload Image</label>
                  <div className="col-12 text-center">
                    <input className="form-control" type="file" id="formFile" name="photo" onChange={handleUpload} required />
                    {preview ? <Image src={preview} alt="avatar" height={200} width={200} className="m-auto my-3" style={{borderRadius: '50%', width: '100'}} /> : ''}
                  </div>
                  <button className="button-home p-4 w-100 mb-3" type="submit">
                    Edit Photo Profile
                  </button>
                </form>
                <Link href={`/profile/${login}`}>
                  <Button variant="outline-secondary" className="w-100 p-3">
                    Back to Profile
                  </Button>{' '}
                </Link>
              </div>
            </div>
          </div>{' '}
          <div className="col-lg-8 col-12 ">
            <div className="p-3">
              <FormEdit id={router.query.id} name={profiles.name} job_position={profiles.job_position} location={profiles.location} description={profiles.description} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
