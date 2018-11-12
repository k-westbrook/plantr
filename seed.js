const db = require('./models.js');
db.sync({force: true}).then(() => {console.log('database synced!');}).catch(err => {
    console.log('Disaster!');
    console.log(err);
})
.finally(() => {db.close();});
