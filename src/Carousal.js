import Carousel from 'react-bootstrap/Carousel';
import th from './images/th.jpeg'
import prod2 from './images/prod2.jpeg'
import prod3 from './images/prod3.jpeg'
export function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={th}
          height='400px'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{background:'black',borderRadius:'15px'}}>Category Section 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={prod2}
          height='400px'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{background:'black',borderRadius:'15px'}}>Category Section 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={prod3}
          height='400px'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{background:'black',borderRadius:'15px'}}>Category Section 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;