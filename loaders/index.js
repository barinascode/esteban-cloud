const expressLoader     =   require('./expressLoader')
const mongooseLoader    =   require('./mongooseLoader')
const controllersLoader =   require('./controllersLoader')

 const loader = async ({ app, express, mongoose, jwt }) => {
    
    await expressLoader({ app, express })
    await mongooseLoader({ mongoose })
    
    const handlersControllers = await controllersLoader({ mongoose, jwt })

    return {
        handlersControllers
    }

}

module.exports = loader