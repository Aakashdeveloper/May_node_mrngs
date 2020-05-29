import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "classpractice"
//nodeat8

const DBCall = {}

var output;

DBCall.getData = (colName) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).find({}).toArray((err,result) => {
            if(err) throw err;
            console.log('Data Fetched')
            output = result
        });
    });

    return output;
}

DBCall.postData= (colName, dbObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(colName).insert(dbObj,(err,result) => {
            if(err) throw err;
            console.log('Data Inserted')
            db.close()
        })
    });

    let out = `Data added to collection ${colName}`
    return out;
}                           

export default DBCall;