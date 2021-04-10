import React,{useState} from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Department from '../Images_For_Carousel/departments.jpg'
import FoodCourt from '../Images_For_Carousel/food_junction.jpg'
import Accessories from '../Images_For_Carousel/accessories.jpg'
import Pharmacies from '../Images_For_Carousel/pharmacies.jpg'
import ServiceCentres from '../Images_For_Carousel/service_centres.jpg'
import GameParlour from '../Images_For_Carousel/Game_parlour.jpg'
function ShowBrief() {

    return (
      <>
        <div className="carousel">
          <Carousel interval={2000}  autoPlay={true} infiniteLoop={true} width={1300} >
          <div>
          <img src={Department} alt="departments"/>
          <p className="legend">Department Store</p>
          </div>
          
          <div>
          <img src={FoodCourt} alt="Food"/>
          <p className="legend">Food Junction</p>
          </div>
          
          <div>
          <img src={Accessories} alt="accessories" />
          <p className="legend">Accessories</p>
          </div>
          
          <div>
          <img src={Pharmacies} alt="Pharmacies"/>
          <p className="legend">Pharmacies</p>
          </div>

          <div>
          <img src={ServiceCentres} alt="Service Centres"/>
          <p className="legend">Service Centres</p>
          </div>

          <div>
          <img src={GameParlour} alt="Game Parlour"/>
          <p className="legend">Gaming</p>
          </div>
          
          </Carousel>
        </div>
        </>
    )
}

export default ShowBrief
