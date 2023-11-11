import React, { useRef } from "react";

const Banner = ({handleCategoriesFilter}) => {

  const inputRef = useRef();
  
  return (
    <div className="p-3">
        <div
      className="hero h-[450px] mt-6"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/Gx7yFvf/donate-charity-shops-960x790.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="">
        <h2 className='text-5xl font-bold'>I Grow By Helping People In Need</h2>
        <p className="mt-4 text-lg">Your donation can put a smile on many needy people. <br /> 
        So,if you want you can donate it on our website</p>
        <input ref={inputRef} type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs mt-8 text-black" />
        <button onClick={()=>handleCategoriesFilter(inputRef.current.value)} className="btn btn-warning md:ml-2 mt-2 md:mt-0">Search</button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Banner;
