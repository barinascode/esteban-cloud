const AuthController = ({ jwt }) => ({

      tokenProvider : async ( req, res ) => {

            const payload = {
			check:  true
              };
              
            // const token = jwt.sign( payload, app.get('llave') , {
             const token = jwt.sign( payload, 'ms72ydy37d7dh3d88d0d8d6d4dh2nxrD2h22' , {
                  // expiresIn: 1440 
            })

              res.status(200).json({
                  token
            }).end();
              
		res.send('Welcome to ecommerce api')
      }
})

module.exports = AuthController