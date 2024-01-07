import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <>
      <div
        style={{ position: "absolute" }}
        className="d-flex flex-column flex-mid-row align-items-center p-3 px-md-4 mb-3 border-bottom"
      >
        <h5 className="my-0 me-md-auto fw-normal">
          <Link href="/" className="text-dark">
            <img
              src="https://www.hatch.com/-/media/Images/Hatch/Corporate-Site/Global/Hatch-Corporate-Logo.png?h=25&iar=0&w=150&hash=EDA7129B328C56ABD6C814D899360135"
              alt=""
            />
          </Link>
        </h5>
      </div>
    </>
  );
};

export default NavBar;
