import express from 'express'
import { v2 as cloudinary } from 'cloudinary'

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export const upload = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.')
    }

    // Use cloudinary's uploader to upload the image
    cloudinary.uploader
      .upload_stream({ resource_type: 'image' }, (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message })
        }
        // Return the result (image URL, public_id, etc.)
        return res.json({
          message: 'Upload successful',
          url: result.secure_url, 
          public_id: result.public_id
        })
      })
      .end(req.file.buffer)
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong.')
  }
}

export default router