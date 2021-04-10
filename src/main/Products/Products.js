import React from 'react'
import Card from '../Cards/Card'
import Clothes from '../Department_Stores/clothes_acc.JPG'
import Shoes from '../Department_Stores/shoes_acc.PNG'
import Cosmetics from '../Department_Stores/cosmetics_acc.jpeg'
import Furniture from '../Department_Stores/furniture_acc.PNG'
import Kitchen from '../Department_Stores/kitchen_acc.jpg'
import Bag  from  '../Department_Stores/suitcase.png'
import BakeryBread from '../Grocery_Images/bakery_bread.jpg'
import CannedFood from '../Grocery_Images/canned_food.jpg'
import DairyProducts from'../Grocery_Images/Dairy_products.jpg'
import FrozenFood from'../Grocery_Images/frozen_food.jpg'
import MeatSeafood from '../Grocery_Images/meat_seafood.jpg'
import RicePasta from '../Grocery_Images/rice_pasta.jpg'
import TvSet from '../Accessories/tv_set.jpg'
import Laptops from '../Accessories/laptops.jpg'
import Mobile from '../Accessories/mobiles.JPG'
import WirelessHeadphones from '../Accessories/wireless_headphones.jpg'
import WristWatch from '../Accessories/wrist_watch.png'
import Jewellery from '../Accessories/jewellery.JPG'
import BedSheets from '../Speciality_Stores/bedsheets.jpeg'
import Books from '../Speciality_Stores/books.jpg'
import Binoculars from '../Speciality_Stores/binoculars.jpg'
import Calendars from '../Speciality_Stores/calendars.jpg'
import MoneyCover from '../Speciality_Stores/money_covers.jpg'
import SportEquipment from '../Speciality_Stores/sports_equipments.jpg'
import GTA from '../Gaming/game_gta.jpg'
import MortalCombatX from '../Gaming/game_mortal_combatx.png'
import REDDEAD from '../Gaming/game_red_dead_redemption.JPG'
import PS4 from '../Gaming/ps4.JPG'
import XBOX from '../Gaming/x_box_latest.JPG'
import Nintendo from '../Gaming/Nintendo_latest.png'
import BusinessConsultant from '../Services_Offered/business_consultant_services.png'
import MSC from '../Services_Offered/mobile_service_centres.jpg'
import Gym from '../Services_Offered/gym.jpg'
import '../Cards/card.css'

function Products(props) {

  var  arr_departments=[{id:1,card_title:"CLOTHES",card_body:"475",card_img_url:Clothes},
    {id:2,card_title:"SHOES",card_body:"500",card_img_url:Shoes},
    { id:3,card_title:"COSMETICS",card_body:"895",card_img_url:Cosmetics},
    { id:4,card_title:"FURNITURE",card_body:"4300",card_img_url:Furniture},
    { id:5,card_title:"KITCHEN",card_body:"2000",card_img_url:Kitchen},
    { id:6,card_title:"SCHOOL BAGS",card_body:"540",card_img_url:Bag}
   ]
  var arr_groceries=[{id:1,card_title:"BREAD AND BAKERY",card_body:"75",card_img_url:BakeryBread},
  {id:2,card_title:"CANNED FOOD",card_body:"60",card_img_url:CannedFood},
  { id:3,card_title:"DAIRY PRODUCTS",card_body:"100",card_img_url:DairyProducts},
  { id:4,card_title:"FROZEN FOOD",card_body:"135",card_img_url:FrozenFood},
  { id:5,card_title:"MEAT AND SEA FOOD",card_body:"1500",card_img_url:MeatSeafood},
  { id:6,card_title:"RICE AND PASTA",card_body:"170",card_img_url:RicePasta}
 ] 
 var arr_accessories=[{id:1,card_title:"TV SET",card_body:"25000",card_img_url:TvSet},
 {id:2,card_title:"LAPTOPS",card_body:"28500",card_img_url:Laptops},
 { id:3,card_title:"MOBILE",card_body:"7650",card_img_url:Mobile},
 { id:4,card_title:"WIRELESS HEADPHONES",card_body:"2200",card_img_url:WirelessHeadphones},{ id:5,card_title:"WRIST WATCH",card_body:"950",card_img_url:WristWatch},
 { id:6,card_title:"JEWELLERY",card_body:"21670",card_img_url:Jewellery}
    ]
    var arr_specials=[{id:1,card_title:"BEDSHEETS",card_body:"450",card_img_url:BedSheets},
    {id:2,card_title:"BINOCULARS",card_body:"2300",card_img_url:Binoculars},
    { id:3,card_title:"BOOKS",card_body:"160",card_img_url:Books},
    { id:4,card_title:"CALENDARS",card_body:"100",card_img_url:Calendars},
    { id:5,card_title:"MONEY COVER",card_body:"50",card_img_url:MoneyCover},
    { id:6,card_title:"SPORT EQUIPMENTS",card_body:"670",card_img_url:SportEquipment}
    ]
    var arr_gaming=[{id:1,card_title:"GTA V",card_body:"2700",card_img_url:GTA},
    {id:2,card_title:"MORTAL COMBAT X",card_body:"2870",card_img_url:MortalCombatX},
    { id:3,card_title:"RED DEAD REDEMPTION",card_body:"1850",card_img_url:REDDEAD},
    { id:4,card_title:"PS4",card_body:"100",card_img_url:PS4},
    { id:5,card_title:"XBOX SERIES X",card_body:"40000",card_img_url:XBOX},
    { id:6,card_title:"NINTENDO",card_body:"24500",card_img_url:Nintendo}
    ]
    var arr_services=[{id:1,card_title:"BUSINESS CONSULTANT SERVICES",card_body:"Plan and organize business strategies",card_img_url:BusinessConsultant},
    {id:2,card_title:"SERVICE CENTERS",card_body:"Service your mobiles and laptops",card_img_url:MSC},
    { id:3,card_title:"GYM",card_body:"Increase your energy levels",card_img_url:Gym}
    ]
   
    return (
        <div>
            <div>
                <h1 style={{display:'flex',marginLeft:'100px'}}>POPULAR DEPARTMENT ACCESSORIES</h1>
                <Card cardData={arr_departments} checkName="DepartmentAccessories" />
                {//Check_name attribute
                }
            </div>
            <div>
                <h1 style={{display:'flex',marginLeft:'100px'}}>POPULAR GROCERIES</h1>
                <Card cardData={arr_groceries} checkName="Groceries"/>
            </div>
            <div>
                <h1 style={{display:'flex',marginLeft:'100px'}}>POPULAR ACCESSORIES</h1>
                <Card cardData={arr_accessories} checkName="Accessories"/>
            </div>
            <div>
                <h1 style={{display:'flex',marginLeft:'100px'}}>SPECIALITY STORES</h1>
                <Card cardData={arr_specials} checkName="SpecialStores"/>
            </div>
            <div>
                <h1 style={{display:'flex',marginLeft:'100px'}}>GAMING </h1>
                <Card cardData={arr_gaming} checkName="Gaming"/>
            </div>
             <div>
                <h1 style={{display:'flex',marginLeft:'100px'}}>SERVICES OFFERED </h1>
                <Card cardData={arr_services} checkName="Services_Offered"/>
            </div>
            <div className="back-to-home">
                <button 
                style={{display:'flex',backgroundColor:'lightcyan',cursor:'pointer',
                  height:'60px',padding:'20px',flexDirection:'row'  }}
                onClick={()=>{
                    props.history.push('/main/home')
                }}

                >BACK TO HOME PAGE</button>
            </div>
            <br/>
        </div>
        
    )
}

export default Products
