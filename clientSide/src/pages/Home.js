import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"
import pic1 from "../assests/images/1.jpeg"
import pic2 from "../assests/images/2.jpeg"
import pic3 from "../assests/images/3.jpeg"
import pic4 from "../assests/images/4.jpeg"
import pic5 from "../assests/images/5.jpeg"

export function Home() {
  return (
    <div className="text-center">
      <h1 className="display-1 wedding">Kristen and Kevin</h1>
      <hr></hr>
      <br></br>
      <Row className="d-flex flex-column justify-content-between align-items-center mb-5">
        <Carousel  interval={1700} className='mb-2'>
          <Carousel.Item>
            <img
               style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={pic1}
              alt="First slide"
            />
            <Carousel.Caption>
              <Link to="/registry">
              <Button className="fw-bold" variant="outline-light">Register</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
               style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <Link to="/registry">
              <Button className="fw-bold" variant="outline-light">Register</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
               style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <Link to="/registry">
                <Button className="fw-bold" variant="outline-light">Register</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
               style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={pic4}
              alt="Third slide"
            />
            <Carousel.Caption>
              <Link to="/registry">
                <Button className="fw-bold" variant="outline-light">Register</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
               style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={pic5}
              alt="Third slide"
            />
            <Carousel.Caption>
              <Link to="/registry">
                <Button className="fw-bold" variant="outline-light">Register</Button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <div>
      <h1 className="display-1 wedding">Kristen Madlain Dadesho</h1>
      <p className="wedding fs-1">and</p>
      <h1 className="display-1 wedding">Kevin Lee Getz</h1>
      <br></br>
      <br></br>
      <h4 className="fw-bold">March 18, 2023</h4>
      <br></br>
      <p>WINE & ROSES, LODI, CA</p>
      <br></br>
      <br></br>
      <br></br>
      <div>
          <h1 className="fw-bold wedding">Our Story</h1>
          <br></br>
          <p className="wedding lead">Kevin was a senior in high school when Kristen was a freshman. They never exchanged words, but had mutual acquaintances and knew of each other. 
            14 years later, Kristen decided to go back to her roots and she moved back to her hometown. 
            The two reconnected through social media in February 2021 and Kevin proposed to Kristen in the Bahamas on the beach on March 21, 2022 ❤️
          </p><p className="wedding lead">
            We are so thrilled to have found each other again and to be starting this exciting chapter in our lives. We can’t wait to celebrate with you!
          </p><p className="wedding lead">-Kevin & Kristen</p>
        </div>
    </div>
    </div>
  )
}
