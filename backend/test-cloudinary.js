require("dotenv").config({ path: "config/.env" });
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// A tiny public test image URL (safe, doesn't depend on your own avatar data)
const testImage = "https://res.cloudinary.com/demo/image/upload/sample.jpg";

cloudinary.v2.uploader.upload(testImage)
  .then((res) => console.log("✅ Upload success:", res.secure_url))
  .catch((err) => console.log("❌ Upload error:", err));