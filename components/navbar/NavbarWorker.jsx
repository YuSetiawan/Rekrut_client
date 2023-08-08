import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../public/image/purple logo.png';
import Bell from '../../public/image/bell.png';
import Mail from '../../public/image/mail.png';
import {useRouter} from 'next/router';
import HamburgerIcon from '../hamburgerIcon';

export default function Navbar() {
  const router = useRouter();
  const id = localStorage.getItem('id');

  const logOut = () => {
    localStorage.clear();
    router.replace('/login');
  };

  return (
    <>
      <style jsx>
        {`
              .btn-nav {
                margin: 0 10px;
              }
        
              .btn-navbar {
                position: absolute;
                right: 65px;
                top: 9px
              }   
              .a {
                cursor: pointer !important;
              }      
          @media only screen and (min-width: 992px) {
            .res-btn {
              display: none !important;
            }
          }
          @media only screen and (max-width: 991px) {
            .btn-navbar {
              display: none !important;
            }
          
    `}
      </style>
      <div className="fixed-top py-2" style={{backgroundColor: '#ffffff'}}>
        <div className="container ">
          <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#ffffff'}}>
            <div className="container-fluid" style={{cursor: 'pointer'}}>
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
              <div className="d-flex align-items-center btn-navbar">
                <div className="me-5">
                  <Image src={Bell} alt="bell" />
                </div>
                <div className="me-5">
                  <Image src={Mail} alt="mail" />
                </div>
                <div>
                  <DropdownButton variant="outline-secondary" title="Menu" id="segmented-button-dropdown-1">
                    <Dropdown.Item>
                      {' '}
                      <Link href={`/profile/${id}`} style={{color: '#5e50a1'}}>
                        Profile (worker)
                      </Link>{' '}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {' '}
                      <Link href={`/editProfile/${id}`} style={{color: '#5e50a1'}}>
                        Edit Profile
                      </Link>{' '}
                    </Dropdown.Item>
                    <Dropdown.Item onClick={logOut} style={{color: '#5e50a1'}}>
                      Log out
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <HamburgerIcon />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex align-items-center justify-content-end mt-3 res-btn">
                  <div className="me-5">
                    <Image src={Bell} alt="bell" />
                  </div>
                  <div className="me-5">
                    <Image src={Mail} alt="mail" />
                  </div>
                  <div className="me-3">
                    <DropdownButton variant="outline-secondary" title="Profile" id="segmented-button-dropdown-1">
                      <Dropdown.Item>
                        {' '}
                        <Link href={`/profile/${id}`} style={{color: '#5e50a1'}}>
                          Profile Detail
                        </Link>{' '}
                      </Dropdown.Item>
                      <Dropdown.Item>
                        {' '}
                        <Link href={`/editProfile/${id}`} style={{color: '#5e50a1'}}>
                          Edit Profile
                        </Link>{' '}
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logOut} style={{color: '#5e50a1'}}>
                        Log out
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
