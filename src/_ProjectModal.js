import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ProjectModal extends Component {



  render() {

    if (!this.props.show){
      return "FOO";
    }

    // The gray background
   const backdropStyle = {
     position: 'fixed',
     top: 0,
     bottom: 0,
     left: 0,
     right: 0,
     backgroundColor: 'rgba(0,0,0,0.3)',
     padding: 50
   };

   // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return(
      <div className="backdrop" style={{backdropStyle}}>
        <div className="modal" style={{modalStyle}}>
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>

    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ProjectModal;
