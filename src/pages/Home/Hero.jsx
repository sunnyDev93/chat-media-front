import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeroTypingText, ScrollTo } from "../../components";
import { getAuthStatus } from "../../store/auth/selectors";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const Hero = () => {
  const { language } = useLanguage();
  const isAuthenticated = useSelector(getAuthStatus);
  const className =
    "bg-gradient-to-r from-[#BEF264] via-[#84CC16] to-[#16A34A] text-3xl lg:text-5xl font-bold  bg-clip-text text-transparent capitalize";
  const lbg = "./assets/img/design/lbg1.png";
  const rbg = "./assets/img/design/rbg2.png";
  const textArray = translations[language]?.textArray;
  return (
    <section
      className={`pb-5 transition-opacity duration-1000 ease-in-out mb-3 h-screen`}
      // style={{
      //   background: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="absolute top-0 left-0  w-1/2 h-full z-0">
        <img src={lbg} alt="lbg" />
      </div>
      <div className="absolute -top-24 w-1/2 h-full -z-0 right-0">
        <img src={rbg} alt="rbg" />
      </div>
      <div className="max-w-screen-xl px-4 mx-auto text-center mt-32 pt-16 xl:pt-32 sm:pt-40 sm:pb-24 lg:px-12 z-40">
        <div className="h-12 mb-10">
          {textArray && (
            <HeroTypingText textArray={textArray} className={className} />
          )}
        </div>
        <p className="mb-16 text-md font-normal text-[#F3F4F6] lg:text-lg sm:px-16 xl:px-48 animate-float-up">
          {translations[language]?.heroTxt}
        </p>
        <div className="flex flex-col items-center mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {isAuthenticated ? (
            <Link
              to="/chatmedia"
              className="z-40 mb-3 sm:mb-0 shadow-lg shadow-green-500/50 inline-flex items-center justify-center px-5 py-3 text-sm xl:text-base font-medium text-center text-white bg-transparent border border-[#36D45A] rounded-lg hover:font-bold focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              {translations[language]?.heroBtnStarted}
            </Link>
          ) : (
            <Link
              to="/login"
              className="z-40 mb-3 sm:mb-0 shadow-lg shadow-green-500/50 inline-flex items-center justify-center px-5 py-3 text-sm xl:text-base font-medium text-center text-white bg-transparent border border-[#36D45A] rounded-lg hover:font-bold focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              {translations[language]?.heroBtnSignUpFree}
            </Link>
          )}
          <ScrollTo />
        </div>
        <div className="flex items-center justify-center">
          <svg
            width="120"
            height="19"
            viewBox="0 0 120 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_96_5271)">
              <path
                d="M12.714 6.6881H18.284C18.4603 6.68668 18.6326 6.74078 18.7764 6.84273C18.9203 6.94467 19.0284 7.0893 19.0855 7.25612C19.1426 7.42294 19.1457 7.60349 19.0945 7.7722C19.0432 7.9409 18.9402 8.0892 18.8 8.1961L14.202 11.7751L15.995 17.4001C16.0503 17.5718 16.049 17.7567 15.9913 17.9276C15.9336 18.0985 15.8226 18.2464 15.6745 18.3494C15.5265 18.4525 15.3492 18.5052 15.1689 18.4999C14.9886 18.4947 14.8148 18.4316 14.673 18.3201L10.127 14.7881L5.581 18.3211C5.43935 18.4324 5.26568 18.4952 5.08562 18.5002C4.90557 18.5052 4.72866 18.4523 4.581 18.3491C4.43338 18.2455 4.32271 18.0975 4.26514 17.9266C4.20758 17.7557 4.20613 17.5709 4.261 17.3991L6.052 11.7751L1.452 8.1951C1.31321 8.08731 1.21163 7.9388 1.16148 7.77038C1.11133 7.60196 1.11513 7.42207 1.17235 7.25592C1.22958 7.08977 1.33735 6.94568 1.48057 6.84386C1.62379 6.74203 1.79527 6.68757 1.971 6.6881H7.543L9.322 1.0881C9.37648 0.917375 9.48383 0.768397 9.62853 0.662684C9.77324 0.556972 9.9478 0.5 10.127 0.5C10.3062 0.5 10.4808 0.556972 10.6255 0.662684C10.7702 0.768397 10.8775 0.917375 10.932 1.0881L12.714 6.6881Z"
                fill="#00E878"
              />
            </g>
            <g clipPath="url(#clip1_96_5271)">
              <path
                d="M37.714 6.6881H43.284C43.4603 6.68668 43.6326 6.74078 43.7764 6.84273C43.9203 6.94467 44.0284 7.0893 44.0855 7.25612C44.1426 7.42294 44.1457 7.60349 44.0945 7.7722C44.0432 7.9409 43.9402 8.0892 43.8 8.1961L39.202 11.7751L40.995 17.4001C41.0503 17.5718 41.049 17.7567 40.9913 17.9276C40.9336 18.0985 40.8226 18.2464 40.6745 18.3494C40.5265 18.4525 40.3492 18.5052 40.1689 18.4999C39.9886 18.4947 39.8148 18.4316 39.673 18.3201L35.127 14.7881L30.581 18.3211C30.4394 18.4324 30.2657 18.4952 30.0856 18.5002C29.9056 18.5052 29.7287 18.4523 29.581 18.3491C29.4334 18.2455 29.3227 18.0975 29.2651 17.9266C29.2076 17.7557 29.2061 17.5709 29.261 17.3991L31.052 11.7751L26.452 8.1951C26.3132 8.08731 26.2116 7.9388 26.1615 7.77038C26.1113 7.60196 26.1151 7.42207 26.1724 7.25592C26.2296 7.08977 26.3373 6.94568 26.4806 6.84386C26.6238 6.74203 26.7953 6.68757 26.971 6.6881H32.543L34.322 1.0881C34.3765 0.917375 34.4838 0.768397 34.6285 0.662684C34.7732 0.556972 34.9478 0.5 35.127 0.5C35.3062 0.5 35.4808 0.556972 35.6255 0.662684C35.7702 0.768397 35.8775 0.917375 35.932 1.0881L37.714 6.6881Z"
                fill="#00E878"
              />
            </g>
            <g clipPath="url(#clip2_96_5271)">
              <path
                d="M62.714 6.6881H68.284C68.4603 6.68668 68.6326 6.74078 68.7764 6.84273C68.9203 6.94467 69.0284 7.0893 69.0855 7.25612C69.1426 7.42294 69.1457 7.60349 69.0945 7.7722C69.0432 7.9409 68.9402 8.0892 68.8 8.1961L64.202 11.7751L65.995 17.4001C66.0503 17.5718 66.049 17.7567 65.9913 17.9276C65.9336 18.0985 65.8226 18.2464 65.6745 18.3494C65.5265 18.4525 65.3492 18.5052 65.1689 18.4999C64.9886 18.4947 64.8148 18.4316 64.673 18.3201L60.127 14.7881L55.581 18.3211C55.4394 18.4324 55.2657 18.4952 55.0856 18.5002C54.9056 18.5052 54.7287 18.4523 54.581 18.3491C54.4334 18.2455 54.3227 18.0975 54.2651 17.9266C54.2076 17.7557 54.2061 17.5709 54.261 17.3991L56.052 11.7751L51.452 8.1951C51.3132 8.08731 51.2116 7.9388 51.1615 7.77038C51.1113 7.60196 51.1151 7.42207 51.1724 7.25592C51.2296 7.08977 51.3373 6.94568 51.4806 6.84386C51.6238 6.74203 51.7953 6.68757 51.971 6.6881H57.543L59.322 1.0881C59.3765 0.917375 59.4838 0.768397 59.6285 0.662684C59.7732 0.556972 59.9478 0.5 60.127 0.5C60.3062 0.5 60.4808 0.556972 60.6255 0.662684C60.7702 0.768397 60.8775 0.917375 60.932 1.0881L62.714 6.6881Z"
                fill="#00E878"
              />
            </g>
            <g clipPath="url(#clip3_96_5271)">
              <path
                d="M87.714 6.6881H93.284C93.4603 6.68668 93.6326 6.74078 93.7764 6.84273C93.9203 6.94467 94.0284 7.0893 94.0855 7.25612C94.1426 7.42294 94.1457 7.60349 94.0945 7.7722C94.0432 7.9409 93.9402 8.0892 93.8 8.1961L89.202 11.7751L90.995 17.4001C91.0503 17.5718 91.049 17.7567 90.9913 17.9276C90.9336 18.0985 90.8226 18.2464 90.6745 18.3494C90.5265 18.4525 90.3492 18.5052 90.1689 18.4999C89.9886 18.4947 89.8148 18.4316 89.673 18.3201L85.127 14.7881L80.581 18.3211C80.4394 18.4324 80.2657 18.4952 80.0856 18.5002C79.9056 18.5052 79.7287 18.4523 79.581 18.3491C79.4334 18.2455 79.3227 18.0975 79.2651 17.9266C79.2076 17.7557 79.2061 17.5709 79.261 17.3991L81.052 11.7751L76.452 8.1951C76.3132 8.08731 76.2116 7.9388 76.1615 7.77038C76.1113 7.60196 76.1151 7.42207 76.1724 7.25592C76.2296 7.08977 76.3373 6.94568 76.4806 6.84386C76.6238 6.74203 76.7953 6.68757 76.971 6.6881H82.543L84.322 1.0881C84.3765 0.917375 84.4838 0.768397 84.6285 0.662684C84.7732 0.556972 84.9478 0.5 85.127 0.5C85.3062 0.5 85.4808 0.556972 85.6255 0.662684C85.7702 0.768397 85.8775 0.917375 85.932 1.0881L87.714 6.6881Z"
                fill="#00E878"
              />
            </g>
            <g clipPath="url(#clip4_96_5271)">
              <path
                d="M109.321 1.088C109.375 0.917298 109.483 0.76834 109.628 0.662646C109.772 0.556952 109.947 0.499994 110.126 0.5V14.788L105.58 18.32C105.438 18.4313 105.265 18.4941 105.085 18.4991C104.905 18.5041 104.728 18.4512 104.58 18.348C104.432 18.2444 104.322 18.0964 104.264 17.9255C104.207 17.7546 104.205 17.5698 104.26 17.398L106.052 11.774L101.452 8.194C101.313 8.08634 101.212 7.93805 101.162 7.76987C101.111 7.60169 101.115 7.42203 101.172 7.256C101.289 6.916 101.609 6.655 101.97 6.655H107.542L109.321 1.088Z"
                fill="#00E878"
              />
              <path
                opacity="0.4"
                d="M110.931 1.08784C110.874 0.912867 110.761 0.761117 110.611 0.655171C110.46 0.549224 110.279 0.494745 110.095 0.499839V14.7878L114.672 18.3208C114.814 18.4326 114.988 18.4957 115.168 18.501C115.349 18.5063 115.526 18.4535 115.674 18.3503C115.822 18.247 115.934 18.099 115.991 17.9278C116.049 17.7567 116.05 17.5716 115.994 17.3998L114.2 11.7748L118.798 8.19484C118.937 8.08724 119.038 7.93906 119.089 7.77093C119.14 7.6028 119.136 7.4231 119.08 7.25684C118.964 6.91684 118.644 6.65584 118.281 6.65584H112.71L110.931 1.08784Z"
                fill="#00E878"
              />
            </g>
            <defs>
              <clipPath id="clip0_96_5271">
                <rect
                  width="19"
                  height="18"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
              <clipPath id="clip1_96_5271">
                <rect
                  width="19"
                  height="18"
                  fill="white"
                  transform="translate(25.5 0.5)"
                />
              </clipPath>
              <clipPath id="clip2_96_5271">
                <rect
                  width="19"
                  height="18"
                  fill="white"
                  transform="translate(50.5 0.5)"
                />
              </clipPath>
              <clipPath id="clip3_96_5271">
                <rect
                  width="19"
                  height="18"
                  fill="white"
                  transform="translate(75.5 0.5)"
                />
              </clipPath>
              <clipPath id="clip4_96_5271">
                <rect
                  width="19"
                  height="18"
                  fill="white"
                  transform="translate(100.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="text-white mx-2">
            {translations[language]?.heroReviewTxt}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
