
 /*  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', article.title);
    formData.append('text', article.text);
    formData.append('published_date', article.published_date);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/articles/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Article updated successfully!');
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to update the article.');
    }
  }; */


  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', article.title);
      formData.append('text', article.text);
      formData.append('published_date', article.published_date);
      if (image) {
        formData.append('image', image); 
      }

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/articles`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      alert('Article added successfully!');
      navigate('/admin/dashboard/articles');
    } catch (err) {
      setError('Failed to add the article.');
    }
  };
  