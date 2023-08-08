import Image from 'next/image';
import Link from 'next/link';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../public/image/purple logo.png';
import HamburgerIcon from '../hamburgerIcon';

export default function Navbar() {
  return (
    <>
      <style jsx>
        {`
          .btn-nav {
                margin: 0 12px;
              }
        
              .btn-navbar {
                position: absolute;
                right: 65px;
                top: 9px
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

      <div className="fixed-top " style={{backgroundColor: '#ffffff'}}>
        <div className="container p-3">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>{' '}
              <div className="d-flex btn-navbar">
                <Link href="/login">
                  <button className="button-home">Login</button>
                </Link>
                <div className="btn-nav"></div>
                <DropdownButton variant="outline-secondary" title="Register" id="segmented-button-dropdown-1">
                  <Dropdown.Item>
                    <Link href="/register" style={{color: '#5e50a1'}}>
                      Register as worker
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/registerRecruiter" style={{color: '#5e50a1'}}>
                      Register as recruiter
                    </Link>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <HamburgerIcon />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex res-btn mt-4">
                  <Link href="/login">
                    <button className="button-home">Login</button>
                  </Link>
                  <div className="btn-nav"></div>
                  <DropdownButton variant="outline-secondary" title="Register" id="segmented-button-dropdown-1">
                    <Dropdown.Item>
                      <Link href="/register" style={{color: '#5e50a1'}}>
                        Register as worker
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/registerRecruiter" style={{color: '#5e50a1'}}>
                        Register as recruiter
                      </Link>
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
