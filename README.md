# Esteban-cloud

# Description

If you need a service to upload images and be able to choose the size this is your solution, with this service you can upload images easily and choose the size below I show you how to install and use it

# Get started

 **git**: `git clone https://github.com/barinascode/esteban-cloud.git`
 
 **npm**: `npm install`
 
 **npm**: `run start-dev`
 
# How to upload an image

 - to upload an image you can use insonmia the path to upload the image is 
 `http://localhost/api/upload` 
 
 - Upload select the POST method choose multipart form data 
 
- The field must be called myFile and upload an image
 
 - Then it will return a token in this format {_id : token}

# How to choose the size
 
 - In your browser type 
 `http://localhost/image/_id/width/height`
 
 - Finally size is to choose the size 
 `http://localhost/image/_id/width/height`
