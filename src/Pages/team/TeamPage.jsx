import pic from "./teamImages/groupic.png";
import pro1 from "./teamImages/photo1.png";  
import pro2 from "./teamImages/pro2.png";
import pro3 from "./teamImages/pro3.png";
import pro4 from "./teamImages/amar.png";
import pro5 from "./teamImages/goyal.png";
import pro6 from "./teamImages/pallavi.png";
import pro7 from "./teamImages/kunal.png";
import pro8 from "./teamImages/rachna.png";
import pro9 from "./teamImages/sumit.png";
import pro10 from "./teamImages/ex1.png";
import pro11 from "./teamImages/ex2.png";
import pro12 from "./teamImages/ex3.png";
import pro13 from "./teamImages/ex4.png";
import pro14 from "./teamImages/ex5.png";
import pro15 from "./teamImages/ex6.png";
import pro16 from "./teamImages/ex7.png";
import pro17 from "./teamImages/ex8.png";
import pro18 from "./teamImages/ex9.png";
import pro19 from "./teamImages/ex10.png";
import pro20 from "./teamImages/ex11.png";
import pro21 from "./teamImages/ex12.png";
import pro22 from "./teamImages/ex13.png";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

<script src="https://cdn.tailwindcss.com"></script>;

function TeamPage() {
  return (
    <div className="bg-[#0D1117] py-10">
      <div className="flex justify-center max-[700px]:mx-[2vh]">
        <section className="inline-block">
          <h2 className="text-[#BCD1D9] font-bold text-4xl ml-2">Meet Us,</h2>
          <img
            className="h-[50vh] mt-[3vh] mb-[2vh] max-[700px]:h-[50vw]      "
            src={pic}
            alt="#"
          />
          <div className="flex justify-center flex-col ">
            <p
              style={{ whiteSpace: "pre-line" }}
              className="text-[#BCD1D9]  ml-2 max-[700px]:text-sm"
            >
              Meet the driving force behind our Computer Sci Society, where
              innovation meets.
            </p>
            <p className="text-[#BCD1D9] ml-2 max-[700px]:text-sm">
              leadership. Our dedicated council team, alongside our esteemed
              head teachers, works tirelessly
            </p>
            <p className="text-[#BCD1D9] ml-2 max-[700px]:text-sm">
              to cultivate an environment of excellence and collaboration. Each
              member contributes a unique
            </p>
            <p className="text-[#BCD1D9] ml-2 max-[700px]:text-sm">
              blend of expertise, passion, and vision, steering our department
              towards new horizons.
            </p>

            <p className="text-[#BCD1D9] mt-[2vh] ml-2 max-[700px]:text-sm">
              Together, we are not just shaping the future of technology; we are
              fostering a community.
            </p>

            <p className="text-[#BCD1D9] ml-2 max-[700px]:text-sm">
              {" "}
              where every idea has the power to thrive
            </p>
          </div>
        </section>
      </div>

      <div className="flex justify-center   mt-8">
        {/* teacher section */}

        <section className="  w-[700px]  border-t-2 border-b-2 border-solid border-[#002A42] mb-3  ">
          <h2 className="text-[#BCD1D9] flex text-4xl justify-center py-3 mb-7 mt-6 font-medium">
            Teachers
          </h2>

          {/*  profile cards */}

          <div className="grid grid-cols-2 mb-6  max-[619px]:flex-wrap max-[619px]:flex max-[368px]:justify-center">
            {/* 1 anuja */}
            <div className="pr-[4vw] pl-7">
              <img
                className="w-[120px] mr-5 float-left z-1000 max-[620px]:ml-3"
                src={pro1}
              />
              <div className=" mt-[23px] ml-2">
                <span className="bg-[#62C6FF] text-black text-sm rounded font-bold rounded-l-xl   block mb-[0.6vh] p-2 pl-[1vh]  pr-4 max-[620px]:bg-[#0D1117] max-[620px]:text-lg max-[620px]:text-white  ">
                  {" "}
                  Dr. Anuja Soni
                </span>
                <span className="bg-transparent border border-solid rounded border-slate-100 rounded-l-xl text-xs   text-[#BCD1D9] block p-2 pl-[4vw]  px-3 max-[620px]:rounded-xl max-[620px]:bg-[#62C6FF] max-[620px]:text-black max-[620px]:font-bold ">
                  Teacher in Charge{" "}
                </span>
              </div>
            </div>

            {/* Rajni bala */}

            <div className="pr-[4vw] pl-7 max-[419px]:mt-8">
              <img
                className="w-[120px] mr-5 float-left z-1000 border-2  border-solid border-slate-100 rounded-full max-[620px]:ml-3"
                src={pro2}
              />
              <div className=" mt-[23px] ml-2">
                <span className="bg-[#62C6FF] text-black text-sm rounded font-bold rounded-l-xl  block mb-[0.6vh] p-2 pl-[1vh]  pr-4  max-[620px]:bg-[#0D1117] max-[620px]:text-lg max-[620px]:text-white ">
                  {" "}
                  Dr. Rajni Bala
                </span>
                <span className="bg-transparent border border-solid rounded border-slate-100 rounded-l-xl text-xs  text-[#BCD1D9] block p-2 pl-[4vw]  px-3 max-[620px]:rounded-xl max-[620px]:bg-[#62C6FF] max-[620px]:text-black max-[620px]:font-bold">
                  {" "}
                  Web Administrator{" "}
                </span>
              </div>
            </div>

            {/* sanjeet sir */}

            <div className="pr-[4vw] pl-7 mt-8">
              <img
                className="w-[120px] mr-5 float-left z-1000 border-2  border-solid border-slate-100 rounded-full max-[620px]:ml-3"
                src={pro3}
              />
              <div className=" mt-[23px] ml-2">
                <span className="bg-[#62C6FF] text-black text-sm rounded font-bold rounded-l-xl  block mb-[0.6vh] p-2 pl-[1vh]  pr-4  max-[620px]:bg-[#0D1117] max-[620px]:text-lg max-[620px]:text-white ">
                  {" "}
                  Sanjeet Kumar
                </span>
                <span className="bg-transparent border border-solid rounded border-slate-100 rounded-l-xl text-xs  text-[#BCD1D9] block p-2 pl-[4vw]  px-3 max-[620px]:rounded-xl max-[620px]:bg-[#62C6FF] max-[620px]:text-black max-[620px]:font-bold">
                  {" "}
                  Website Coordinator{" "}
                </span>
              </div>
            </div>
          </div>
          {/* grid end div */}
        </section>
      </div>

      {/* Council (2023-24) */}

      <section className="flex justify-center mt-6">
        <main className="w-[700px] ">
          <h2 className="text-[#BCD1D9] flex text-4xl justify-center py-3 mb-9 mt-6 font-semibold ">
            Council 2023-24
          </h2>
          <h3 className="text-[#BCD1D9] font-bold text-lg max-[700px]:ml-5">
            Presidents
          </h3>

          <>
            <section className="mt-7  grid grid-cols-3 gap-7 mb-7 max-[619px]:flex max-[619px]:flex-wrap max-[354px]:justify-center ">
              {/* amar */}
              <div className="w-[124px]  ml-10">
                {/* profile -- amar */}
                <img src={pro4} className="w-[110px] " />

                <span className=" font-inter  text-white mt-4 text-lg font-semibold">
                  Amarjeet Jena
                </span>

                <div className="flex justify-center   mt-1 ">
                  <span className="flex bg-[#62C6FF] text-black font-bold rounded-sm p-1 px-5 justify-center w-[155px]  ">
                    President
                  </span>
                </div>

                <div className="flex justify-center">
                  <svg
                    className="w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                    <path
                      d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                      fill="#0A66C2"
                    />
                  </svg>
                </div>

                <svg
                  className="w-[16px] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                    fill="#6EBF63"
                  />
                </svg>
                <span className=" font-inter  text-white text-sm">
                  +91 9182508492
                </span>
              </div>

              {/* --- goyal  */}

              <div className="w-[126px] ml-10">
                {/* profile -- goyal */}
                <img src={pro5} className="w-[110px]" />

                <span className=" font-inter  text-white mt-4 text-lg font-semibold">
                  Amarjeet Jena
                </span>

                <div className="flex justify-center   mt-1 ">
                  <span className="flex bg-[#62C6FF] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                    Vice President
                  </span>
                </div>

                <div className="flex justify-center">
                  <svg
                    className="w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                    <path
                      d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                      fill="#0A66C2"
                    />
                  </svg>
                </div>

                <svg
                  className="w-[16px] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                    fill="#6EBF63"
                  />
                </svg>
                <span className=" font-inter  text-white text-sm">
                  +91 8950992298
                </span>
              </div>

              {/* pallavi */}

              <div className="w-[149px] ml-10">
                {/* profile -- pallavi */}
                <img src={pro6} className="w-[110px] ml-4" />

                <span className=" font-inter  text-white mt-4 text-md font-semibold">
                  Pallavi Raghuvanshi
                </span>

                <div className="flex justify-center   mt-1 ">
                  <span className="flex bg-[#62C6FF] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[135px]">
                    Vice President
                  </span>
                </div>

                <div className="flex justify-center">
                  <svg
                    className="w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                    <path
                      d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                      fill="#0A66C2"
                    />
                  </svg>
                </div>

                <svg
                  className="w-[16px] inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                    fill="#6EBF63"
                  />
                </svg>
                <span className=" font-inter  text-white text-sm">
                  +91 6362374373
                </span>
              </div>
            </section>
          </>
        </main>
      </section>

      {/* Secretory and treasurer */}

      <section className="flex justify-center mt-6 mb-6 ">
        <main className="w-[700px] border-t-2 border-b-2 border-solid border-[#002A42]">
          <h3 className="text-[#BCD1D9] font-bold text-lg mt-4 max-[700px]:ml-5 ">
            Secretory and treasurer
          </h3>

          <section className="mt-7  grid grid-cols-3 gap-5 mb-7   max-[619px]:flex max-[619px]:flex-wrap max-[354px]:justify-center">
            <div className="w-[130px] ml-10">
              {/* profile -- Kunal */}

              <img src={pro7} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">
                Kunal Sharma
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#A3FD9B] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  General Secretory
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 7011743227
              </span>
            </div>

            <div className="w-[124px] ml-10">
              {/* profile -- Rachna Lamba */}

              <img src={pro8} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white  mt-4 text-base ml-2 font-semibold">
                Rachna Lamba
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#A3FD9B] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  joint Secretory
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9350277190
              </span>
            </div>

            {/*  */}

            <div className="w-[134px] ml-10">
              {/* profile -- sumit */}

              <img src={pro9} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">
                Sumit Gupta
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#A3FD9B] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  General Secretory
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9182508492
              </span>
            </div>
          </section>
        </main>
      </section>

      {/*   excutives */}

      <section className="flex justify-center mt-6 mb-6 ">
        <main className="w-[700px]  border-b-2 border-solid border-[#002A42]">
          <h3 className="text-[#BCD1D9] font-bold text-lg max-[700px]:ml-5">
            Executives
          </h3>

          <section className="mt-7  grid grid-cols-3 gap-7 mb-8  max-[619px]:flex max-[619px]:flex-wrap max-[454px]:justify-center">
            {/* pro - 1 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Manjeet Singh */}

              <img src={pro10} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">
                Manjeet Singh
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 8826924711
              </span>
            </div>

            {/* pro - 2*/}
            <div className="w-[134px] ml-10">
              {/* profile -- Ajit Singh */}

              <img src={pro11} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-6 font-semibold">
                Ajit Singh
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9354767673
              </span>
            </div>

            {/* pro - 3 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Yatharth Choudhary */}

              <img src={pro12} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-6 text-lg ml-6 font-semibold">
                Yatharth
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9458078972
              </span>
            </div>

            {/* pro - 4 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Chanchal */}

              <img src={pro13} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-6 font-semibold">
                Chanchal
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 8766381640
              </span>
            </div>

            {/* pro - 5 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Adarsh Singh */}

              <img src={pro14} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">
                Adarsh Singh
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9079876846
              </span>
            </div>

            {/* pro - 6 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Gaurav Yadav */}

              <img src={pro15} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">
                Gaurav Yadav
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9625294618
              </span>
            </div>

            {/* pro - 7 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Mukul Dhasmana */}

              <img src={pro16} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-base ml-2 font-semibold">
                Mukul Dhasmana
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9711086558
              </span>
            </div>

            {/* pro - 8 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Lalit Sain */}

              <img src={pro17} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-5 font-semibold">
                Lalit Sain
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 8860793434
              </span>
            </div>

            {/* pro - 9 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Alok Raj */}

              <img src={pro18} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-6 font-semibold">
                Alok Raj
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#00AEA4] text-black text-sm font-bold rounded-sm p-1  px-2 justify-center w-[155px]">
                  Executive
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9528117791
              </span>
            </div>
          </section>
        </main>
      </section>

      {/* end of excutives */}

      {/*  */}

      {/* PR team */}

      {/*  */}

      <section className="flex justify-center mt-6 mb-6 ">
        <main className="w-[700px]  border-b-2 border-solid border-[#002A42]">
          <h3 className="text-[#BCD1D9] font-bold text-lg max-[700px]:ml-5">
            Public Relation Heads
          </h3>

          <section className="mt-7  grid grid-cols-2 gap-7 mb-8  max-[300px]:flex max-[300px]:flex-wrap max-[354px]:justify-center">
            {/* pro - 1 */}
            <div className="w-[134px] ml-10">
              {/* profile -- Vishal Prasad */}

              <img src={pro19} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">
                Vishal Prasad
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#4C63D2] text-white text-sm font-semibold rounded-sm p-1  px-2 justify-center w-[155px]">
                  PR Head
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9315629821
              </span>
            </div>

            {/* pro - 1 */}
            <div className="w-[134px] ml-10">
              {/* profile --  Garima Srivastava */}

              <img src={pro20} className="w-[110px] ml-2" />

              {/* <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">Garima Srivastava</span> */}
              <span className=" font-inter  text-white mt-4 text-md font-semibold">
                Garima Srivastava
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#4C63D2] text-white text-sm font-semibold rounded-sm p-1  px-2 justify-center w-[155px]">
                  PR Head
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 8303579298
              </span>
            </div>
          </section>
        </main>
      </section>

      {/* *************  graphic team   ******* */}

      <section className="flex justify-center mt-6 mb-6 max-[354px]:justify-center ">
        <main className="w-[700px]  border-b-2 border-solid border-[#002A42]">
          <h3 className="text-[#BCD1D9] font-bold text-lg max-[700px]:ml-5">
            Graphics and Content Head
          </h3>

          <section className="mt-7  grid grid-cols-2 gap-6 mb-8 ">
            {/* pro - 1 */}
            <div className="w-[134px] ml-8">
              {/* profile -- Somya Srivastava */}

              <img src={pro21} className="w-[110px] ml-2" />

              <span className=" font-inter  text-white mt-4 text-sm ml-2 font-semibold">
                Somya Srivastava
              </span>

              <div className="flex justify-center   mt-1 ">
                <span className="flex bg-[#9747FF] text-white text-sm font-semibold rounded-sm p-1  px-2 justify-center w-[155px]">
                  PR Head
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 8887728062
              </span>
            </div>

            {/* pro - 1 */}
            <div className="w-[144px] ml-10">
              {/* profile --  Garima Srivastava */}

              <img src={pro22} className="w-[110px] ml-2" />

              {/* <span className=" font-inter  text-white mt-4 text-lg ml-2 font-semibold">Garima Srivastava</span> */}
              <span className=" font-inter  text-white mt-4 text-sm font-semibold">
                Anirban Bhattacharjee
              </span>

              <div className="flex justify-center   mt-2  ">
                <span className="flex bg-[#9747FF] text-white text-sm font-semibold rounded-sm p-1  px-2 justify-center w-[155px]">
                  PR Head
                </span>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                  <path
                    d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                    fill="#0A66C2"
                  />
                </svg>
              </div>

              <svg
                className="w-[16px] inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <path
                  d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                  fill="#6EBF63"
                />
              </svg>
              <span className=" font-inter  text-white text-sm">
                +91 9625739718
              </span>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default TeamPage;
