import {useRouter} from 'next/router';
import React from 'react';
import Footer from '../../components/footer';
import SideProfile from '../../components/sideProfile';
import Portofolio from '../../components/getProfile/Portofolio';
import Experience from '../../components/getProfile/Experience';
import Navbar from '../../components/navbar';

const Profile = () => {
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
          <div className="col-lg-8 col-12">
            <div class="card p-3 shadow">
              <>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-Portofolio-tab" data-bs-toggle="tab" data-bs-target="#nav-Portofolio" type="button" role="tab" aria-controls="nav-Portofolio" aria-selected="true">
                      <h4>Portofolio</h4>
                    </button>
                    <button className="nav-link" id="nav-Experience-tab" data-bs-toggle="tab" data-bs-target="#nav-Experience" type="button" role="tab" aria-controls="nav-Experience" aria-selected="false">
                      <h4>Experience</h4>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active p-3" id="nav-Portofolio" role="tabpanel" aria-labelledby="nav-Portofolio-tab">
                    <Portofolio />
                  </div>
                  <div className="tab-pane fade p-3" id="nav-Experience" role="tabpanel" aria-labelledby="nav-Experience-tab">
                    <Experience />
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
