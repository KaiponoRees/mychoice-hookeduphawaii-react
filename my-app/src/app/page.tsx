'use client';

import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import { Card, Col, Container, Image, Nav, Navbar, NavDropdown, Row, } from 'react-bootstrap';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [compactBarVisible, setCompactBarVisible] = useState(false);

  useEffect(() => {
    const updateCompactBar = () => {
      const header = headerRef.current;

      if (!header) {
        return;
      }

      const barHeight = 56;
      const threshold =
        header.offsetTop + header.offsetHeight - barHeight;

      setCompactBarVisible(window.scrollY >= threshold);
    };

    window.addEventListener('scroll', updateCompactBar);
    window.addEventListener('resize', updateCompactBar);

    updateCompactBar();

    return () => {
      window.removeEventListener('scroll', updateCompactBar);
      window.removeEventListener('resize', updateCompactBar);
    };
  }, []);

  return (
    <>
      <div id="compactBar" className={`fixed-top bg-white ${compactBarVisible ? '' : 'd-none'}`}
      >
        <Container className="h-100">
          <Row className="h-100 align-items-center">

            <Col className="col-3" />
            <Col className="col-6 text-center text-uppercase"> Hooked Up Hawaii </Col>
            <Col className="col-3 text-end">
              <a href="#" className="text-dark fs-5" aria-label="Search"><i className="bi bi-search" /></a>
            </Col>

          </Row>
        </Container>
      </div>

      <header id="siteHeader" className="py-4" ref={headerRef}>
        <Row className="align-items-center">
          <Col className="col-3" />

          <Col className="col-6 text-center">
            <a href="#">
              <Image src="/Untitled+design+(3).webp" alt="Hooked Up Hawaii" className="img-fluid site-logo" />
            </a>
          </Col>

          <Col className="col-3 text-end">
            <a href="#" className="text-dark fs-4" aria-label="Search"><i className="bi bi-search" /></a>
          </Col>

        </Row>
      </header>
    </>
  );
};

const MainMenu = () => (
  <>
    <Navbar
      id="mainNav"
      expand="lg"
      className="sticky-top text-uppercase py-3"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="main-navigation" />

        <Navbar.Collapse id="main-navigation">
          <Nav className="mx-auto">

            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">Ready to Ship</Nav.Link>

            <NavDropdown title="+ Collections" id="collections-dropdown">
              <NavDropdown.Item href="#">Tahitian Pearls</NavDropdown.Item>
              <NavDropdown.Item href="#">Gold Pieces</NavDropdown.Item>
              <NavDropdown.Item href="#">Custom Pieces</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="+ Shop" id="shop-dropdown">
              <NavDropdown.Item href="#">Necklaces</NavDropdown.Item>
              <NavDropdown.Item href="#">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="#">Bangles</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Sign In</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section id="pearls">
      <Image src="/IMG_9145.webp" alt="Tahitian pearl necklace" className="img-fluid w-100 d-block"/>
    </section>

    <section id="featured" className="py-5">
      <h2 className="text-center text-uppercase fw-normal mb-4">Featured</h2>

      <Row className="g-4">
        <Col className="col-md-4">
          <Card className="h-100 text-center border-tan">
            <Card.Body className="py-4">

              <Card.Title className="text-uppercase">Necklaces</Card.Title>
              <Card.Text>
                Customized necklace, complete with a stunning Tahitian pearl.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        <Col className="col-md-4">
          <Card className="h-100 text-center border-tan">
            <Card.Body className="py-4">

              <Card.Title className="text-uppercase">Earrings</Card.Title>
              <Card.Text>
                Classic pearl earrings for both everyday wear and specialoccasions.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

        <Col className="col-md-4">
          <Card className="h-100 text-center border-tan">
            <Card.Body className="py-4">

              <Card.Title className="text-uppercase">Bangles</Card.Title>
              <Card.Text>
                Customized bangles, complete with stunning designs.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  </>
);

const Footer = () => (
  <footer>
    <hr className="my-5" />

    <div className="footer-band py-4 text-uppercase">
      <Nav className="justify-content-center">

        <Nav.Item><Nav.Link href="#">Terms &amp; Conditions</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#">Shipping Info</Nav.Link></Nav.Item>
        <Nav.Item><span className="nav-link">© 2023 Reis Enterprises LLC</span></Nav.Item>
        <Nav.Item><span className="nav-link">All Rights Reserved</span></Nav.Item>

      </Nav>
    </div>

    <div className="d-flex justify-content-between align-items-center py-4 px-3">
      <span className="powered">Powered by Squarespace</span>
      <a href="#" className="text-dark fs-4" aria-label="Instagram"><i className="bi bi-instagram" /></a>
    </div>
    
  </footer>
);

export default function Home() {
  return (
    <main>
      <Container>
        <Header />
        <MainMenu />
        <Footer />
      </Container>
    </main>
  );
}