import React from 'react'

const Button = ({buttontext,onclick}) => {
  return (
    <button className={`w-full my-2 ${buttontext === "Previous" ? "bg-white border-2 border-[#C7F609]":"bg-[#C7F609]"} grid place-content-center 
    py-2.5 md:py-3 rounded-full text-sm md:text-xl font-semibold md:ml-auto`}
            onClick={onclick}
          >{buttontext}</button>
  )
}

export default Button