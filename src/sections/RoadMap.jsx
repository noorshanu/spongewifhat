import React from 'react'

function RoadMap() {
  return (
<section className="relative z-10 mt-4 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
      <img
          src="images/parasuit.svg"
          alt=""
          className=" mx-auto h-[100px]  relative z-10"
        />
        <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
         Our  Roadmap
        </h2>
     

  

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#473314] border-4  py-5 px-5  rounded-xl w-[100%] h-[190px] ">
            <div>
            <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 1</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">•  Launch Project.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Fasttrack CMC & CG listing.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">•  Tier 1 & Tier 2 CEX.</p>
          
          
          </div>

          <div className="bg-[#473314] border-4 py-5 px-5  rounded-xl w-[100%] h-full ">
          <div>
          <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 2</h1>
           
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">• Grow to 2000 holders and Introduce new NFT collections.</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Do partnerships.</p>
          
            <p  className=" text-lg font-popins font-normal lh-1_7">• Expand staking rewards program. .</p>
       

          </div>
          <div className=" py-5 px-5  rounded-xl w-[100%] h-[190px] bg-[#473314] border-4">
          <div>
          <h1 className="font-groot-one font-bold  text-white text-center  text-xl mb-1">Phase 3</h1>
             
            </div>
            <p className=" text-lg font-popins font-normal lh-1_7">•  Global marketing and futher partnerships</p>
            <p  className=" text-lg font-popins font-normal lh-1_7">• Keep innovating and spreading meme-tastic joy worldwide!.</p>
           
          

          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap