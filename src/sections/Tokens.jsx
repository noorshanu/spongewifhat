

function Tokens() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">

      <div>

        <h1 className="font-groot-one text-5xl text-black text-center">
TOKENOMICS
        </h1>

        <p className="font-groot-two text-xl text-black text-center">
          1,000,000,000 Supply

        </p>
      </div>

      <div className=" flex justify-center flex-col sm:flex-row items-center py-2 px-4 gap-7">

        <div className=" py-2 px-2 rounded-2xl bg-[#0f7fb6]">
          <img src="images/anno.jpeg" alt="" className=" rounded-2xl h-[300px] w-auto" />

          <p className=" font-groot-one text-xl py-2 text-center">RENOUNCED</p>

        </div>


        <div className=" py-2 px-2 rounded-2xl bg-[#0f7fb6]">
          <img src="images/tax.jpeg" alt="" className=" rounded-2xl h-[300px] w-auto" />

          <p className=" font-groot-one text-xl py-2 text-center">TAX 0%</p>

        </div>


        <div className=" py-2 px-2 rounded-2xl bg-[#0f7fb6]">
          <img src="images/burn.jpeg" alt="" className=" rounded-2xl h-[300px] w-auto" />

          <p className=" font-groot-one text-xl py-2 text-center">LIQUIDITY BURNT</p>

        </div>

      </div>
        
    </div>
  )
}

export default Tokens