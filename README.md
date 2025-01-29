# Express Multer Cloudinary

This repository is a Node.js application that integrates Express.js, Multer, and Cloudinary for handling file uploads.

## Features

- Upload files using Multer middleware
- Store files on Cloudinary
- Retrieve Cloudinary URLs for uploaded files

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/cedriccastro99/express-multer-cloudinary.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd express-multer-cloudinary
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add your Cloudinary credentials:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
   Replace `your_cloud_name`, `your_api_key`, and `your_api_secret` with your actual Cloudinary credentials.

## Usage

1. **Start the Server:**
   ```bash
   npm start
   ```
   The server will start, and you can access it at `http://localhost:5000`.

2. **Upload a File:**
   Send a `POST` request to `/upload` with the file in the `form-data` under the key `file`.

3. **Response:**
   The server will respond with the Cloudinary URL of the uploaded file.

## Dependencies

- [Express.js](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Cloudinary](https://www.npmjs.com/package/cloudinary)

## License

This project is open-source and available under the MIT License.
