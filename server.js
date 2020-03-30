var express = require("express")

var app = express();
var PORT = process.env.PORT || 3306;


const db = require ('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

async function run(){

await db.sequelize.sync();
await db.burgerOrder.create({
    text: "This is your vegan burger order",
    complete: true
});
const rows= await db.burgerOrder.findAll();
console.log(JSON.stringify(rows, null, 2));

}

run();

