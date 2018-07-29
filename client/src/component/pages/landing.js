import React, { Component } from 'react'
import Header from '../layout/Header';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="landing-hero">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">        
                  <h1>Send a survey to your email list fast and easy.</h1>

              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
