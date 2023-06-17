import './slide1.css'
// import "../../style/popUp.scss";
import CarouselCompound from './carousel-compound'

export default function Slide() {
  return (
    <div className="app__main-container">
      <CarouselCompound 
      infinite
      loop
      // control
      interval={2000}
      >
        <CarouselCompound.Page>
          <img src='./img/baner/banner1 RUS.webp' alt="" />
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <img src='./img/baner/banner1 UKR.webp' alt="" />
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
