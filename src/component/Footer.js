import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        
          <section id="footer" >
            <div className="container">
              <div className="row text-center text-xs-center text-sm-left text-md-left">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a
                        href="https://www.facebook.com/srijan.kunduchowdhury/"
                        target="_blank"
                      >
                        <i className="fa fa-angle-double-right"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/srijan-kundu-chowdhury-7a2705228/"
                        target="_blank"
                      >
                        <i className="fa fa-angle-double-right"></i>Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a
                        href="mailto: srijankunduchowdhury@gmail.com"
                        target="_blank"
                      >
                        <i className="fa fa-angle-double-right"></i>Gmail
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Srijan8282" target="_blank">
                        <i className="fa fa-angle-double-right"></i>Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li>
                      <a href="https://leetcode.com/Srijan8282/">
                        <i
                          className="fa fa-angle-double-right"
                          target="_blank"
                        ></i>
                        LeetCode
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://auth.geeksforgeeks.org/user/srijankunduchowdhury/practice"
                        target="_blank"
                      >
                        <i className="fa fa-angle-double-right"></i>
                        GeeksForGeeks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <p>
                    <u>TO-DO APP</u> is a Registered MSP/ISO of Elavon, Inc.
                    Georgia [a wholly owned subsidiary of U.S. Bancorp,
                    Minneapolis, MN]
                  </p>
                  <p className="h6">© All right Reversed. Srijan8282</p>
                </div>
                <hr />
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default Footer;
