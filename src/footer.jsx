import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
    return (
      <p className="flex fixed bottom-0 justify-center font-bold bg-[#9bc3eb] align-middle w-full"> Copyright © {year}</p>
    )
}

export default Footer;