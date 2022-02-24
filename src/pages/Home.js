import React from 'react';

function Home() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="8000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./ProtecttheNest.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./artDepartment.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Home;