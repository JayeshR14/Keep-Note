import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
    return (
      <p className="top-[97%] flex justify-center align-middle w-full"> Copyright © {year}</p>
    )
}

export default Footer;