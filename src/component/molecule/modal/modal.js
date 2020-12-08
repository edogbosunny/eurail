import React from 'react';
import './modal.css';

/**
 * 
 * @param {Object} props - Displays the modal component
 */
const modal = (props) => {
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h3>Contact Details</h3>
          <span className="close-modal-btn" onClick={props.close}>×</span>
        </div>
        <div className="modal-body">
          <img className="img" src={props.children[1]?.picture?.large} alt='profile-picture' />
          <div className="modal-text">
            <div className='modal-text-div'>Name </div>
            <div className='modal-text-body name'>{props?.children[1]?.name?.first} {' '} {props?.children[1]?.name?.last || 'N/A'} </div>
          </div>
          <div className="modal-text">
            <div className='modal-text-div'>Email </div>
            <div className='modal-text-body'>{props?.children[1]?.email || 'N/A'} </div>
          </div>
          <div className="modal-text">
            <div className='modal-text-div'>Phone </div>
            <div className='modal-text-body'>{props?.children[1]?.phone || 'N/A'} </div>
          </div>
          <div className="modal-text">
            <div className='modal-text-div'>Street </div>
            <div className='modal-text-body'>{props?.children[1]?.location?.street?.number} {' '} {props?.children[1]?.location?.street?.name || 'N/A'}</div>
          </div>
          <div className="modal-text">
            <div className='modal-text-div'>City </div>
            <div className='modal-text-body'>{props?.children[1]?.location?.city || 'N/A'}</div>
          </div>
          <div className="modal-text">
            <div className='modal-text-div'>State </div>
            <div className='modal-text-body'>{props?.children[1]?.location?.state || 'N/A'}</div>
          </div>
          <div className="modal-text">
            <div className='modal-text-div'>Postcode </div>
            <div className='modal-text-body'>{props?.children[1]?.location?.postcode || 'N/A'}</div>
          </div>


        </div>
        <div className="modal-footer" />
      </div>
    </div>
  )
}

export default modal;
