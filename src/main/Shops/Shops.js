import React from 'react'
import CardShops from '../Cards/Card_Shops'
import HomeAppliances from '../Trends/home_appliances.jpg'
import SKINCARE from '../Trends/skin_care_liquid_makeup.jpg'
import SHIRTJACKET from '../Trends/shirt_jacket.jpg'
import Gift from '../Trends/Trends-Groceries/Hamper_Gourmet.jpg'
import Safola_Gold from '../Trends/Trends-Groceries/safola_gold.png'
import TataSalt from '../Trends/Trends-Groceries/tata_salt.jpg'
import kfc from '../Trends/Trends-FoodStuffs/kfc_trend.jpg'
import Mac from '../Trends/Trends-FoodStuffs/macd_trend.jpeg'
import Coffee from '../Trends/Trends-FoodStuffs/coffee.JPG'
import ChunkyBoots from '../Trends/Trends-Accessories/chunky_boots.PNG'
import PuffyPillow from '../Trends/Trends-Accessories/puffy_pillow.PNG'
import SmartWatch from '../Trends/Trends-Accessories/smart_watch.PNG'


function Shops() {

    var arr_loc=[1,2,3,4]
    var arr_dept_trends=[{id:1,card_title:"HOME APPLIANCES",card_body:"New trend",card_img_url:HomeAppliances},
    {id:2,card_title:"SKIN CARE LIQUID MAKEUP",card_body:"New trend",card_img_url:SKINCARE},
    { id:3,card_title:"SHIRT JACKET",card_body:"New trend",card_img_url:SHIRTJACKET}
    ]
    var arr_grocery_trends=[{id:1,card_title:"HAMPER GOURMET",card_body:"Current trend",card_img_url:Gift},
    {id:2,card_title:"SAFOLA GOLD",card_body:"Current trend",card_img_url:Safola_Gold},
    { id:3,card_title:"TATA SALT",card_body:"Current trend",card_img_url:TataSalt}
    ]
    var arr_food_trends=[{id:1,card_title:"COFFEE",card_body:"Current trend",card_img_url:Coffee},
    {id:2,card_title:"KFC CHICKEN WINGS",card_body:"Current trend",card_img_url:kfc},
    { id:3,card_title:"APPLE PIE",card_body:"Current trend",card_img_url:Mac}
    ]
    var arr_acc_trends=[{id:1,card_title:"CHUNKY BOOTS",card_body:"Current trend",card_img_url:ChunkyBoots},
    {id:2,card_title:"PUFFY PILLOW",card_body:"Current trend",card_img_url:PuffyPillow},
    { id:3,card_title:"SMART WATCHES",card_body:"Current trend",card_img_url:SmartWatch}
    ]
    return (
        <div>
            <div>
            <h1 style={{display:'flex',marginLeft:'100px'}}>TRENDING ITEMS AT DEPARTMENTAL STORES</h1>
            <h3 style={{display:'flex',marginLeft:'100px'}}>Floor:{arr_loc[0]}</h3>
            <CardShops cardData={arr_dept_trends} deptFloor={arr_loc[0]} checkName="departments"/>
            </div>

            <div>
            <h1 style={{display:'flex',marginLeft:'100px'}}>TRENDING ITEMS AT GROCERIES STORES</h1>
            <h3 style={{display:'flex',marginLeft:'100px'}}>Floor:{arr_loc[0]}</h3>
            <CardShops cardData={arr_grocery_trends} deptFloor={arr_loc[0]} checkName="groceries"/>
            </div>

            <div>
            <h1 style={{display:'flex',marginLeft:'100px'}}>TRENDING FOODSTUFFS AT RESTAURANTS</h1>
            <h3 style={{display:'flex',marginLeft:'100px'}}>Floor:{arr_loc[1]}</h3>
            <CardShops cardData={arr_food_trends} deptFloor={arr_loc[1]} checkName="Food Stuffs"/>
            </div>

            <div>
            <h1 style={{display:'flex',marginLeft:'100px'}}>TRENDING ACCESSORIES</h1>
            <h3 style={{display:'flex',marginLeft:'100px'}}>Floor:{arr_loc[2]}</h3>
            <CardShops cardData={arr_acc_trends} deptFloor={arr_loc[2]} checkName="Accessories"/>
            </div>

           
        </div>
    )
}

export default Shops
