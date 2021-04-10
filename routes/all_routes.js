var express = require('express')
var bodyParser=require('body-parser')
var router = express.Router()
var connection=require('./conn/connect_db')
// const app = require('../app')
var app=express()


app.use(express.urlencoded({extended:false}))
app.use(express.json())
router.post("/register_user_details",function(req,res){
   //this is working
   
     
    const username=req.body.username
    const useremail=req.body.useremail
    const password=req.body.password
    const usergender=req.body.gender
    const userpincode=req.body.pincode
    const userdob=req.body.dob
    //define queries to be exec
    const insert_query="insert into user_credentials(username,useremail,password,usergender,userpincode,userdob) values(?,?,?,?,?,?)"
    const insert_into_login_relation="insert into user_login(useremail,password) values(?,?)"
    //[username,useremail,password,usergender,userpincode,userdob]
    //res.send("You have successfully registered your user account")
    connection.query(insert_query,[username,useremail,password,usergender,userpincode,userdob],
        (err,result)=>{
        if(err) {console.log(err)}
        else{ 
        res.send("You have successfully registered your user account!!")
        }
    })
    connection.query(insert_into_login_relation,[useremail,password],(err,result)=>{
        if(err){console.log(err);}
        })
    })        
router.post("/login_user_details",function(req,res){
const login_email=req.body.login_email
const login_password=req.body.login_password

const fd="select * from user_login where useremail=? and password=?"
connection.query(fd,[login_email,login_password],(err,result)=>{
   
    if(result)
    {res.send(result)}

})
    
})

router.post("/register_admin_details",function(req,res){
const admin_name=req.body.admin_reg_name
const admin_email=req.body.admin_reg_email
const admin_pwd=req.body.admin_reg_pwd

const query1="insert into admin_credentials(admin_name,admin_email,admin_password) values(?,?,?)"
connection.query(query1,[admin_name,admin_email,admin_pwd],(err,result)=>{
   err?(console.log(err)):(res.send("Admin Account created Successfully!!"))
})

const query2="insert into admin_login(admin_login_email,admin_login_password) values(?,?)"
connection.query(query2,[admin_email,admin_pwd],(err,result)=>{
    if(err){console.log(err);}
})

})

router.post("/login_admin_details",function(req,res) {
/*
 check_login_email:emailstate,
            check_login_pwd:passwordstate
*/
const check_login_email=req.body.check_login_email
const check_login_pwd=req.body.check_login_pwd
let query="select * from admin_login where admin_login_email=? and admin_login_password=?"
connection.query(query,[check_login_email,check_login_pwd],(err,result)=>{
    if(err){console.log(err);}
    else{res.send(result)}
})

})
router.post("/handleInsertProducts",function (req,res) {
    //pid:id,ptitle:title.toString(),pbody:body.toString(),store_name:check_name.toString()

    const id=req.body.pid
    const title=req.body.ptitle
    const body=req.body.pbody
    const store_name=req.body.store_name

    let insert_query="INSERT into products(product_id,product_type,product_name,product_body) values(?,?,?,?)"

    connection.query(insert_query,[id,store_name,title,body],(err,result)=>{
        if(err){res.send(err)}
        
        else{
            res.send("Added To Cart Successfully")
        }
    })


})
router.post("/handleDeleteProducts",function (req,res) {
    const product_name=req.body.product_name

    const del_query="delete from products where product_name=?"

    connection.query(del_query,[product_name],(err,result)=>{
        if(err)
        {
            res.send(err)
        }
        else if(result.affectedRows)
        {res.send("Item deleted successfully!!")}
        else{
            res.send("Item not found!Can't be deleted!!!")
        }
    })

})


router.get("/fetch_product_records",function(req,res) {

    select_records="select * from products;"
    connection.query(select_records,(err,result)=>{
        if(err){res.send(err)}
        else{
            res.send(result)
        }
    })
    
})

router.post("/handleTrendingProducts",function (req,res) {
    /**
     *   trend_product_id:id,
            trend_product_name:title.toString(),
            trend_type:body.toString(),
            deptFloor_:deptFloor.toString(),
            dept_name:departmentName.toString()
     */
    const trend_product_id=req.body.trend_product_id
    const trend_product_name=req.body.trend_product_name
    const trend_type=req.body.trend_type
    const deptFloor=req.body.deptFloor_
    const deptName=req.body.dept_name

    var insert_trend_query="insert into trending_products(trend_product_id,dep_floor_no,trend_item_name,trend_shop_name,trend_type) values(?,?,?,?,?)"
    

    connection.query(insert_trend_query,[trend_product_id,deptFloor,trend_product_name,deptName,trend_type],(e,result)=>{
        if(e){res.send(e)}
        else if(result.affectedRows)
        { res.send("Item added Successfully") }
        else{
            res.send(1)
        }
        
    })

})
router.post("/handleTrendingDeleteProducts",function(req,res) {
    
    const trend_product_name=req.body.trend_product_name
    var delete_trend_q="delete from trending_products where trend_item_name=?"
    connection.query(delete_trend_q,[trend_product_name],(e,result)=>{
        if(e){res.send(e)}
        else if(result.affectedRows)
        {res.send("Item deleted successfully!!")}
        else{
            res.send("Item not found!Can't be deleted!!!")
        }

    })

})

router.get("/fetch_trending_items",function (req,res) {
    select_records="select * from trending_products"
    connection.query(select_records,(err,result)=>{
        if(err){res.send(err)}
        else{
            res.send(result)
        }
    })
})

router.post("/get_user_details",function (req,res) {
   var useremail=req.body.email
   var userpassword=req.body.password

  var  sq="select * from  user_login where useremail=? and password=?"

  connection.query(sq,[useremail,userpassword],(err,result)=>{
      if(err){res.send(err)}
      else if(result)
      {res.send(result)}
  })
})

router.get("/get_sum_of_items",function (req,res) {
    
    var getsum="select sum(product_body) as sum from products"

    connection.query(getsum,(err,result)=>{
        if(err){res.send(err)}
        else{
            res.send(result);
        }
    })

})
router.post("/send_sum",function (req,res) {

   const sum1= req.body.sum
    select_sum="select * from sum_value;"
    insert_query="insert into sum_value(sum_of_products) values(?)"
    update_query="update sum_value set sum_of_products=?"
    connection.query(select_sum,(err,result)=>{
        if(result==0)
        {
            connection.query(insert_query,[sum1],(err,result)=>{
                if(err){res.send(err)}
                else{
                    res.send("sum inserted!!")
                }
            })
        }
        else{
            connection.query(update_query,[sum1],(err,result)=>{
                if(err){res.send(err)}
                else{
                    res.send("update successfully")
                }
            })
        }
    })

})
router.get("/get_updated_sum_value_if_not_zero",function (req,res) {
   const get_costs="select * from sum_value"
    connection.query(get_costs,(err,result)=>{
        if(err){res.send(err)}
        else{
            res.send(result);
        }
    })
})
module.exports = router;