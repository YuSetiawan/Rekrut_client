import {useState, useEffect} from 'react';
import NavbarForLogin from './NavbarForLogin';
import NavbarForLogout from './NavbarForLogout';

export default function Navbar() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLogin(token);
  }, []);
  return <>{isLogin ? <NavbarForLogout /> : <NavbarForLogin />}</>;
}
