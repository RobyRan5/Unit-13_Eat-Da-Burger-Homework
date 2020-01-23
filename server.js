const db = require ('./models');

db.sequelize.sync().then(function(){
console.log("yes it worked");

db.burgerOrder.create({
    text: "make burger order",
    complete: 1
}).then(function(data){
    console.log(data);
})

db.burgerOrder.findAll().then(data=>console.log(data));

db.burgerOrder.update({
    text: "Update Burger Order"
},
{
where: {
    id: 1
    }
  }
).then(data => console.log(data));

db.burgerOrder.destroy(
    {
        where: {            
        id: 1
    }
  }
).then(data => console.log(data));

});




