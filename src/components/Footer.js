import React from 'react';
import '../App.css';
const Footer = () => {
  return (
      <footer className="page-footer font-small bg-blue pt-4">
        <div className="container text-center ">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3 ">
              <p className="text-uppercase font-weight-bold text-center">Contact Us</p>
              <p className="text-center">Contact us at custService@winmart.com</p>              
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <p className="text-uppercase font-weight-bold text-center">Return Policy </p>
              <p className="text-center">We accept returns within 7 days max</p>
            </div>
            <div className="col-md-3  social-media">
              <p className="text-uppercase font-weight-bold text-center ">Social Media </p>
                  <div className="icons-wrapper ">
                    <div className="space">
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://icons.iconarchive.com/icons/hopstarter/rounded-square/32/Social-Network-Facebook-icon.png" alt="facebook"></img>
                      </a>
                    </div>
                    <div className="space">
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/32/Instagram-icon.png" alt="Instagram"></img>
                      </a>
                    </div>
                    <div className="space">
                      <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src="https://icons.iconarchive.com/icons/yootheme/social-bookmark/32/social-twitter-box-blue-icon.png" alt="Twitter"></img>
                      </a>
                    </div>
                    <div className="space">
                      <a href="https://www.pinterest.com/?utm_source=google&utm_medium=paid_search&utm_campaign=seo_copy_test&utm_term=pinterest&utm_pai=12551869605_122367574507_506837571519&creative_id=506837571519_kwd-27887497160&gclid=CjwKCAjwxuuCBhATEiwAIIIz0Sj2dKP7SCninWa0a7qdb0KLnJYVVeppv57OReWmdEaCB97domFIBxoCsEgQAvD_BwE&gclid=CjwKCAjwxuuCBhATEiwAIIIz0Sj2dKP7SCninWa0a7qdb0KLnJYVVeppv57OReWmdEaCB97domFIBxoCsEgQAvD_BwE" target="_blank" rel="noopener noreferrer">
                        <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/32/Pinterest-icon.png" alt="Pinterest"></img>
                      </a>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2021 Copyright:
          <span> Win Mart</span>
        </div>
      </footer>
  );
};
export default Footer;