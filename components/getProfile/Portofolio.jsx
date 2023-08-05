import Image from 'next/image';
import React from 'react';
import Porto from '../../public/image/Rectangle 653.png';

const Portofolio = () => {
  return (
    <div className="row p-lg-0 p-4">
      <div className="col-lg-4 col-12 my-2 text-center">
        <Image src={Porto} alt="portImg" className="m-auto m-lg-0 mt-3" />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>

      <div className="col-lg-4 col-12 my-2 text-center">
        <Image src={Porto} alt="portImg" className="m-auto m-lg-0 mt-3" />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
      <div className="col-lg-4 col-12 my-2 text-center">
        <Image src={Porto} alt="portImg" className="m-auto m-lg-0 mt-3" />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
