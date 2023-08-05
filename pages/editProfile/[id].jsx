import {useRouter} from 'next/router';
import React from 'react';
import Footer from '../../components/footer';
import FormEdit from '../../components/editProfile/FormEdit';
import SideProfile from '../../components/editProfile/SideProfile';
import Navbar from '../../components/navbar';

const EditProfile = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <>
      <style jsx>{`
        .purpleBg {
          background-color: #5e50a1;
          height: 30vh;
        }
      `}</style>
      <Navbar />
      <div className="purpleBg"></div>
      <div className="container" style={{marginTop: -120}}>
        <div className="row mb-5">
          <SideProfile />
          <div className="col-lg-8 col-12 ">
            <div class="p-3">
              <FormEdit />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
