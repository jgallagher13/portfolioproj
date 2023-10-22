import {useEffect, useState } from 'react';
import './Projects.css';

export default function Projects({ data }) {
  const projectData = data.projects
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
      if (currentIndex === projectData.length-1) {
        return setCurrentIndex(0)
      }
      return setCurrentIndex(currentIndex+1)
    }
    useEffect(() => {
      const interval = setInterval(()=> {carouselInfiniteScroll()}, 4000) 
      return () => clearInterval(interval)
    })
  return (
    <section id="portfolio">
    <div>
      <div>
        <div className='carousel-container'>
        {
          projectData && projectData.map((item)=>{
            return(
                <div className='carousel-item' key={item.index}style={{transform: `translate(-${currentIndex * 100}%)`}} >
                    <img src={`${item.image}`} className="item-img"/>
                      <div className="desc">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <br></br>
                        <div className="link"><a href={`${item.repo}`}>GitHub</a></div>
                        &nbsp;
                        <div className="link"><a href={`${item.app}`}>Live Site</a></div>
                      </div>
                </div>
            )
          })
        }
        </div>
      </div>
    </div>
</section>
  )
   
}