const graphql = require('graphql');
const axios = require('axios');

const{
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} = graphql


const ProductType = new GraphQLObjectType({
    name:'Product',
    fields:{
        id: {type:GraphQLInt},
        name: {type:GraphQLString},
        rating: {type:GraphQLInt},
        category: {type:GraphQLString},
        price: {type:GraphQLInt},
        delivery: {type:GraphQLString},
        image: {type:GraphQLString},
        details:{type:GraphQLString}
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        product:{
            type:ProductType,
            args:{id:{type:GraphQLInt}},
            resolve(parentValue, args){
                return axios.get(`http://localhost:8900/product/${args.id}`)
                        .then((res) => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})