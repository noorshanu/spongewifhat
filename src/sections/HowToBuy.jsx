import React from "react";


function HowToBuy() {
  return (
    <section className=" ">
      <div className=" container-wrapper relative">
        <img src=" images/how.png" alt="" className=" absolute right-0 -top-[10%] h-[150px] sm:h-[300px] floating"   data-aos="fade-right"
            data-aos-duration="1500"/>
        <div className=" flex items-center justify-center gap-4">
          <div
            className="   rounded-3xl px-4 w-1/2 h-full "
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className=" text-2xl sm:text-7xl font-bold font-groot-one  py-1 text-center text-black text-sad">
              {" "}
              How To BUY $SpongeWifHat
            </h1>
           
          </div>
        </div>

    

        <div className="border-4 border-[#154259] bg-[#0f7fb6] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-groot-one  text-center">
                Step 1
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" font-bold font-groot-one  text-3xl py-2 txt-s text-black">
                CHOOSE A CRYPTO-CURRENCY EXCHANGE:
              </h2>

              <p className=" text-white">
                Select a reputable exchange known for its security measures,
                user-friendly interface, and support for your specific
                cryptocurrency. Consider factors such as trading fees, available
                trading pairs, and customer support options to ensure the
                exchange meets your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-[#154259] bg-[#0f7fb6] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-groot-one  text-center">
                Step 2
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" font-bold font-groot-one  text-3xl py-2 txt-s text-black">
              SEND YOUR SOLANA TO A WALLET
              </h2>

              <p className=" text-white">
              CREATE AN ACCOUNT WITH PHANTOM, BACKPACK OR ANY WALLET OF YOUR CHOICE
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-[#154259] bg-[#0f7fb6] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-groot-one  text-center">
                Step 3
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" font-bold font-groot-one  text-3xl py-2 txt-s text-black">
              TRANSFER SOLANA
              </h2>

              <p className=" text-white">
              TRANSFER YOUR SOLANA TO YOUR WALLET.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-[#154259] bg-[#0f7fb6] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-groot-one  text-center">
                Step 4
              </h2>
            </div>

            <div className="w-full">
              <h2 className=" font-bold font-groot-one  text-3xl py-2 txt-s text-black">
              BUY $SpongeWifHat
              </h2>

              <p className=" text-white">
              CONNECT YOUR WALLET TO A DECENTRALIZED EXCHANGE LIKE JUPITER OR RAYDIUM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
