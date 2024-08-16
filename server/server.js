const express= require("express");
const mysql= require("mysql");
const cors= require("cors");
const bcrypt = require('bcrypt');
require('dotenv').config();
const saltRounds=10;

const app = express();
app.use(cors());
app.use(express.json());


const con= mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATANAME,
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  /*-----------------------------------------------------------------------------------------------------------------------*/

  app.post("/addUser", (req,res)=>{

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            throw err;
        }
        // Salt generation successful, proceed to hash the password
        let userPassword=req.body.Password;
        bcrypt.hash(userPassword, salt, (err, hash) => {
            if (err) {
                throw err;
            }
        
        // Hashing successful, 'hash' contains the hashed password
        con.query('INSERT INTO users (Username,Password,Role,Email) VALUES ( ?, ?, ?, ?)' ,[req.body.Username,hash,req.body.Role,req.body.Email], function (err, result) {
            if (err) throw err
            if (result[0] === undefined)
            {
              console.log(err)
              return res.json("Error has occured")
            }
            return res.json(JSON.stringify(result))
          });
        console.log('Hashed password:', hash);
        });
        });
    
    
  })

  app.post("/registerCheck", (req,res)=>{
    con.query('select * from users where Email=?' ,[req.body.Email], function (err, result) {
      if (err) throw err
      if (result[0] === undefined)
      {
        console.log(err)
        console.log("good to go")
        return res.json("Good to go")
      }
      console.log("this email is already in use")
      return res.json("This email is already in use")
    });
  })

  app.post("/loginUser", (req,res)=>{

    con.query('select * from users where Email=?' ,[req.body.Email], function (err, result) {
        if (err) throw err
        if (result[0] === undefined)
        {
          console.log("no mail, undefined")
          return res.json("user not found")
        }
        else
        if(result.length>0)
        {
            let userPass=req.body.Password;
            let storedPass=result[0].Password;
            bcrypt.compare(userPass, storedPass, (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    throw err;
                }
            
                if (result) {
                    // Passwords match, authentication successful
                    console.log('Passwords match! User authenticated.');
                    return res.json("Success");
                } else {
                    // Passwords don't match, authentication failed
                    console.log('Passwords do not match! Authentication failed.');
                    return res.json("user not found");
                }
            });
        }
        else{
        
        console.log(err);
        return res.json("user not found");
        }
        
  
      });
  })

  app.get("/getinv", (req,res)=>{
    con.query('SELECT * FROM items', function (err, result) {
      if (err) throw err
      if (result[0] === undefined)
      {
        console.log(err)
        return res.json("No Items Yet")
      }
      
      return res.json(JSON.stringify(result))
    });
  })

  app.get("/getcount", (req,res)=>{
    con.query('select count(*) as ct FROM items', function (err, result) {
      if (err) throw err
      if (result[0] === undefined)
      {
        console.log(err)
        return res.json("No Items Yet")
      }
      return res.json(JSON.stringify(result))
    });
  })

  app.post("/delete", (req,res)=>{
    con.query('delete from items where id=?' ,[req.body.id], function (err, result) {
      if (err) throw err
      if (result[0] === undefined)
      {
        console.log(err)
        console.log("not deleted")
        return res.json("delete failed")
      }
      console.log("deleted")
      return res.json("deleted")
    });
  })

  app.post("/additem", (req,res)=>{
    con.query('INSERT INTO items ( name, type, cat, quantity, purity,weight,material,dimension,voltage,current,power) VALUES ( ?, ?, ?,?,?,?,?,?,?,?,?)' ,[req.body.name,req.body.type,req.body.cat,req.body.quantity,req.body.purity,req.body.weight,req.body.material,req.body.dimension,req.body.voltage,req.body.current,req.body.power], function (err, result) {
      if (err) throw err
      if (result[0] === undefined)
      {
        console.log(err)
        return res.json("error ya 7ob")
      }
      return res.json(JSON.stringify(result))
    });
  })

  app.post("/update", (req,res)=>{
    console.log(req.body.cat)
    if(req.body.cat=="rm")
    {
      con.query('Update items set name = ? ,quantity= ?, type=?, purity=? where id = ?' ,[req.body.name,req.body.quantity,req.body.type,req.body.purity,req.body.id], function (err, result) {
        if (err) throw err
        if (result[0] === undefined)
        {
          console.log(err)
          return res.json("Not found")
        }
        return res.json(JSON.stringify(result[0]))
      });
    }
    else if(req.body.cat=="ep")
    {
      con.query('Update items set name = ? ,quantity= ?, voltage=?, current=?, power=? where id = ?' ,[req.body.name,req.body.quantity,req.body.voltage,req.body.current,req.body.power,req.body.id], function (err, result) {
        if (err) throw err
        if (result[0] === undefined)
        {
          console.log(err)
          return res.json("Not found")
        }
        return res.json(JSON.stringify(result[0]))
      });
    }
    else if(req.body.cat=="mp")
    {
      con.query('Update items set name = ? ,quantity= ?, material=?, dimension=?, weight=? where id = ?' ,[req.body.name,req.body.quantity,req.body.material,req.body.dimension,req.body.weight,req.body.id], function (err, result) {
        if (err) throw err
        if (result[0] === undefined)
        {
          console.log(err)
          return res.json("Not found")
        }
        return res.json(JSON.stringify(result[0]))
      });
    }
  })
  
var listener = app.listen(4000,()=>{console.log(listener.address().port)})