const UploadController = ({ jwt }) => ({
      
      up : async ( req, res, next ) => {

            res.send({_id : req.file.path.split('/')[1] })
      }
})

module.exports = UploadController