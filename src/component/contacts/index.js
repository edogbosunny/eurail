
import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../molecule/modal/modal'
import './contact.css';

export default function Contacts({ contacts }) {

  const [isShowing, setIsShowing] = React.useState(false)
  const [clickedItem, setClickedItem] = React.useState({})

  /**
   * 
   * @param {Object} value - this holds the object clicked value
   */
  const handleClick = (value) => {
    console.log(value);
  }


  /**
   * Responsible for opening modalss
   */
  const openModalHandler = () => {
    setIsShowing(true)
  }

  /**
   * Responsible for closing modals
   */
  const closeModalHandler = () => {
    setIsShowing(false)
  }

  /**
   * Displays the contact View
   */
  const contactView = () => {
    return (
      <div className="contacts-page">
        {
          contacts?.map(item => (

            <div onClick={() => {
              setClickedItem(item)
              handleClick(item);
              openModalHandler()
            }}>
              <div data={item} key={item?.id?.value} className='contacts-name'>
                {item?.name?.first} {' '} {item?.name?.last}</div>
            </div>
          ))
        }
      </div>
    )
  }

  const a = useSelector(item => item)
  const mainView = () => {
    return (
      <div>
        {(a?.contacts?.loading) ? <div className='no-data'>Loading...</div> : contactView()}
      </div>
    )
  }

  return (
    <div className="contacts-page">
      { isShowing ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
      {
        (contacts?.length === 0) ? <div className='no-data'> No Contacts Available</div> : mainView()
      }
      <Modal
        className="modal"
        show={isShowing}
        close={closeModalHandler}>
        data={clickedItem}
      </Modal>
    </div>
  )
}
