try {
    let imageUrl = null;
  
    if (image) {
      try {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
        formData.append('transformation', JSON.stringify({
          width: 1200, // Resize to max width 1200px
          quality: "auto:good", // Optimize quality dynamically
          fetch_format: "auto" // Serve best format (WebP, AVIF, etc.)
        }));
  
        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/ds7x1z5jb/image/upload`,
          formData
        );
  
        // Cloudinary automatically generates optimized URLs
        imageUrl = uploadRes.data.secure_url;
      } catch (err) {
        setError("Failed to upload the image.");
        return;
      }
    }
