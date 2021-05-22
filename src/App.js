import desktop from "./images/bg-intro-desktop.png"
import mobile from "./images/bg-intro-mobile.png"
import './App.css';

function App() {

  return (

    <div>
      <header>
        <img src={desktop} alt="desktop"/>
        <img src={mobile} alt="mobile"/>
        </header>
        <div className="container">
          <div className="Left_section_wrapper">
            <h1 className="headerliner">
              Learn to code by watching others</h1>
            <h3 className="description">
              See how experienced developers solve problems in real-time. 
              Watching tutorials great, but understanding how developers think is invaluable.
            </h3>
          </div>
          <div className="right_section_wrapper">
          <div className="bluebox">
            <span className="box-highlight">
              Try it free for 7 days!
            </span>
            <span className="box-text">
              *20/month thereafter.
            </span>
          </div>
          <div className="form">
            <form autocomplete="on">
              <input type="text" className="first-name" placeholder="First Name" autocomplete="on" />
              <input type="text" className="last-name" placeholder="Last Name"/>
              <input type="email" className="email" placeholder="Email Address" />
              <input type="password" className="password" placeholder="Password"/>
              <button className="form-button">
                <span className="form-button-text">CLAIM YOUR FREE TRIAL</span>
              </button>
              <p className="terms">
                By clickling the button, you are agreeing to our
                <span className="terms-services">
                  Terms and Services
                </span>
              </p>
            </form>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;

