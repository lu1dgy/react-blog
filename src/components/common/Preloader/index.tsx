import React from 'react'
import loader from '../../../assets/images/loaderImg.svg'

const Preloader: React.FC = () => {
  return (
    <img
      src={loader}
      className='loader'
      alt='loaderimg'
    />
  )
}

export default Preloader
