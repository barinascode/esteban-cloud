
const mongooseLoader = async ({ mongoose })=> {

    const URI = false

    const dboptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }

    if(URI){

        try {
            if( await mongoose.connect(URI, dboptions) )
            console.log('Database connected successfully')
        } catch (error) {
            console.log( error )
        }
    }
}



module.exports = mongooseLoader
