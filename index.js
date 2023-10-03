import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const items = [];
const workItems = [];
var type = "";


app.get("/", (req,res) =>{
    console.log("Listed items are :" , items);
    type = "daily";
    res.render("list.ejs", { listItems : items ,
    type : type })
    
});

app.get("/work", (req,res) =>{
    console.log("Work items are :" , workItems);
    type = "work";
    res.render("list.ejs", { listItems : workItems ,
    type: type })
    
});



app.post("/submit",(req,res) =>{
    if (type === "daily"){
        const itemAdded = { text: req.body.item, completed: false };
        items.push(itemAdded);
        //console.log(items);
       res.redirect("/");
    }
    else if (type === "work"){
        const itemAdded = { text: req.body.item, completed: false };
        workItems.push(itemAdded);
        //console.log(items);
        res.redirect("/work");
    }
    
})

app.post("/toggle", (req, res) => {
    const itemId = parseInt(req.body.itemId);
    const itemArray = type === "daily" ? items : workItems;
    const item = itemArray.find((item) => itemArray.indexOf(item) === itemId);

    if (item) {
        item.completed = !item.completed;
    }

    res.redirect("/");
});



app.listen(port, () =>{
    console.log(`Listening to port ${port}`);
})

