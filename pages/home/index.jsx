import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import defaultPhoto from '../../public/image/user.png';
import Location from '../../public/image/location.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import axios from 'axios';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Pagination from '../../components/pagination/pagination';
import {Skeleton} from '@mui/material';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [loading, isLoading] = useState(false);
  const handleSort = (option) => {
    setSortOption(option);
  };
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    isLoading(true);
    axios
      .get('https://zany-ruby-whale-veil.cyclic.app/user/profile')
      .then((response) => {
        isLoading(false);
        setProfiles(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = profiles.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <style jsx>{`
        .navJobs {
          background-color: #5e50a1;
          padding: 20px;
          margin-top: 85px;
        }
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
        .location {
          height: 20px;
          margin-right: 5px;
        }
        .skil {
          background-color: orange;
          margin: 5px;
          border-radius: 4px;
          padding: 10px;
        }
      `}</style>
      <Navbar />
      <section>
        <div className="navJobs">
          <div className="container text-light">
            <h3>Top Jobs</h3>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control p-2" placeholder="Search for a person or profession" onChange={(e) => setSearch(e.target.value)} />
            <DropdownButton variant="outline-secondary" id="dropdown-item-button" title="Category" className="d-flex align-item-bottom">
              <Dropdown.Item as="button" onClick={() => handleSort('name_asc')}>
                Name A-Z
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => handleSort('name_desc')}>
                Name Z-A
              </Dropdown.Item>
              {/* <Dropdown.Item as="button" onClick={() => handleSort('job_asc')}>
                Job A-Z
              </Dropdown.Item> */}
            </DropdownButton>
            <button className="button-home p-4" type="submit">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mb-5">
        {loading ? (
          <>
            <div className="container ">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3 col-12 p-3 d-flex justify-content-center">
                    <Skeleton variant="circular" width={200} height={200} />
                  </div>
                  <div className="col-md-6">
                    <div className="container p-4">
                      <p>
                        <Skeleton variant="rounded" width={500} height={25} />
                      </p>
                      <p>
                        <Skeleton variant="rounded" width={500} height={25} />
                      </p>
                      <p>
                        <Skeleton variant="rounded" width={500} height={25} />
                      </p>
                      <div className="d-flex mb-3">
                        <div className="location">
                          <Skeleton variant="rounded" width={500} height={25} />
                        </div>
                      </div>
                      <Button variant="warning" className="mb-2 mx-1">
                        <Skeleton variant="rounded" width={70} height={25} />
                      </Button>
                    </div>
                  </div>
                  <div className="col-md-2 col-12 mt-4 text-center">
                    <Skeleton variant="rounded" width={150} height={25} />
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-3 col-12 p-3 d-flex justify-content-center">
                    <Skeleton variant="circular" width={200} height={200} />
                  </div>
                  <div className="col-md-6">
                    <div className="container p-4">
                      <p>
                        <Skeleton variant="rounded" width={500} height={25} />
                      </p>
                      <p>
                        <Skeleton variant="rounded" width={500} height={25} />
                      </p>
                      <p>
                        <Skeleton variant="rounded" width={500} height={25} />
                      </p>
                      <div className="d-flex mb-3">
                        <div className="location">
                          <Skeleton variant="rounded" width={500} height={25} />
                        </div>
                      </div>
                      <Button variant="warning" className="mb-2 mx-1">
                        <Skeleton variant="rounded" width={70} height={25} />
                      </Button>
                    </div>
                  </div>
                  <div className="col-md-2 col-12 mt-4 text-center">
                    <Skeleton variant="rounded" width={150} height={25} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container ">
              {currentPosts
                .filter((item) => {
                  return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search) ? item : item.job_position.toLowerCase().includes(search);
                })
                .sort((a, b) => {
                  switch (sortOption) {
                    case 'name_asc':
                      return a.name.localeCompare(b.name);
                    case 'name_desc':
                      return b.name.localeCompare(a.name);
                    // case 'job_asc':
                    //   return a.job_position.localeCompare(b.job_position);
                    default:
                      return 0;
                  }
                })
                .map((profile, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="row g-0">
                      <div className="col-md-3 col-12 p-3 d-flex justify-content-center">
                        {!profile.photo ? (
                          <Image src={defaultPhoto} height="200" width="200" alt="avatar" style={{borderRadius: '50%', border: '5px solid #FFBF00'}} />
                        ) : (
                          <Image src={profile.photo} height={200} width={200} alt="avatar" style={{borderRadius: '50%', objectFit: 'cover', border: '5px solid #FFBF00'}} />
                        )}
                      </div>
                      <div className="col-md-6">
                        <div className="container p-4">
                          <h3>{profile.name}</h3>
                          <p>{profile.job_position}</p>
                          <p>{profile.phone}</p>
                          <div className="d-flex mb-3">
                            <div className="location">
                              <Image src={Location} alt="location" className="mb-1" />
                            </div>
                            <span>{!profile.location ? <p className="m-0">Location not added</p> : profile.location}</span>
                          </div>
                          {profile.skills.map((item, index) => (
                            <Button variant="warning" className="mb-2 mx-1" key={index}>
                              {!item ? <p className="m-0 text-white">Skills not added </p> : item}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="col-md-2 col-12 mt-4 text-center">
                        {profile.role === 'worker' ? (
                          <Link key={profile.id} href={`profile/${profile.id}`}>
                            <button className="button-home m-auto mt-lg-5 mb-5 p-4">See Profile</button>
                          </Link>
                        ) : (
                          <Link key={profile.id} href={`profileRecruiter/${profile.id}`}>
                            <button className="button-home m-auto mt-lg-5 mb-5 p-4">See Profile</button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
        <div className="container">
          <div className="text-center">
            <Pagination totalPosts={profiles.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
