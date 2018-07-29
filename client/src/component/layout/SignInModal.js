import React, { Component } from 'react'
import Modal from 'react-modal';


export default class SignInModal extends Component {
    state = {
        modalIsOpen: false
    }

    openSignInModal = () => {
        this.setState(() => ({modalIsOpen: true}));
    }

    closeModal = () => {
        this.setState(() => ({modalIsOpen: false}));
    }
    
  render() {
    return (
      <div>
          <div>
                <div className="signInModal">
                    <Modal 
                        isOpen={this.state.modalIsOpen}
                        ariaHideApp={false}
                        contentLabel = "Sign In" 
                        className="signInModal__content">
                            <div onClick={this.closeModal} className="float-right pt-3 pr-4">
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="signInModal__heading">
                                <h4>Sign In</h4>
                            </div>
                            <div className="signInModal__btn">
                                <div className="d-flex flex-column">
                                    <a href="/auth/google" className="btn-google d-flex align-items-center"> 
                                        <span className="btn-google__icon">
                                            <i className="fab fa-google"></i>
                                        </span> 
                                        <span className="ml-2">Sign In with Google</span>
                                    </a>
                                    <a href="/auth/facebook" className="btn-facebook mt-2 d-flex align-items-center"> 
                                        <span className="btn-facebook__icon">
                                            <i className="fab fa-facebook"></i>
                                        </span> 
                                        <span className="ml-2">Sign In with FaceBook</span>
                                    </a>
                                </div>
                            </div>
                    </Modal>
                </div>
            </div>
      </div>
    )
  }
}



