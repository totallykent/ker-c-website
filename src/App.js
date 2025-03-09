import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Header-bar'>
        <div>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Location</button>
            </li>
            <li>
              <img src={logo} height={100}></img>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
            <button>FAQs</button>
            </li>
            <li>
              <button>My Account</button>
            </li>
          </ul>
        </div>
      </header>
      <div>
        <div className="Banner">
          <div className="Banner-text">
              <h1>WE PROVIDE TOP-QUALITY<br></br>DIGITAL AND PRINTING<br></br>SOLUTIONS.</h1>
              <p>Offering reliable services to meet your business and<br></br>personal needs with precision and efficiency.</p>
              <button>ENQUIRE PRICE</button>
          </div>
          <div className='Banner-image'>
            <img src={logo} height={400}></img>
          </div>
        </div>
        <div className="About">
          <h1>About Ker-C<br></br>Printing Services</h1>
          <h3>Your ideas, our prints-delivered with precision and care.</h3>
          <h3>At Ker-C Printing Services, we blend quality craftsmanship with modern convenience. Whether you need vibrant prints, custom designs, or seamless order tracking, our online system makes the process effortless. From inquiries to final delivery, we ensure efficiency, accuracy, and top-tier service every step of the way.</h3>
          <h3>With a range of services and excellent customer service, we are committed to providing you with quality products that meet your needs. Whether it's custom prints, business materials, or personalized designs, we ensure precision, reliability, and a seamless experience from start to finish. Your vision is our priority, and we strive to bring it to life with exceptional craftsmanship and attention to detail.</h3>
          <h3>Experience printing made simple.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
