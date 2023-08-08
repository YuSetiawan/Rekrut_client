import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/image/white-logo.png';
import Background from '../../public/image/Auth-image.png';
import {Fragment, useState} from 'react';
import Swal from 'sweetalert2';
import {useRouter} from 'next/router';
import axios from 'axios';

export default function RegisterRecruiter() {
  const router = useRouter();
  const [confirmPassword, setConfirmPasword] = useState('');
  const [isError, setIsError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    job_position: '',
    company_name: '',
    phone: '',
    password: '',
    role: 'recruiter',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidation = (e) => {
    const confirm = e.target.value;
    setConfirmPasword(confirm);
    const cek = form.password;
    if (cek !== confirm) {
      setIsError('Password not match!');
    } else {
      setIsError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cek = form.password;

    if (cek !== confirmPassword) {
      return;
    }
    axios
      .post('http://localhost:4000/user/registerRecruiter', form)
      .then((res) => {
        Swal.fire({
          text: res.data.message,
          icon: 'success',
        });
        router.replace('/login');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Register Failed',
          text: 'Input all of form data!',
        });
      });
  };

  return (
    <Fragment>
      <style jsx>{`
        .authImg {
          height: 100vh;
        }

        .leftSide {
          background-color: #31065dbc;
          height: 100%;
          box-sizing: border-box;
          background-size: contain;
        }

        .text {
          width: 400px;
        }

        .logo {
          margin: 15px 50px;
        }

        .title {
          height: 80%;
        }

        .btn-w {
          width: 100%;
          color: #fff;
          font-weight: bold;
          border-radius: 4px;
          padding: 7px 12px;
        }

        .btn-w:hover {
          color: #fff !important;
        }

        .h-form {
          height: 100%;
          box-sizing: border-box;
          padding: 50px;
        }

        input {
          padding: 10px 15px !important;
          border-radius: 4px !important;
        }

        .row > * {
          padding-right: 0;
          padding-left: 0;
        }
        @media only screen and (max-width: 600px) {
          .responsiv {
            display: none;
          }
          p {
            font-size: 15px;
          }
        }
      `}</style>
      {/* content */}
      <div className="">
        <main>
          <div className="row authImg">
            <div
              className="col-lg-6 bg box responsiv"
              style={{
                backgroundImage: `url(${Background.src})`,
              }}
            >
              <div className="leftSide">
                <div className="row">
                  <div className="col p-3 logo">
                    <Image src={Logo} alt="logo" width="100" />
                  </div>
                </div>
                <div className="title d-flex justify-content-center align-items-center">
                  <div className="text">
                    <h1 className="text-light">Temukan developer berbakat & dan terbaik di berbagai bidang pilihan</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="col-lg-6">
              <section className="d-flex justify-content-center align-items-center h-form">
                <div>
                  <h1>Halo, Pewpeople</h1>
                  <p>Buatlah akun untuk temukan relasi dan lingkungan profesional bersama dengan Peworld!</p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name">Full Name</label>
                      <input type="text" className="form-control mt-1" placeholder="Input Full name" id="name" name="name" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control mt-1" placeholder="Input email" id="email" name="email" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="phone">Position</label>
                      <input type="text" className="form-control mt-1" placeholder="Your position" id="job_position" name="job_position" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="phone">Company Name</label>
                      <input type="text" className="form-control mt-1" placeholder="Your Company" id="company_name" name="company_name" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="phone">No handphone</label>
                      <input type="text" className="form-control mt-1" placeholder="Input phone number" id="phone" name="phone" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="psw">password</label>
                      <input type="password" className="form-control mt-1" placeholder="Input password" id="psw" name="password" onChange={handleChange} />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="confirm-psw">Confirm password</label>
                      <input type="password" className="form-control mt-1" placeholder="Confirm password" id="confirm-psw" name="confirm" onChange={(e) => checkValidation(e)} />
                      <p className="text-danger">{isError}</p>
                    </div>
                    <button type="submit" className="btn-w btn btn-warning mt-4">
                      Register
                    </button>
                    <p className="text-center mt-3">
                      Already have account? <Link href="/login">Login here</Link>
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

// // import Link from "next/link";
// import Image from 'next/image';
// import Logo from '../../public/image/white-logo.png';
// import Background from '../../public/image/Auth-image.png';
// import {Fragment} from 'react';
// // import { Fragment, useState } from "react";
// // import axios from "axios";
// // import Swal from "sweetalert2";
// // import { useRouter } from "next/router";

// export default function RegisterRecruiter() {
//   return (
//     <Fragment>
//       {/* content */}
//       <div className="">
//         <main>
//           <div className="row authImg">
//             <div
//               className="col-lg-6 bg box responsiv"
//               style={{
//                 backgroundImage: `url(${Background.src})`,
//               }}
//             >
//               <div className="leftSide">
//                 <div className="row">
//                   <div className="col p-3 logo">
//                     <Image src={Logo} alt="logo" width="100" />
//                   </div>
//                 </div>
//                 <div className="title d-flex justify-content-center align-items-center">
//                   <div className="text">
//                     <h1 className="text-light">Temukan developer berbakat & dan terbaik di berbagai bidang pilihan</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* form */}
//             <div className="col-lg-6">
//               <section className="d-flex justify-content-center align-items-center h-form">
//                 <div>
//                   <h1>Halo, Pewpeople</h1>
//                   <p>Buatlah akun untuk temukan relasi dan lingkungan profesional bersama dengan Peworld!</p>
//                   <form>
//                     {/* <form onSubmit={handleSubmit}> */}
//                     <div>
//                       <label htmlFor="nama">Nama</label>
//                       <input
//                         type="text"
//                         className="form-control mt-1"
//                         placeholder="Masukan nama panjang"
//                         id="nama"
//                         name="nama"
//                         // onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <label htmlFor="email">Email</label>
//                       <input
//                         type="email"
//                         className="form-control mt-1"
//                         placeholder="Masukan alamat email"
//                         id="email"
//                         name="email"
//                         // onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <label htmlFor="perusahaan">Perusahaan</label>
//                       <input
//                         type="perusahaan"
//                         className="form-control mt-1"
//                         placeholder="Masukan nama perusahaan"
//                         id="perusahaan"
//                         name="perusahaan"
//                         // onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <label htmlFor="jabatan">Jabatan</label>
//                       <input
//                         type="jabatan"
//                         className="form-control mt-1"
//                         placeholder="Masukan jabatan anda dalam perusahaan"
//                         id="jabatan"
//                         name="jabatan"
//                         // onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <label htmlFor="phone">No handphone</label>
//                       <input
//                         type="text"
//                         className="form-control mt-1"
//                         placeholder="Masukan no handphone"
//                         id="phone"
//                         name="phone"
//                         // onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <label htmlFor="psw">Kata sandi</label>
//                       <input
//                         type="password"
//                         className="form-control mt-1"
//                         placeholder="Masukan kata sandi"
//                         id="psw"
//                         name="sandi"
//                         // onChange={handleChange}
//                       />
//                     </div>
//                     <div className="mt-3">
//                       <label htmlFor="confirm-psw">Konfirmasi kata Sandi</label>
//                       <input
//                         type="password"
//                         className="form-control mt-1"
//                         placeholder="Masukan konfirmasi kata sandi"
//                         id="confirm-psw"
//                         name="confirm"
//                         // onChange={(e) => checkValidation(e)}
//                       />
//                       {/* <p className="text-danger">{isError}</p> */}
//                     </div>
//                     <button type="submit" className="btn-w btn btn-warning mt-4">
//                       Daftar
//                     </button>
//                     <p className="text-center mt-3">Anda sudah punya akun? {/* <Link href="/login">masuk disini</Link> */}</p>
//                   </form>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </main>
//       </div>
//     </Fragment>
//   );
// }
