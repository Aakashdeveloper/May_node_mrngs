const express = require('express');
const expressGraphQL = require('express-graphql');
const port = 8700;
const app = express();
const cors = require('cors');
const schema = require('./schema/schema');

app.use(cors());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}));

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})