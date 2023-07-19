import { ReactSVG } from "react-svg";

export default function ResultSummary() {
  return (
    <div
      className=" flex flex-col font-normal 
      md:w-[700px]  md:flex-row md:rounded-[2.5rem] md:shadow-2xl"
    >
      <div
        className="flex w-full flex-col items-center justify-center overflow-hidden rounded-b-[2.5rem] bg-gradient-to-t from-grad-light-royal-blue
         to-grad-light-slate-blue px-4 pb-10 pt-6 text-pale-blue md:flex-1 md:flex-shrink-0  md:rounded-[2.5rem]"
      >
        <p className="mb-6 text-lg font-medium text-light-lavender md:text-2xl">
          Your Result
        </p>
        <div
          className=" mb-5 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b
         from-grad-violet-blue to-grad-persian-blue md:h-44 md:w-44"
        >
          <strong className="block self-center rounded-full text-center text-6xl font-bold">
            76
          </strong>
          <p className="bottom-3 block text-light-lavender text-opacity-[55%]">
            of 100
          </p>
        </div>
        <p className="text-2xl font-bold tracking-wider md:mb-2">Great</p>
        <p className="mx-10 mt-1 text-center font-normal text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="my-6 flex flex-col gap-5 px-8 md:flex-1 md:flex-shrink-0">
        <p className="text-lg  font-bold text-dark-gray-blue md:text-2xl">
          Summary
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-light-red/[.07] px-3 py-3 ">
            <div className="flex flex-row items-center gap-3">
              <ReactSVG src="src/assets/images/icon-reaction.svg" />
              <h3 className="font-medium text-light-red">Reaction</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">80</span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-orangey-yellow/[.07] px-3 py-3 ">
            <div className="flex flex-row items-center gap-3">
              <ReactSVG src="src/assets/images/icon-memory.svg" />
              <h3 className="font-medium text-orangey-yellow">Memory</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">92</span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-green-teal/[.07] px-3 py-3 ">
            <div className="flex flex-row items-center gap-3">
              <ReactSVG src="src/assets/images/icon-verbal.svg" />
              <h3 className="font-medium text-green-teal">Verbal</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">61</span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-cobalt-blue/[.07] px-3 py-3 ">
            <div className="flex flex-row items-center gap-3">
              <ReactSVG src="src/assets/images/icon-visual.svg" />
              <h3 className="font-medium text-cobalt-blue">Visual</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">72</span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
        </div>
        <button
          className=" w-full rounded-full bg-dark-gray-blue from-grad-light-royal-blue to-grad-light-slate-blue px-2
        py-3.5 text-center text-white hover:bg-gradient-to-t"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
