import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/image/white-logo.png';
import Background from '../../public/image/Auth-image.png';
import {Fragment, useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import {Toaster, toast} from 'react-hot-toast';

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let onClick = (e) => {
    e.preventDefault();
    axios
      .post('https://zany-ruby-whale-veil.cyclic.app/user/login', data)
      .then((res) => {
        toast(res.data.message, {
          duration: 2500,
          position: 'top-center',
        });
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('id', res.data.data.id);
        localStorage.setItem('role', res.data.data.role);
        router.replace('/');
      })
      .catch((err) => {
        console.log(err);
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
                    <Link href="/">
                      <Image src={Logo} alt="logo" width="100" />
                    </Link>{' '}
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
                  <p>Masuk dengan akun anda untuk temukan relasi dan lingkungan profesional bersama dengan Peworld!</p>
                  {/* <form> */}
                  <form>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control mt-1" placeholder="Input email" id="email" name="email" value={data.email} onChange={onChange} required />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="psw">Kata password</label>
                      <input type="password" className="form-control mt-1" placeholder="Input password" id="password" name="password" value={data.password} onChange={onChange} required />
                    </div>
                    <div className="d-flex justify-content-end">
                      <p className="my-3">
                        <a href="#">Forget password?</a>
                      </p>
                    </div>
                    <button className="btn-w btn btn-warning" type="submit" onClick={onClick}>
                      Masuk
                    </button>
                    <p className="text-center mt-3">
                      Anda belum punya akun? <Link href="/register">Daftar disini</Link>
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <Toaster />
    </Fragment>
  );
}
