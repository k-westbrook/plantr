const { db, Gardener, Plot, Vegetable } = require('./models.js');
db.sync({ force: true }).then(() => {
    console.log('database synced!');
    Vegetable.bulkCreate([
        { name: 'cucumber', color: 'green', planted_on: '03-04-2018' },
        { name: 'squash', color: 'yellow', planted_on: '03-04-2017' },
        { name: 'tomato', color: 'green', planted_on: '03-18-2018' },
        { name: 'rhubarb', color: 'red', planted_on: '05-14-2018' },
    ]).then(() => {
        return Vegetable.findAll();
    }).then(vegetables => {
        console.log(vegetables);
    }).finally(() =>{db.close()});


}).catch(err => {
    console.log('Disaster!');
    console.log(err);
});




