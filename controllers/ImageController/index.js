const sharp = require('sharp')
const fs = require('fs')

const ImageController = ({ jwt }) => ({
      
      resize : async ( req, res ) => {

            const _id               =     req.params._id
            const widthString       =     req.params.width
            const heightString      =     req.params.height
            const format            =     req.params.format

            // Parse to integer if possible
            let  width  = 600
            let  height = 600

            if (widthString) {
                  width = parseInt(widthString)
            }

            if (heightString) {
                  height = parseInt(heightString)
            }

            // Set the content-type of the response
            res.type(`image/${format || 'png'}`)

            try {
                  if (fs.existsSync(`uploads/${_id}/original.png`)) {

                        const readStream = fs.createReadStream(`uploads/${_id}/original.png`)

                        let transform = sharp()
            
                        if (format) {
                        transform = transform.toFormat(format)
                        }
            
                        if (width || height) {
                        transform = transform.resize(width, height)
                        }
            
                        readStream.pipe(transform).pipe(res)
                  }
                } catch(err) {

                  console.error(err)

                  
                }



      }
})

module.exports = ImageController