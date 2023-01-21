import React from 'react'

const Header = () => {

   return (
     <>
       <div className="h-[70px] flex justify-start header pl-8 items-center max-w-full border-b-[2px] shadow-lg text-[#818181] border-[#9bc3eb]">
         <img src="/src/post-it.png" className="h-[35px] mr-5"></img>
         <p className="text-3xl font-bold text-[30px] text-[#e9bf33]">Keep Notes</p>
       </div>
     </>
   );

}
export default Header;
