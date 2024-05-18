import React from 'react'
<script src="https://cdn.tailwindcss.com"></script>
const DescriptionBox = () => {
  return (
    <div className='m-2'>
      <div className='flex '>
        <div className='flex align-center justify-center border-none bg-orange-200 p-2 m-3 font-semibold'>
            Description
        </div>
        <div className='flex align-center justify-center border-none bg-orange-200 p-2 m-3 font-semibold'>
            Reviews (122)
        </div>
      </div>
      <div className='grid grid-col-1 gap-2'>
        <p className='text-black-600'>
        An ecommerce platform tailored for clothing enthusiasts, our website embodies the essence of style, convenience, and choice. With a curated selection of the latest trends and timeless classics, we cater to every fashion-forward individual's taste and preferences. From casual wear to formal attire, our intuitive interface ensures a seamless shopping experience, allowing customers to effortlessly browse through a diverse range of styles, sizes, and colors. Our commitment to quality is evident in every garment, with detailed product descriptions and high-resolution images to help customers make informed purchasing decisions. Secure payment options and robust encryption protocols ensure that transactions are safe and secure, giving our customers peace of mind with every purchase. Through constant updates and new arrivals, we strive to keep our inventory fresh and exciting, offering something for everyone, regardless of age, gender, or budget. Join us on our journey to redefine online fashion retail, where style meets convenience at the click of a button.
        </p>
        <p className='mt-3 text-gray-400 mb-3'>
        With secure payment gateways and stringent privacy measures in place, customers can shop with confidence, knowing that their personal information is safeguarded at every step. What sets us apart is our commitment to sustainability and ethical practices, with many of our brands adhering to eco-friendly production methods and fair labor standards. As we continue to evolve and innovate, our mission remains unchanged: to empower individuals to express themselves through fashion while leaving a positive impact on the planet. Welcome to a world where style meets substance, where every purchase tells a story of conscious consumerism and effortless elegance.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
