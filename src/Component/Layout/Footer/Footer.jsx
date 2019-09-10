import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
            © 2019 Copyright:
            <a href="https://www.instagram.com/unq_oficial/"> unquivalencia.com</a>
          </div>
          <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-3">
                <a href="https://www.facebook.com/pages/Universidad-Nacional-de-Quilmes/424989480858020">
                  <i className="fa fa-facebook fa-2x fa-fw" />
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="https://twitter.com/UNQoficial">
                  <i className="fa fa-twitter-square fa-2x fa-fw" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/unq_oficial/">
                  <i className="fa fa-instagram fa-2x fa-fw" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
