
const Header = () => {


  return (
    <><div className="text">
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="https://media.istockphoto.com/id/1371885257/photo/smart-inventory-warehouse-management-system-concept.jpg?s=612x612&w=0&k=20&c=VpMcgpqREZ_c3jBa_qpvjDUPSR1o9JQLnxoCesikluQ="
            class="d-block w-100 text"
            alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="text-light">Lorem ipsum</h5>
            <p className="text-light">
              lorem ipsum dolor sit amet consecteur
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVycyUyMGNvbGxlY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="d-block w-100 text"
            alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-light">consecteur lorem</h5>
            <p className="text-light">
              lorem ipsum dolor sit amet consecteur
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1305191270/photo/all-kinds-of-clothes-to-suit-your-personal-style.jpg?b=1&s=170667a&w=0&k=20&c=1clekWccRkZPX6D1Ze4apO2RwWbWOVTYthykBGZuiN0="
            className="d-block w-100 text"
            alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="text-light">ipsum amet</h5>
            <p className="text-light">
              lorem ipsum dolor sit amet consecteur
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <br />
    <br />
    <br />
    <div className="heads">

        <br />
        <div className="head">
          <div className="card">
            <div className="alert alert-info">Clothing</div>
            <img
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/clothing" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>

          <div className="card">
            <div className="card-text">Electronics</div>
            <img
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTI1ODIzfHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>
          <div className="card">
            <div className="card-text">Health and personal Care</div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>

          <div className="card">
            <div className="card-text">Gym/Fitness</div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>
        </div>
        <br />
        <div className="head">
          <div className="card">
            <div className="card-text">Kitchen</div>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>

          <div className="card">
            <div className="card-text">Beauty Products</div>
            <img
              src="https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>
          <div className="card">
            <div className="card-text">Gaming Accessories</div>
            <img
              src="https://media.istockphoto.com/id/1170073824/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.jpg?b=1&s=170667a&w=0&k=20&c=xj0bCGJN9ve0pxhjeDyIjj1P67OwgbyiAc3-bsIUZxo="
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>

          <div className="card">
            <div className="card-text">Home/Office Furniture</div>
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="clothing"
              className="card-image" />
            <br />
            <br />
            <a href="/ex" className="card-link">
              explore
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      <br />
     
      </>
  );
};

export default Header;
