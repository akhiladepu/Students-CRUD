const express = require('express')

const app = express()

app.use(express.json());

var users = require('./users.json');

app.get("/", (req, res) => {
    return res.send("Welcome to Home Page");
})

app.get("/users", (req, res) => {
    return res.send(users);
})
//users/999/Angelle/Biggar/abiggar0@newsvine.com/Polygender/129.251.240.88/81
///:id/:first_name/:last_name/:email/:gender/:ip_address/:age
app.post("/users", (req, res) => {
    // let addUser = {};
    // addUser.id = req.params.id;
    // addUser.first_name = req.params.first_name;
    // addUser.last_name = req.params.last_name;
    // addUser.email = req.params.email;
    // addUser.gender = req.params.gender;
    // addUser.ip_address = req.params.ip_address;
    // addUser.age = req.params.age;
    
    // users.push(addUser);

    users.push(req.body);
    
    return res.send("User added successfully");
})

app.delete("/users/:id", (req, res) => {
    
    let userId = req.params.id;
    let temp = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            temp = i;
            break;
        }
    }

    var users1 = users.splice(temp);

    for (let i = 1; i < users1.length; i++) {
        users.push(users1[i]);
    }

    return res.send("User Deleted successfully");//
})

app.patch("/users/:id/:parameter/:parameterValue", (req, res) => {
    
    let userId = req.params.id;
    let parameter = req.params.parameter;
    let parameterValue = req.params.parameterValue;
    
    let temp = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            temp = i;
            break;
        }
    }

    users[temp][parameter] = parameterValue;
    return res.send("User Details Updated successfully");
})

app.listen("1234", ()=>{
    console.log("Port 1234 is Started");
})