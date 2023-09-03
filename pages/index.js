import Image from 'next/image';
import Banner1 from '../public/image/first-lp.png';
import Banner2 from '../public/image/second-lp.png';
import Banner3 from '../public/image/third-lp.png';
import Ceklist from '../public/image/check-purple.png';
import Ceklist2 from '../public/image/check-yellow.png';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Carousell from '../components/carousell';

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          .test {
            height: 150px;
          }
          span {
            margin-left: 10px;
          }
          .text {
            background-color: #5e50a1;
            padding: 30px;
            border-radius: 40px 8px;
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
          .mb {
            margin-bottom: 100px;
          }
          @media only screen and (max-width: 600px) {
            #banner1 {
              display: none;
            }
            h1 {
              margin-top: 20px;
            }
            .mb h1 {
              font-size: 20px;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
      <Navbar />
      <div className="container">
        <main>
          <div className="row mt-5 pt-5 ">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h1>The nation's best talent for revolutionary change 4.0</h1>
                <p>Find professional experts in all fields of industry on this site</p>
                <Link href="/home">
                  <button className="button-home">START FROM HERE</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-12" id="banner1">
              <Image src={Banner1} className="col-12" style={{objectFit: 'contain'}} alt="banner" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <Image src={Banner2} className="col-12" style={{objectFit: 'contain'}} alt="banner2" />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div>
                <h2>Why you should look for talent on Peworld?</h2>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>There are professionals from various fields.</span>
                </div>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>From fresh graduates to experienced professionals.</span>
                </div>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>Existing record of work experience and a portfolio on the professional profile.</span>
                </div>
                <div className="mt-3">
                  <Image src={Ceklist} alt="ceklist" />
                  <span>Easy professional search access.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-5">
              <h1>Talent Skills</h1>
              <p>Various expertise possessed by professional experts on this site!</p>
              <div className="mt-3">
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Java</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Data Analyst</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Kotlin</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Copywriting</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>PHP</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>Photography</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>JavaScript</span>
                  </div>
                  <div className="col">
                    <Image src={Ceklist2} alt="ceklist" />
                    <span>++ more skills</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Image src={Banner3} className="col-12" style={{objectFit: 'contain'}} alt="banner3" />
            </div>
          </div>
        </main>
        <div>
          <h3 className="text-center my-5">Professionals on this site</h3>
          <div className="col-12 mb-5">
            <Carousell />
          </div>
        </div>

        <div className="container mb">
          <div className="row py-5 text">
            <div className="col-lg-9 col-12">
              <h2 className="text-light text-center">Explore your professional counterpart.</h2>
            </div>
            <div className="col-lg-3 mt-1">
              <div>
                <Link href="/home">
                  <button className="btn btn-light w-100">START FROM HERE</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
