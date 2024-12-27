/* Header */
.header {
    display: flex;
    justify-content: space-between; /* Space between navigation and phone number */
    align-items: center;
    height: 90px;
    padding: 0 40px; /* Equal padding on both sides */
    background-color: #071D49;
    color: white;
  }
  
  .header .logo img {
    width: 176px;
  }
  
  .header .nav {
    display: flex;
    gap: 16px; /* Space between nav links */
    align-items: center;
  }
  
  .header .nav .nav-link {
    color: white;
    text-decoration: none;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
  
  .header .nav .nav-link:hover {
    color: #ADBDDD;
    border-bottom: 3px solid var(--White, #FFF);
  }
  
  .phone-number {
    color: white;
    text-decoration: none;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.5px;
  }