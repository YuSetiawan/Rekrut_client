import Image from 'next/image';
import Logo from '../../public/image/white-logo.png';

export default function Footer() {
  return (
    <>
      <style jsx>{`
        footer {
          background-color: #5e50a1;
          padding: 1px;
        }

        hr {
          border-top: 3px solid #ffffff;
        }
        @media only screen and (max-width: 600px) {
          h6 {
            font-size: normal;
          }
        }
      `}</style>
      <div>
        <footer>
          <div className="container mt-5">
            <Image src={Logo} alt="logo" />
            <div className="col-lg-5 my-3">
              <p className="text-light">
                Find professional experts in all fields of industry on this site. <br />
                Various expertise possessed by professional experts on this site!
              </p>
            </div>
            <hr className="my-3" />
            <div className="row d-flex justify-content-between">
              <div className="col-lg-8">
                <h6 className="text-light">2023 Peworld. All right reserved</h6>
              </div>
              <div className="col-lg-4  text-light d-flex justify-content-end">
                <p>Phone</p>
                <p className="mx-3">Email</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
