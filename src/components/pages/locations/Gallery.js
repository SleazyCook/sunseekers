import { useRef } from 'react'

import { FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'

function Gallery({locationObj, setGalleryOpen}) {
  const slider = useRef(null);

  const slideLeft = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft -800, behavior: 'smooth'}) 
    console.log(slider)
  }

  const slideRight = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft + 800, behavior: 'smooth'}) 
    console.log(slider)
  }
  return (
    <div className="gallery__modal-box" >
      {/*  */}

      <div onClick={()=>{setGalleryOpen(false)}} className="gallery__close-icon"><AiFillCloseCircle /></div>

      <div className="gallery__slider-button-box">
        
        

        <div className="gallery__nav-icon gallery__nav-icon--left" onClick={slideLeft}>
              <FaChevronCircleLeft className="gallery__icon" />
        </div>

        <div ref={slider} scrollleft={100} className="gallery__main">
          {locationObj?.gallery?.map((galleryObj) => {
            return (
              <div className="gallery__item">
                <img className="gallery__image" src={galleryObj.img} alt={`image of ${galleryObj.cap}`} />
                <span className="gallery__caption">{galleryObj.cap}</span>
              </div>
            )
          })}
        </div> {/* gallery Main End */}

        <div className="gallery__nav-icon gallery__nav-icon--right" onClick={slideRight}>
            <FaChevronCircleRight className="gallery__icon" /></div>

      </div> {/* End Slider Button Box */}

    </div>
  )
}

export default Gallery