
const mongooseLoader = async ({ mongoose })=> {

    const URI = '. . .';
    const dboptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }

    try {
        if( await mongoose.connect(URI, dboptions) )
            console.log('Database connected successfully')
    } catch (error) {
        console.log( error )
    }
}



module.exports = mongooseLoader
