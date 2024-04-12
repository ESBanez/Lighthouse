import Carousel from 'react-elastic-carousel';

import ".././Sass/Bts.scss"

  
const BtsCarousel = () => {
   
    return (
      <div className="btscarouselcontainer" >
        <Carousel enableAutoPlay className=''>
          <img src="btshoneycomb.png" className='BtsCard'/>
          <img src="Bangtan.png" className='BtsCard'/>
        </Carousel>
      </div>
    )
  }

  export default BtsCarousel;