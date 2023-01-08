import './home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Faq from '../FAQ/Faq';
import Navbar from "../Navbar/Navbar";
import Carousel from 'react-bootstrap/Carousel';
import Form from "../Form/Form";
import Footer from '../Footer/Footer';
import Work from '../Work/Work';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import Amenities from '../Amenities/Amenities';
import CarouselD from '../Carousel/CarouselD';
// import CloseButton from 'react-bootstrap/esm/CloseButton';
import { Button } from '@chakra-ui/react';

// import Toast from 'react-bootstrap/Toast';

// import ToastContainerf from 'react-bootstrap/ToastContainer';
// import { Button } from '@chakra-ui/react';

function HomePage() {

  React.useEffect(() => {
    AOS.init();
  }, []);
  // const [showA, setShowA] = React.useState(true);
  // const [position, setPosition] = React.useState('top-start');
  // const toggleShowA = () => setShowA(!showA);
  //const ref = React.useRef(null);

  // const handleClick = () => {
  //   setShowA(false);
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };
  const [app,setApp]=React.useState("toastee")
  //const myTimeout = setTimeout(myGreeting, 5000);
  React.useEffect(()=>{
    setTimeout(myGreeting, 5000);
  },[]);
  function myGreeting()
  {
    setApp("toaste");
  }
  function close()
  {
    setApp("toastee")
  }


  return (
    <div className="App">
      
{/* 
      <div className='toasted'>
      <ToastContainerf className={app}>
      <Toast bg="danger" className="min-vw-90" show={showA} onClose={toggleShowA}>
      <Toast.Header className='toast-head'>
            
            </Toast.Header>
          <Toast.Body className='toast-head'>
            <Button onClick={handleClick}>Click</Button>
            <Form /></Toast.Body>
        </Toast>
        </ToastContainerf>
      </div> */}

      <div className={app}>
          <div className='popp'>
            <div className='pop-in'>
              <Button className='pop-but' colorScheme='red' onClick={close}>Close</Button>
              <div className='pop-heading'>
                Contact us to get yourself a workplace today 
              </div>
              <div className='pop-2'>
                <Form />
              </div>
          </div>
          </div>
      </div>
      <div className='nav-sticky'>
        <Navbar />
      </div>

                <header className="App-header">
                  
                <div className='body'>
                <section className='contain'>
                  <div className='top-card banner-msg-box form_container msg'>
                    <div className='top-Header'>
                       Find your perfect workspace
                    </div>
                    <div className='top-middle'>
                      Whether you’re a team of one, a growing startup, or a Fortune 500 company—we have flexible solutions for all the ways you work.
                    </div>
                    <Dropdown className='top-loca' >
                      <Dropdown.Toggle id="dropdown-basic" className='top-local' variant='dark' size="lg">
                        Location
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Sector 5</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Baguihati</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Chinar Park</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dum Dum</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="slide" >
                  <Carousel className="slide"  controls={true} keyboard={true} touch={true} interval={3000}>
                        <Carousel.Item>
                          <img
                          className="d-block w-900"
                            src="https://source.unsplash.com/1600x900/?office"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-900"
                            src="https://source.unsplash.com/1600x900/?architecture"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-900"
                            src="https://source.unsplash.com/1600x900/?building"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                  </Carousel>
                  </div>
                  </section>

                </div>
              </header>
              
              <div className='Carou-f1' data-aos="fade-up">
                  <div className='carou-f2'>
                  Amazing office spaces, all at premium locales
                 </div>
                 <div className="Carou-f3">
                  Our elegant and fully tech-enabled office spaces are designed keeping your needs in mind. Be it a single desk, a private cabin, a meeting room or a larger space for your entire team – Awfis is your one-stop solution.
 
                 </div>
                 
                </div>
                  
              <div className='Carou'  data-aos="fade-up">
                
                <CarouselD />
              </div>
              <div className="work">
                <div className='Faqq-q'  data-aos="fade-up">Stylish workspaces</div>
                <Work />
              </div>
              <div className='Amenities'>
                <div className='Faqq'  data-aos="fade-up">Amenities we Offer</div>
                  <Amenities />
              </div>
              {/* <div className='part2'>
                <div className='Contact' data-aos="fade-up">Contact &nbsp; Us</div>
                <div className='sec2' ref={ref}>
                  <div className="sec2-left" data-aos="zoom-in-right">
                    <img className="imgbf" src="https://media.licdn.com/dms/image/C4D22AQETnjqUWKXOJw/feedshare-shrink_800/0/1669935389766?e=1674691200&v=beta&t=hN-MAbrWTQZrb5fHM-1vc3ptyHcqSl1tyEvEx-j1IPY" alt="not loaded" />
                  </div>
                  <div className='sec2-right' data-aos="zoom-in-left">
                    <Form />
                  </div>
                </div>
              </div> */}
              <div className='Faq'>
                <div className='Faqq' data-aos="fade-up">F.A.Q.</div>
                <Faq />
              </div>
              <div className='Footer' data-aos="zoom-in-up">
                <Footer />
              </div>
    </div>
  );
}

export default HomePage;
