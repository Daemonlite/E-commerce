import React from 'react'

const Lobby = () => {
  return (
    <div>
        <div className="text">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
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
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVycyUyMGNvbGxlY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    class="d-block w-100 text"
                    alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-light">consecteur lorem</h5>
                    <p className="text-light">
                      lorem ipsum dolor sit amet consecteur
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://media.istockphoto.com/id/1305191270/photo/all-kinds-of-clothes-to-suit-your-personal-style.jpg?b=1&s=170667a&w=0&k=20&c=1clekWccRkZPX6D1Ze4apO2RwWbWOVTYthykBGZuiN0="
                    class="d-block w-100 text"
                    alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 className="text-light">ipsum amet</h5>
                    <p className="text-light">
                      lorem ipsum dolor sit amet consecteur
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <br />
    </div>
  )
}

export default Lobby