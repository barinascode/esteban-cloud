const fs = require('fs')
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


const routes = ({ app, handlersControllers }) => {

    const { 
      UploadController,
      AuthController,
      ImageController
    } = handlersControllers
    
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, 'uploads')
            },
            filename: function (req, file, cb) {
              const id = uuidv4()
              const ruta = `uploads/${id}`
              const original = `${id}/original`

              fs.existsSync( ruta ) || fs.mkdirSync( ruta )
              fs.existsSync( ruta ) || fs.mkdirSync( ruta )

              cb(null, original + '.png' )
              
            }
          })
           
          var upload = multer({
            storage: storage,
            fileFilter(req, file, next){
                const image = file.mimetype.startsWith("image/");
                if(image){
                  next(null, true);
                } else {
                  next({error: "El archivo no es una imagen"}, false);
                }
            } 
          })

    app.get( '/api/token-provider', AuthController.tokenProvider)
    app.post( '/api/upload', upload.single('myFile'), UploadController.up)
    app.get( '/image/:_id/:width/:height', ImageController.resize)

}

module.exports = routes