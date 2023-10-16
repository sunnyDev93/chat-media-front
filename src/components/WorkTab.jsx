import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "./Collapse";
import TypingText from "./TypingText";

const WorkTab = () => {
  const [firstTab, setFirstTab] = useState("first");
  const [secondTab, setSecondTab] = useState("");
  const [thirdTab, setThirdTab] = useState("");
  const [script, setScript] = useState("");

  const text =
    "Sono le 6 di mattina, suona la sveglia, riavvio la sveglia, dopo poco risuona la sveglia, riavvio la sveglia, rirrisuona la sveglia, picchio il cellulare, mi faccio male alla mano e mi alzo incazzato, capisco anche che odio tutti e vorrei morire all'istante, all'improvviso sono pervaso dal senso di colpa di non aver fatto assolutamente nulla il giorno prima e anche perché qualsiasi cosa abbia fatto il giorno prima avrei comunque potuto studiare di più, mentre faccio colazione mi cadono i cereali per terra, sporco di latte il pijama, mi cadono i biscotti del latte, il mondo fa schifo e sono irritato, arrivo a scuola, tutta la mattina studio, rifasso, copio e chiedo ai miei compagni informazioni sui compiti che non avevo fatto perché ho dormito invece di fare i compiti, arrivo a casa sudato marcio, mi levo le 8 felpe che avevo e mangio fino a stare male, mi sento in colpa perché ho mangiato tantissimo, sono grasso, devo studiare, nessuno mi vuole, la mia vita non ha senso, sono le 15, mi siedo sul divano e sono le 15.30, mi chiedo com'è possibile che il tempo passi così in fretta e sono le 16, penso ah dai vabbè inizierò a studiare alle 16.30, ma alle 16.31 penso che ormai è passato troppo tempo e che studierò alle 17, mi giustifico pensando che tanto non ho fatto nulla finora e non ha senso iniziare adesso, vado a dormire, non ho fatto nulla, la mia vita fa schifo, fine. Sottotitoli creati dalla comunità Amara.org";
  const firstTabClk = () => {
    setFirstTab("fist");
    setSecondTab("");
    setThirdTab("");
  };
  const secondTabClk = () => {
    setFirstTab("");
    setSecondTab("second");
    setThirdTab("");
  };
  const thirdTabClk = () => {
    setFirstTab("");
    setSecondTab("");
    setThirdTab("third");
  };
  const lbg = "./assets/img/design/tab.png";
  return (
    <>
      <div className=" md:block relative">
        {/* <div className="mb-4 sm:border-none border-b border-gray-200 flex justify-center w-1/2 mx-auto">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            role="tablist"
          >
            <li className="mr-2 font-bold text-lg" role="presentation">
              <button
                className={`inline-block p-4 rounded-t-lg px-7 text-white ${
                  firstTab
                    ? "border-b-2 border-[#36D45A] opacity-75 bg-gradient-to-t from-green-800 via-gray-950 to-black"
                    : ""
                }`}
                type="button"
                onClick={firstTabClk}
              >
                Audio Files
              </button>
            </li>
            <li className="mr-2 font-bold text-lg" role="presentation">
              <button
                className={`inline-block p-4 px-6 rounded-t-lg text-white ${
                  secondTab
                    ? "border-b-2 border-[#36D45A] bg-gradient-to-t from-green-800 via-gray-950 to-black"
                    : ""
                }`}
                type="button"
                onClick={secondTabClk}
              >
                Live Streaming
              </button>
            </li>
            <li className="mr-2 font-bold text-lg" role="presentation">
              <button
                className={`inline-block p-4 px-5 rounded-t-lg text-white ${
                  thirdTab
                    ? "border-b-2 opacity-50 border-[#36D45A] bg-gradient-to-t from-green-800 via-gray-900 to-black"
                    : ""
                }`}
                type="button"
                onClick={thirdTabClk}
              >
                Audio Intelligence
              </button>
            </li>
          </ul>
        </div> */}
        <div className="flex mx-auto">
          {firstTab ? (
            <div
              className="rounded-lg dark:bg-[#101014] w-8/12 mx-auto"
              aria-labelledby="profile-tab"
              role="tabpanel"
            >
              <section className="">
                <div className="py-8 px-0 md:px-4 mx-auto max-w-screen-xl lg:py-16">
                  <div className="grid xl:grid-cols-2 gap-8">
                    <div className="bg-[#FFFFFF0D] border border-[#4E4E52] rounded-lg p-4 md:p-8 xl:p-12 relative">
                      <div className="absolute top-0 left-1/2">
                        <img
                          src={lbg}
                          alt="bg"
                          className="flex rounded-full mx-auto"
                        />
                      </div>
                      <h2 className="text-white text-lg md:text-xl xl:text-3xl font-bold mb-5">
                        Step 1:
                        <span className="font-normal text-lg md:text-xl">
                          {" "}
                          Upload Audio
                        </span>
                      </h2>
                      <div className="flex items-center justify-between my-5">
                        <div className="flex bg-[#FFFFFF17] rounded-md py-2 px-4 md:w-2/3 items-center">
                          <span
                            display="inline-flex"
                            className="Text-sc-15gs1pn-0 iBZcQL"
                          >
                            <svg
                              className="h-6 w-6"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipath="url(#clip0_200_492)">
                                <path
                                  d="M15.7657 0.5H5.22197C5.03541 0.5 4.85667 0.574156 4.72486 0.706016L0.206016 5.22467C0.0741581 5.35651 5.52648e-05 5.53532 0 5.72178V22.2907C0 23.5088 0.991172 24.5 2.20936 24.5H15.7657C16.9805 24.5 17.9751 23.5178 17.9751 22.2906V2.70936C17.9751 1.49464 16.9929 0.5 15.7657 0.5Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.46887 5.77198C4.91161 5.77198 5.27198 5.41161 5.27198 4.96887V0.5H5.22183C5.03535 0.500043 4.85652 0.574147 4.72467 0.706016L0.206016 5.22467C0.0741581 5.35651 5.52648e-05 5.53532 0 5.72178V5.77194L4.46887 5.77198Z"
                                  fill="#16A34A"
                                />
                                <path
                                  d="M8.59878 9.61179C8.48199 9.55341 8.35125 9.52871 8.22121 9.54045C8.09116 9.55219 7.96696 9.59991 7.86251 9.67826L5.03764 11.797H3.76573C2.96262 11.797 2.30933 12.4503 2.30933 13.2532V15.1361C2.30933 15.939 2.96262 16.5923 3.76573 16.5923H5.07017L7.91178 18.3683C8.02354 18.4381 8.15267 18.4751 8.28444 18.475C8.47091 18.475 8.64975 18.4009 8.78161 18.2691C8.91347 18.1372 8.98755 17.9584 8.98756 17.7719V10.2407C8.98756 9.97427 8.837 9.73099 8.59878 9.61179Z"
                                  fill="#232524"
                                />
                                <path
                                  d="M11.5652 8.97829C11.2839 9.24618 11.2731 9.69112 11.5408 9.97237C13.695 12.2345 13.695 15.7781 11.5408 18.04C11.2731 18.3213 11.2839 18.7662 11.5652 19.0341C11.6957 19.1588 11.8694 19.2283 12.05 19.228C12.2357 19.228 12.421 19.1549 12.5592 19.0099C15.2315 16.2042 15.2315 11.8084 12.5592 9.00266C12.2913 8.72141 11.8462 8.71063 11.5652 8.97829Z"
                                  fill="#16A34A"
                                />
                                <path
                                  d="M11.1067 11.4329C11.0993 11.423 11.0917 11.4133 11.0838 11.404C11.0838 11.4038 11.0836 11.4038 11.0836 11.4036C11.0834 11.4036 11.0834 11.4034 11.0834 11.4034C11.0175 11.3244 10.9349 11.2608 10.8417 11.2172C10.7485 11.1736 10.6468 11.151 10.5438 11.1511C10.1554 11.1511 9.8407 11.466 9.8407 11.8542C9.8407 12.0095 9.89212 12.1587 9.98404 12.2798C10.7447 13.2967 10.7445 14.7153 9.98404 15.7324C9.89107 15.8547 9.84072 16.0041 9.8407 16.1577C9.8407 16.5461 10.1554 16.8609 10.5438 16.8609C10.7615 16.8609 10.9563 16.762 11.0852 16.6063C11.0854 16.6062 11.0856 16.6062 11.0856 16.606L11.0858 16.6058C11.0929 16.5972 11.0999 16.5882 11.1067 16.5792C11.6679 15.8311 11.9643 14.9414 11.9643 14.0061C11.9643 13.0709 11.6679 12.1811 11.1067 11.4329Z"
                                  fill="#16A34A"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_200_492">
                                  <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <p className="text-white text-sm md:text-md">
                            <strong>Cat Walk</strong>
                            <span className="hidden">
                              {" "}
                              : First ever cat walk witness
                            </span>
                          </p>
                        </div>
                        <button
                          className="mx-1 z-40 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-[#A6F545] to-[#89D32D] group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white shadow-md shadow-[#16A34A]"
                          onClick={() => {
                            setScript(text);
                          }}
                        >
                          <span className="text-sm md:text-md relative px-2 md:px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                            Run Demo
                          </span>
                        </button>
                      </div>
                      <div className="my-5">
                        <audio controls className="w-full">
                          <source
                            src="./assets/audio/2.mp3"
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                      <p className="text-sm md:text-md font-normal text-gray-400 mb-4">
                        Get conversational intelligence with transcription and
                        understanding on the world's best speech AI platform.
                      </p>
                    </div>
                    <div className="bg-[#FFFFFF0D] border border-[#4E4E52] rounded-lg p-4 md:p-8 xl:p-12">
                      <h2 className="text-white text-lg md:text-xl xl:text-3xl font-bold mb-5">
                        Step 2:{" "}
                        <span className="text-lg md:text-xl text-white font-normal">
                          Get the Transcription
                        </span>
                      </h2>
                      <div className="bg-[#1E2C3C4F] max-h-full rounded-md relative">
                        <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-1/2 flex transform translate-x-1/2 absolute top-0 "></div>
                        <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-1/2 flex transform translate-x-1/2 absolute bottom-0"></div>
                        {script ? (
                          <TypingText
                            orgText={script}
                            spd={10}
                            className="text-white p-3 xl:p-5"
                          />
                        ) : (
                          <p className="p-5 text-[#E1E1E5] text-sm md:text-md">
                            The response will show here
                          </p>
                        )}
                      </div>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            ""
          )}
          {secondTab ? (
            <div
              className="rounded-lg w-8/12 mx-auto"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#101014] rounded-lg p-8 md:p-12 ">
                      <h2 className="text-white text-3xl font-bold mb-5 text-center">
                        Give it a try.
                      </h2>
                      <p className="text-center text-gray-300">
                        Click the mic to transcribe live in English or select
                      </p>
                      <p className="text-center text-gray-300">
                        another language.
                      </p>

                      <div className="items-center justify-between my-5 mx-auto relative bg-transparent">
                        <button className="flex mx-auto items-center justify-center p-0.5 overflow-hidden text-sm font-medium h-4/12 w-4/12  text-white">
                          <img
                            src="./assets/img/record.svg"
                            alt="recorder"
                            className="bg-[#101014] border border-gray-700 rounded-full"
                          />
                        </button>
                        <label
                          htmlFor="large"
                          className="block mb-2 text-base font-medium text-white"
                        >
                          Large select
                        </label>
                        <select
                          id="large"
                          className="block w-full px-4 py-3 text-base border rounded-lg focus:ring-gray-600 focus:border-gray-600 bg-[#101014] border-gray-600 placeholder-gray-400 text-white"
                        >
                          <option defaultValue="EN">English</option>
                          <option value="IT">Italian</option>
                        </select>
                      </div>
                    </div>
                    <div className="bg-[#101014] rounded-lg p-8 md:p-12">
                      <h2 className="text-white text-3xl font-bold mb-5">
                        Transcription
                      </h2>
                      <div className="bg-black h-4/5 rounded-md">
                        <p className="p-5 text-white">
                          The response will show here
                        </p>
                      </div>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            ""
          )}
          {thirdTab ? (
            <div
              className="p-4 my-5 rounded-lg bg-[#101014] w-8/12 mx-auto"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-sm text-gray-200 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-400 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          ) : (
            ""
          )}
          <div id="workFlow">
            <br />
          </div>
        </div>
      </div>
      {/* <div className="sm:block md:hidden flex flex-col mx-auto">
        <Collapse title="Audio Files">
          <p className="text-white">
            This is the content for the first collapsible section.
          </p>
        </Collapse>

        <Collapse title="Live Streaming">
          <p>This is the content for the second collapsible section.</p>
        </Collapse>
      </div> */}
    </>
  );
};

export default WorkTab;
