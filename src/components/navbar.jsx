import React from "react";


function Navbar() {
  return (
    <section className="">
      <div className=" flex justify-center bg-[#020202]">
      <div className=" h-[40px] bg-[#020202] relative flex items-center justify-between container">
            <span className="md:hidden rounded-t-full w-[64px] h-[49.66px] bg-[#0156FF] absolute left-2 top-2 flex items-center justify-center">
                  <svg width="18.11" height="23.8" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.74742 0.286133L0.690186 6.17961L0.690186 13.4331L9.74742 19.3266L17.0131 14.7932V16.9465L9.74742 21.7067L0.690186 15.6998L0.690186 18.3066L9.74742 24.0867L18.8047 18.3066V11.0531L11.539 15.6998V13.4331L18.8047 8.673V6.17961L9.74742 0.286133Z" fill="white"/>
                  </svg>
            </span>
            <div className="w-max h-[23px] absolute top-2 left-[86px] md:static flex items-center gap-1">
              <p className= "text-[10px] md:text-[12px]  flex text-[#A2A6B0] font-medium">Mon-Thu: <span className="pl-1 text-[#FFFFFF]">9:00 AM - 5:30 PM</span></p>
              <svg className="" width="6" height="6" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1.76904L3 3.76904L1 1.76904" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </div>

            <div className="hidden md:block ">
              <p className="text-[12px] flex text-[#A2A6B0] text-center">Visit our showroom in 1234 Street Adress City Address, 1234
              <span className="pl-1"> 
              <p className="text-white  font-medium">Contact Us</p>
              <hr className="bg-white" /></span></p>
            </div>

            <div className=" md:h-[17px] absolute right-4 top-2.5  md:hidden">
              <p className="text-white  text-[12px] font-medium">Contact Us</p>
              <hr className="bg-white" />
            </div>

            <div className="hidden md:flex text-white text-[12px] items-center gap-3">
              <p>Call Us: (00) 1234 5678</p>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1054 0.276855H0.894536C0.55278 0.276855 0.276672 0.552963 0.276672 0.894719V15.1056C0.276672 15.4473 0.55278 15.7234 0.894536 15.7234H15.1054C15.4471 15.7234 15.7233 15.4473 15.7233 15.1056V0.894719C15.7233 0.552963 15.4471 0.276855 15.1054 0.276855ZM13.3213 4.78533H12.0875C11.1202 4.78533 10.9329 5.24486 10.9329 5.92065V7.40932H13.2421L12.9409 9.73982H10.9329V15.7234H8.52515V9.74175H6.5113V7.40932H8.52515V5.69088C8.52515 3.69634 9.7435 2.60929 11.5237 2.60929C12.3771 2.60929 13.1089 2.67301 13.3232 2.70197V4.78533H13.3213Z" fill="white"/>
              </svg>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99997 5.39658C6.56638 5.39658 5.39646 6.5665 5.39646 8.00009C5.39646 9.43368 6.56638 10.6036 7.99997 10.6036C9.43357 10.6036 10.6035 9.43368 10.6035 8.00009C10.6035 6.5665 9.43357 5.39658 7.99997 5.39658ZM15.8086 8.00009C15.8086 6.92197 15.8183 5.85361 15.7578 4.77744C15.6972 3.52744 15.4121 2.41806 14.498 1.504C13.582 0.587983 12.4746 0.30478 11.2246 0.244233C10.1465 0.183686 9.0781 0.193452 8.00192 0.193452C6.9238 0.193452 5.85544 0.183686 4.77927 0.244233C3.52927 0.30478 2.41989 0.589936 1.50583 1.504C0.589814 2.42001 0.306611 3.52744 0.246064 4.77744C0.185517 5.85556 0.195283 6.92392 0.195283 8.00009C0.195283 9.07626 0.185517 10.1466 0.246064 11.2227C0.306611 12.4727 0.591768 13.5821 1.50583 14.4962C2.42185 15.4122 3.52927 15.6954 4.77927 15.7559C5.85739 15.8165 6.92575 15.8067 8.00192 15.8067C9.08005 15.8067 10.1484 15.8165 11.2246 15.7559C12.4746 15.6954 13.584 15.4102 14.498 14.4962C15.414 13.5802 15.6972 12.4727 15.7578 11.2227C15.8203 10.1466 15.8086 9.07822 15.8086 8.00009ZM7.99997 12.0059C5.78317 12.0059 3.99411 10.2169 3.99411 8.00009C3.99411 5.78329 5.78317 3.99423 7.99997 3.99423C10.2168 3.99423 12.0058 5.78329 12.0058 8.00009C12.0058 10.2169 10.2168 12.0059 7.99997 12.0059ZM12.1699 4.76572C11.6523 4.76572 11.2343 4.34775 11.2343 3.83017C11.2343 3.31259 11.6523 2.89462 12.1699 2.89462C12.6875 2.89462 13.1054 3.31259 13.1054 3.83017C13.1056 3.95307 13.0815 4.0748 13.0345 4.18837C12.9876 4.30195 12.9187 4.40514 12.8318 4.49205C12.7449 4.57895 12.6417 4.64786 12.5281 4.69482C12.4145 4.74178 12.2928 4.76587 12.1699 4.76572Z" fill="white"/>
              </svg>
            </div>
            </div>
      </div>

      <div className="w-full h-[64px] bg-[#0156FF] md:bg-white  px-2  flex items-center justify-center">
        <div className="w-full flex items-center gap-4 container">
          <svg
          className="md:hidden"
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H21"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
            />
            <path
              d="M4 10H21"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
            />
            <path
              d="M4 16H21"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
            />
          </svg>

          <svg className="hidden md:block pl-3" width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0332 0.945312L0.296997 10.8636V23.0707L17.0332 32.989L30.4589 25.3596V28.9836L17.0332 36.9945L0.296997 26.8855V31.2724L17.0332 41L33.7694 31.2724V19.0653L20.3436 26.8855V23.0707L33.7694 15.0598V10.8636L17.0332 0.945312Z" fill="#0156FF"/>
          </svg>
         
          <div className=" hidden md:flex text-[14px] pl-8 align-middle gap-5 items-center ">
              <a href="">Laptops</a>
              <a href="">Desktop PCs</a>
              <a href="">Networking Devices</a>
              <a href="">Printers & Scanners</a>
              <a href="">PC Parts</a>
              <a href="">All Other Products</a>
              <a href="">Repairs</a>
              <button className="min-w-[71px] min-h-[37px] border-2 rounded-full px-4 py-1 border-[#0156FF] text-[#0156FF]">Our Deals</button>
          </div>

          <div className="relative md:hidden">
            <input
              type="text"
              className="rounded-3xl  text-[11px] pl-8 w-[187px] h-[35px] relative "
              placeholder="Search here"
            />

            <svg
              className="absolute left-3 top-2.5"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000svg"
            >
              <path
                d="M2.68983 2.68408C1.59118 3.7811 0.952187 5.25577 0.903058 6.80757C0.853928 8.35937 1.39836 9.87151 2.42541 11.0358C3.45246 12.2002 4.88483 12.9291 6.43063 13.074C7.94673 13.2161 9.46002 12.786 10.6739 11.8702L13.8265 15.0235L13.8265 15.0236C13.9055 15.1025 13.9992 15.1652 14.1024 15.2079C14.2056 15.2506 14.3162 15.2726 14.4279 15.2726C14.5395 15.2726 14.6501 15.2506 14.7533 15.2079C14.8565 15.1652 14.9502 15.1025 15.0292 15.0236C15.1082 14.9446 15.1708 14.8508 15.2135 14.7477C15.2563 14.6445 15.2783 14.5339 15.2783 14.4222C15.2783 14.3105 15.2563 14.1999 15.2135 14.0968C15.1708 13.9936 15.1082 13.8998 15.0292 13.8209L15.0292 13.8209L11.876 10.6685C12.7894 9.45446 13.2176 7.94219 13.0747 6.42754C12.9289 4.88304 12.2002 3.45209 11.0369 2.42579C9.87349 1.39949 8.36283 0.854939 6.81222 0.902922C5.2616 0.950904 3.78751 1.58781 2.68983 2.68408ZM2.68983 2.68408L2.76048 2.75484L2.68983 2.68408ZM10.1154 3.88737C10.5294 4.29472 10.8587 4.78002 11.0842 5.31527C11.3098 5.85052 11.4271 6.42513 11.4295 7.00596C11.4319 7.58679 11.3192 8.16233 11.098 8.6994C10.8768 9.23647 10.5515 9.72444 10.1408 10.1351C9.73008 10.5459 9.24212 10.8712 8.70505 11.0924C8.16798 11.3135 7.59243 11.4262 7.01161 11.4238C6.43078 11.4215 5.85617 11.3041 5.32092 11.0786C4.78567 10.853 4.30037 10.5237 3.89302 10.1097C3.07896 9.28228 2.62483 8.1667 2.62956 7.00596C2.63429 5.84522 3.09748 4.73338 3.91825 3.91261C4.73902 3.09184 5.85087 2.62864 7.01161 2.62391C8.17234 2.61919 9.28792 3.07331 10.1154 3.88737Z"
                fill="#CACDD8"
                stroke="#CACDD8"
                stroke-width="0.2"
              />
            </svg>
          </div>

          <span className="flex-1"></span>

          <svg className="hidden md:block" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.9509 1.99153C1.79222 3.1485 1.11831 4.70376 1.06649 6.34035C1.01468 7.97695 1.58886 9.57171 2.67204 10.7997C3.75521 12.0276 5.26585 12.7963 6.89612 12.9492C8.49667 13.0992 10.0943 12.6446 11.3751 11.6767L14.7063 15.0087L14.7063 15.0087C14.7891 15.0915 14.8875 15.1572 14.9957 15.2021C15.104 15.2469 15.22 15.27 15.3371 15.27C15.4543 15.27 15.5703 15.2469 15.6785 15.2021C15.7868 15.1572 15.8851 15.0915 15.9679 15.0087C16.0508 14.9258 16.1165 14.8275 16.1613 14.7192C16.2062 14.611 16.2292 14.495 16.2292 14.3779C16.2292 14.2607 16.2062 14.1447 16.1613 14.0365C16.1165 13.9282 16.0508 13.8299 15.9679 13.747L15.9679 13.747L12.6362 10.4161C13.6015 9.13509 14.0541 7.53858 13.9032 5.93955C13.7495 4.31066 12.981 2.80151 11.7541 1.71913C10.5271 0.636745 8.93391 0.0624375 7.29856 0.113042C5.66321 0.163647 4.10857 0.835356 2.9509 1.99153ZM2.9509 1.99153L3.02156 2.06229L2.9509 1.99153ZM10.7889 3.25378C11.2265 3.68428 11.5745 4.19715 11.8129 4.76281C12.0512 5.32848 12.1752 5.93574 12.1777 6.54956C12.1802 7.16339 12.0612 7.77164 11.8274 8.33923C11.5937 8.90681 11.2499 9.4225 10.8158 9.85654C10.3818 10.2906 9.86608 10.6344 9.29849 10.8682C8.73091 11.1019 8.12266 11.221 7.50883 11.2185C6.895 11.216 6.28774 11.092 5.72208 10.8536C5.15642 10.6152 4.64355 10.2672 4.21305 9.82966C3.35274 8.95522 2.87281 7.77625 2.8778 6.54956C2.8828 5.32288 3.37231 4.14786 4.23972 3.28045C5.10712 2.41304 6.28214 1.92353 7.50883 1.91854C8.73552 1.91354 9.91448 2.39347 10.7889 3.25378Z" fill="black" stroke="black" stroke-width="0.2"/>
          </svg>

          <div className="relative h-[33.75px] w-[36px] flex items-center justify-center">

          <svg className="hidden md:block" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5834 16.8332C12.1359 16.8332 12.6658 16.6137 13.0565 16.223C13.4472 15.8323 13.6667 15.3024 13.6667 14.7498C13.6667 14.1973 13.4472 13.6674 13.0565 13.2767C12.6658 12.886 12.1359 12.6665 11.5834 12.6665C11.0308 12.6665 10.5009 12.886 10.1102 13.2767C9.71951 13.6674 9.50002 14.1973 9.50002 14.7498C9.50002 15.3024 9.71951 15.8323 10.1102 16.223C10.5009 16.6137 11.0308 16.8332 11.5834 16.8332ZM4.29168 16.8332C4.84422 16.8332 5.37412 16.6137 5.76482 16.223C6.15552 15.8323 6.37502 15.3024 6.37502 14.7498C6.37502 14.1973 6.15552 13.6674 5.76482 13.2767C5.37412 12.886 4.84422 12.6665 4.29168 12.6665C3.73915 12.6665 3.20925 12.886 2.81854 13.2767C2.42784 13.6674 2.20835 14.1973 2.20835 14.7498C2.20835 15.3024 2.42784 15.8323 2.81854 16.223C3.20925 16.6137 3.73915 16.8332 4.29168 16.8332ZM17.8729 2.16963C18.133 2.16124 18.3796 2.05204 18.5605 1.86513C18.7415 1.67822 18.8427 1.42824 18.8427 1.16807C18.8427 0.907891 18.7415 0.657915 18.5605 0.471001C18.3796 0.284088 18.133 0.174891 17.8729 0.166504H16.674C15.7344 0.166504 14.9219 0.818587 14.7177 1.73525L13.4125 7.61234C13.2083 8.529 12.3959 9.18109 11.4563 9.18109H3.63127L2.12918 3.17067H11.8636C12.1212 3.15892 12.3643 3.04831 12.5424 2.86187C12.7206 2.67543 12.82 2.42749 12.82 2.16963C12.82 1.91177 12.7206 1.66383 12.5424 1.47739C12.3643 1.29094 12.1212 1.18034 11.8636 1.16859H2.12918C1.82467 1.1685 1.52414 1.23784 1.25045 1.37133C0.976755 1.50483 0.737101 1.69896 0.549702 1.93899C0.362303 2.17901 0.232094 2.4586 0.168974 2.7565C0.105852 3.0544 0.111483 3.36277 0.185434 3.65817L1.68752 9.6665C1.7958 10.1 2.04594 10.4849 2.39815 10.7599C2.75036 11.0349 3.18441 11.1843 3.63127 11.1842H11.4563C12.3679 11.1843 13.2524 10.8735 13.9635 10.3031C14.6747 9.73263 15.17 8.93669 15.3677 8.04671L16.674 2.16963H17.8729Z" fill="black"/>
          </svg>

          <svg className="md:hidden" width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8771 18.2135C13.4786 18.2135 14.0555 17.9746 14.4809 17.5492C14.9062 17.1238 15.1452 16.5469 15.1452 15.9454C15.1452 15.3438 14.9062 14.7669 14.4809 14.3416C14.0555 13.9162 13.4786 13.6772 12.8771 13.6772C12.2755 13.6772 11.6986 13.9162 11.2732 14.3416C10.8479 14.7669 10.6089 15.3438 10.6089 15.9454C10.6089 16.5469 10.8479 17.1238 11.2732 17.5492C11.6986 17.9746 12.2755 18.2135 12.8771 18.2135ZM4.93855 18.2135C5.5401 18.2135 6.11701 17.9746 6.54237 17.5492C6.96773 17.1238 7.2067 16.5469 7.2067 15.9454C7.2067 15.3438 6.96773 14.7669 6.54237 14.3416C6.11701 13.9162 5.5401 13.6772 4.93855 13.6772C4.337 13.6772 3.76009 13.9162 3.33473 14.3416C2.90937 14.7669 2.67041 15.3438 2.67041 15.9454C2.67041 16.5469 2.90937 17.1238 3.33473 17.5492C3.76009 17.9746 4.337 18.2135 4.93855 18.2135ZM19.7246 2.24918C20.0077 2.24005 20.2762 2.12117 20.4732 1.91767C20.6702 1.71418 20.7804 1.44203 20.7804 1.15877C20.7804 0.875515 20.6702 0.603363 20.4732 0.399868C20.2762 0.196374 20.0077 0.0774907 19.7246 0.0683594H18.4193C17.3963 0.0683594 16.5118 0.778289 16.2895 1.77627L14.8685 8.17471C14.6462 9.17269 13.7616 9.88262 12.7387 9.88262H4.21955L2.58422 3.33902H13.1821C13.4626 3.32623 13.7273 3.20581 13.9212 3.00283C14.1151 2.79985 14.2234 2.52992 14.2234 2.24918C14.2234 1.96844 14.1151 1.69851 13.9212 1.49553C13.7273 1.29255 13.4626 1.17213 13.1821 1.15934H2.58422C2.25269 1.15924 1.9255 1.23473 1.62753 1.38007C1.32956 1.5254 1.06864 1.73676 0.86462 1.99808C0.660597 2.25939 0.518837 2.56379 0.450117 2.88811C0.381397 3.21244 0.387527 3.54817 0.468039 3.86977L2.10337 10.4111C2.22126 10.8831 2.49359 11.3021 2.87704 11.6015C3.2605 11.9009 3.73305 12.0635 4.21955 12.0634H12.7387C13.7312 12.0636 14.6942 11.7252 15.4684 11.1041C16.2426 10.4831 16.7819 9.61654 16.9971 8.64762L18.4193 2.24918H19.7246Z" fill="white"/>
          </svg>

                
                <span className="bg-white text-[#0156FF] md:bg-[#0156FF] md:text-white absolute left-6 -top-1 w-[17.42px] h-[17.42px] text-[10px] p-1 rounded-full flex items-center justify-center">2</span>
          </div>

          <div className="rounded-full w-[32px] h-[32px] border-2 border-[#FFFFFF] flex items-center justify-center ">
            <img className="w-[36px] h-[36px] object-contain hidden md:block" src="/assets/profilep.png" alt="" />
              <svg className="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 0C6.79565 0 7.55871 0.31607 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3C9 3.79565 8.68393 4.55871 8.12132 5.12132C7.55871 5.68393 6.79565 6 6 6C5.20435 6 4.44129 5.68393 3.87868 5.12132C3.31607 4.55871 3 3.79565 3 3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.31607 5.20435 0 6 0ZM6 7.5C9.315 7.5 12 8.8425 12 10.5V12H0V10.5C0 8.8425 2.685 7.5 6 7.5Z" fill="white"/>
              </svg>
          </div>
        </div>
      </div>
      <hr className="" />

    </section>
  );
}

export default Navbar;
