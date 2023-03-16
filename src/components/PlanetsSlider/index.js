import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const planetSlides = item => <PlanetItem key={item.id} details={item} />

  return (
    <div data-testid="planets" className="slider-container">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => planetSlides(each))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
