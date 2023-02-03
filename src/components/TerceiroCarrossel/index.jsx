import "./terceiroCarrosel.css"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import tech4 from "../../images/tech4.png"
import tech2 from "../../images/tech2.png"
import tech3 from "../../images/tech3.png"
import tech1 from "../../images/tech1.png"

export default function EmblaCarousel () {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
          <div className="embla__slide slide3">
                <img src={tech4} alt="tech4" />
          </div>
          

          
          <div className="embla__slide slide3"> 

            <img src={tech2} alt="tech2" />
            
          </div>

          <div className="embla__slide slide3">
            
                    <img src={tech3} alt="tech3" />
                
           </div>
          
          <div className="embla__slide slide3"> 
            
            <img src={tech1} alt="tech1" />
            
          </div> 
        </div>
      </div>
      
    </div>
  )
}