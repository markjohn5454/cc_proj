import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CardLayout } from './Card';
import Slider from './Carousal';
import './Landing.css';
import Chat from './Chat'

export function NavbarStyle() {
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const rating = formData.get('rating');
    const description = formData.get('description');
    const image = formData.get('image');
   

    if (!name || !rating || !image ||description) {
      return; // exit early if any of the fields are empty
    }
    const reader = new FileReader();
  reader.readAsDataURL(image);

  reader.onloadend = () => {
    const newProduct = {
      name: formData.get('name'),
      rating: formData.get('rating'),
      image: formData.get('image'),
      description: formData.get('description'),
    };
    
    
    setProducts([...products, newProduct]);
    event.target.reset();
  };
  };
  return (
    
    <div className='wholeback' style={{background:'rgb(19,127,127)'}}>
      
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{color:'white'}}>Customer Portal: {localStorage.getItem('user')}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              
              <Nav.Link href=""style={{color:'white'}}>Home</Nav.Link>
              <Nav.Link href="" style={{color:'white'}}>Write To Us</Nav.Link>
              <NavDropdown bg="light" style={{color:'white'}} title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Enter Product</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Old Product</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">New Product</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" style={{color:'white'}}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Slider />
      <div className='makecenter'>
        {products.map((product, index) => (
          <CardLayout
            key={index}
            imageUrl={product.image}
            title={product.name}
            description={`Rating: ${product.rating}`}
            buttonText="Go to Product"
          />
        ))}
      </div>
      <br />
      
      
      <Form onSubmit={handleSubmit }>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter product name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Rating</Form.Label>
          <Form.Control type="number" name="rating" placeholder="Enter product rating" min="1" max="5" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Remarks</Form.Label>
          <Form.Control type="text" name="description" placeholder="Any remarks?" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" name="image" accept="image/*" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit Response
        </Button>
      </Form>
      
     
    </div>

  );
}

export default NavbarStyle
