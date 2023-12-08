import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">Description</div>
      <div className="descriptionbox-nav-box fade">Reviews(122)</div> 
      </div>
      <div className="descriptionbox-description">
        <p>Discover a world of convenience and choice with our online store. Browse a curated collection of high-quality products, from tech gadgets to fashion essentials, all at your fingertips. Enjoy seamless shopping, secure transactions, and doorstep delivery for an effortless experience.</p>
        <p>At Shopy, we're dedicated to redefining your shopping experience. Our user-friendly interface makes it easy to find what you need, whether you're searching for the latest trends in fashion, must-have electronics, or unique home decor. With a commitment to quality and customer satisfaction, we strive to exceed your expectations with every purchase. Shop confidently and indulge in a seamless shopping journey tailored just for you.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
