// import React, { useEffect, useMemo, useState } from "react";
// import { CarouselItem } from "../../components";
// import CarouselBtn from "./../../components/CarouselBtn";

// const Feedback = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const carouselData = useMemo(
//     () => [
//       {
//         content: `"Flowbite is just awesome. It contains tons of predesigned
//             components and pages starting from login screen to complex
//             dashboard. Perfect choice for your next SaaS application."`,
//         avtar: `./asset/img/avatar/1.png`,
//         name: `Micheal Gough`,
//         job: `CEO at Google`,
//       },
//       {
//         content: `"Flowbite is just awesome. It contains tons of predesigned
//             components and pages starting from login screen to complex
//             dashboard. Perfect choice for your next SaaS application."`,
//         avtar: `./asset/img/avatar/1.png`,
//         name: `Micheal Gough`,
//         job: `CEO at Google`,
//       },
//       {
//         content: `"Flowbite is just awesome. It contains tons of predesigned
//             components and pages starting from login screen to complex
//             dashboard. Perfect choice for your next SaaS application."`,
//         avtar: `./asset/img/avatar/1.png`,
//         name: `Micheal Gough`,
//         job: `CEO at Google`,
//       },
//     ],
//     []
//   );

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Function to handle the previous carousel item
//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     // Ensure that the activeIndex is within bounds
//     setActiveIndex(0);
//   }, []);
//   return (
//     <div>
//       <div
//         id="default-carousel"
//         className="relative w-full pt-10 bg-black"
//         data-carousel="slide"
//       >
//         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//           {carouselData.map((item, index) => (
//             <div
//               className={`${
//                 index === activeIndex ? "" : "hidden"
//               } duration-700 ease-in-out`}
//               data-carousel-item
//               key={`item ${index}`}
//             >
//               <CarouselItem {...item} />
//             </div>
//           ))}
//         </div>
//         <div className="absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-7 sm:bottom-5 left-1/2">
//           <CarouselBtn
//             carouselData={carouselData}
//             onNext={handleNext}
//             onPrev={handlePrev}
//           />
//         </div>
//         <button
//           type="button"
//           className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-prev
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>
//         <button
//           type="button"
//           className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-next
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
