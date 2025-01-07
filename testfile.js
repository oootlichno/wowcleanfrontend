/* Articles Carousel */
.articles-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 40px;
}

.carousel-title {
  color: #071d49;
  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: left;
}

.carousel-about {
  color: #071d49;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: left;
}

.carousel-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  gap: 50px; /* Gap between cards */
}

.carousel-article-card {
  flex: 0 0 calc(50% - 25px); /* 2.5 articles visible */
  max-width: calc(50% - 25px);
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  scroll-snap-align: start;
  height: 500px; /* Adjust as per design */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
}

.carousel-articles-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.carousel-article-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: #fff;
}

.carousel-articles-meta {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #fff;
  color: #1565d8;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-articles-title {
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
}

.carousel-read-more {
  margin-top: 10px;
  text-decoration: none;
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-btn {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}
