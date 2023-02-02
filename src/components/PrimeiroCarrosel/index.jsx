import "./carrosel.css"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slide">
          <div className="left-container">
                <div><img src="../../public/Page-1.png" alt="page1" /></div>
                <div className="align">
                <button className="embla__prev" onClick={scrollPrev}>
                   <img className="prev"  src="../../public/setaBaixa.png" alt="seta" />
                </button>
                <div >
                    <h3 className="center">Pay Us a Visit</h3>
                    <p className="wid">Union St, Seattle, WA 98101, United States</p>
                </div>
                <button className="embla__next" onClick={scrollNext}>
                    <img className="next"  src="../../public/setaBaixa.png" alt="seta" />
                </button>
                </div>
            </div>
          </div>

          <div className="embla__slide">
          <div className="center-container">
                <div><img src="../../public/phone-call.png" alt="phone" /></div>
                <div className="align">
                <button className="embla__prev" onClick={scrollPrev}>
                    <img className="prev"  src="../../public/setaBaixa.png" alt="seta" />
                </button>
                    <div >
                        <h3>Give Us a Call</h3>
                        <p>(110) 1111-1010</p>
                    </div>
                    <button className="embla__next" onClick={scrollNext}>
                        <img className="next"  src="../../public/setaBaixa.png" alt="seta" />
                    </button>
                </div>
            </div>
          </div>

          <div className="embla__slide">
          <div className="right-container">
                <div><img src="../../public/mail.png" alt="mail" /></div>
                <div className="align">
                    <button className="embla__prev" onClick={scrollPrev}>
                        <img className="prev"  src="../../public/setaBaixa.png" alt="seta" />
                    </button>
                    <div >
                        <h3>Send Us a Message</h3>
                        <p>Contact@HydraVTech.com</p>
                    </div>
                    <button className="embla__next" onClick={scrollNext}>
                        <img className="next"  src="../../public/setaBaixa.png" alt="seta" />
                    </button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
