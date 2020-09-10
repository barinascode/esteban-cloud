

const server = async ({ app, express,  jwt, mongoose, loaders, routes }) => {
    
    // Inyected controllers
    const { handlersControllers }  = await loaders({ app, express, mongoose, jwt })

    await routes({ app, handlersControllers })

    app.listen( 80 , err => {
            if (err) {
            console.log(err);
            return;
            }
            console.log(`Your server is ready !`);
        });
    }

module.exports = server