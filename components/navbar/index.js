import {useState, useEffect} from 'react';
import NavbarForLogin from './NavbarForLogin';
import NavbarWorker from './NavbarWorker';
import NavbarRecruiter from './NavbarRecruiter';

export default function Navbar() {
  const [isLogin, setIsLogin] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    setIsLogin(token);
    setRole(role);
  }, []);
  return <>{isLogin && role === 'worker' ? <NavbarWorker /> : isLogin && role === 'recruiter' ? <NavbarRecruiter /> : <NavbarForLogin />}</>;
}
