import React from 'react';

const HamburgerIcon = () => {
  return (
    <>
      <style jsx>{`
        label {
          display: flex;
          flex-direction: column;
          width: 25px;
          cursor: pointer;
        }

        label span {
          background: Gray;
          border-radius: 8px;
          height: 4px;
          margin: 2px 0;
          transition: 0.4s cubic-bezier(0.3, -0.1, 0.9, 1.6);
        }

        span:nth-of-type(1) {
          width: 50%;
        }

        span:nth-of-type(2) {
          width: 90%;
        }

        span:nth-of-type(3) {
          width: 70%;
        }

        input[type='checkbox'] {
          display: none;
        }

        input[type='checkbox']:checked ~ span:nth-of-type(1) {
          transform-origin: bottom;
          transform: rotatez(45deg) translate(5px, 0px);
        }

        input[type='checkbox']:checked ~ span:nth-of-type(2) {
          transform-origin: top;
          transform: rotatez(-45deg);
        }

        input[type='checkbox']:checked ~ span:nth-of-type(3) {
          transform-origin: bottom;
          width: 60%;
          transform: translate(8px, -7px) rotatez(45deg);
        }
      `}</style>
      <label htmlFor="check">
        <input type="checkbox" id="check" />
        <span />
        <span />
        <span />
      </label>
    </>
  );
};

export default HamburgerIcon;
