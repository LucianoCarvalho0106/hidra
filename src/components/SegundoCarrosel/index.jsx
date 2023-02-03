import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import "./segundoCarrosel.css"

import setaBaixa from "../../images/setaBaixa.png"
import card4 from "../../images/card4.png"
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card3 from "../../images/card3.png"

export default function EmblaCarousel(){
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
          <div className='cartao'>
          <button className="embla__prev prev2-btn" onClick={scrollPrev}>
            <img className="prev2"  src= {setaBaixa} alt="seta" />
          </button>
                <img src={card4} alt="card4" />
                <h4>SIMULATION</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button className='whidth'>TRY IT NOW</button>
                <button className="embla__next next2-btn" onClick={scrollNext}>
                  <img className="next2"  src={setaBaixa} alt="seta" />
                </button>
            </div>
          </div>

          <div className="embla__slide">
          <div className='cartao'>
            <button className="embla__prev prev2-btn" onClick={scrollPrev}>
              <img className="prev2"  src={setaBaixa} alt="seta" />
            </button>
                <img src={card1} alt="card1" />
                <h4>EDUCATION</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button className='whidth'>TRY IT NOW</button>
                <button className="embla__next next2-btn" onClick={scrollNext}>
                  <img className="next2"  src={setaBaixa} alt="seta" />
                </button>
            </div>
          </div>
          <div className="embla__slide">
          <div className='cartao' >
            <button className="embla__prev prev2-btn" onClick={scrollPrev}>
              <img className="prev2"  src={setaBaixa} alt="seta" />
            </button>
                <img src={card2} alt="card2" />
                <h4>SELF-CARE</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button className='whidth'>TRY IT NOW</button>
                <button className="embla__next next2-btn" onClick={scrollNext}>
                  <img className="next2"  src={setaBaixa} alt="seta" />
                </button>
            </div>
          </div>
          <div className="embla__slide">
          <div className='cartao' >
            <button className="embla__prev prev2-btn" onClick={scrollPrev}>
              <img className="prev2"  src={setaBaixa} alt="seta" />
            </button>
                <img src={card3} alt="card3" />
                <h4>OUTDOOR</h4>
                <p>
                    Vitae sapien pellentesque habitant morbi
                    nunc. Viverra aliquet  porttitor rhoncus 
                    libero justo laoreet sit amet vitae.
                </p>
                <button className='whidth'>TRY IT NOW</button>
                <button className="embla__next next2-btn" onClick={scrollNext}>
                  <img className="next2"  src={setaBaixa} alt="seta" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}