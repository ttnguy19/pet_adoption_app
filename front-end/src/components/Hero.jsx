import React from "react";

function Hero(){
    return (
        <>
        <div className="hero w-100 px-4 " >
    <div className="row flex-lg-row-reverse align-items-center g-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="images/pexels-lum3n-44775-406014.jpg" className="d-block mx-lg-auto img-fluid" alt="Dog Picture" width="700" height="500" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Find and adopt pets in your local area!</h1>
        <p className="lead">Adopt, Don't Shop! Find pets in shelters near you. </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        </div>
      </div>
    </div>
  </div>
  </>
    );
}

export default Hero;