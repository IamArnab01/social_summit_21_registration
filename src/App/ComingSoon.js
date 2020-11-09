import React from "react";
import Comingsoon from "./coming_soon.svg";

function ComingSoon() {
  return (
    <div className="text-center">
      <img src={Comingsoon} alt="coming soon" className="th-coming-soon"></img>
      <h1 className="th-coming-soon-header mt-3">
        Soon we will launch our fully fledged webiste. Please Stay Tuned...
      </h1>
    </div>
  );
}

export default ComingSoon;
