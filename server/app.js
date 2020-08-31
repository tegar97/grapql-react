const express = require('express')
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const app = express()
const mongoose = require('mongoose')
const connectDb = require('./server')
const cors = require('cors')


app.use(cors())
connectDb()
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(4000,()=> {
    console.log('mantap')
})