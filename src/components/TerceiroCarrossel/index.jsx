import "./terceiroCarrosel.css"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

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
                <img src="../../public/tech4.png" alt="tech4" />
          </div>
          

          
          <div className="embla__slide slide3"> 

            <img src="../../public/tech2.png" alt="tech2" />
            
          </div>

          <div className="embla__slide slide3">
            
                    <img src="../../public/tech3.png" alt="tech3" />
                
           </div>
          
          <div className="embla__slide slide3"> 
            
            <img src="../../public/tech1.png" alt="tech1" />
            
          </div> 
        </div>
      </div>
      
    </div>
  )
}