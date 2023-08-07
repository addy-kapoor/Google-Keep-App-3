import React from 'react'

const Footer = () => {
    const currentDate = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright © {currentDate}</p>
      </footer>
    </div>
  );
}

export default Footer
