const routes = ({ app, handlersControllers }) => {

    const { TestController } = handlersControllers
    
    app.get( '/api/say-welcome', TestController.sayWelcome)

}

module.exports = routes