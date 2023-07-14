import { ReactSVG } from "react-svg";

export default function ResultSummary() {
  return (
    <div className="mx-auto flex w-full flex-col  font-normal shadow-2xl desktop:shadow-cobalt-blue">
      <div
        className="flex w-full flex-col items-center justify-center overflow-hidden rounded-b-[2.5rem] bg-gradient-to-t
         from-grad-light-royal-blue to-grad-light-slate-blue px-4 pb-10 pt-6 text-pale-blue"
      >
        <p className="mb-5 text-lg font-medium text-light-lavender">
          Your Result
        </p>
        <div className="relative mb-5 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-b from-grad-violet-blue to-grad-persian-blue">
          <strong className="block rounded-full text-center text-6xl font-bold">
            76
          </strong>
          <p className="absolute bottom-3 block text-light-lavender text-opacity-[55%]">
            of 100
          </p>
        </div>
        <p className="text-2xl font-bold">Great</p>
        <p className="mx-10 mt-1 text-center font-normal text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="my-5 flex flex-col gap-3 px-8">
        <p className="font-bold text-dark-gray-blue">Summary</p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-light-red/5 px-3 py-3 ">
            <div className="flex flex-row gap-3">
              <ReactSVG src="src/assets/images/icon-reaction.svg" />
              <h3 className="font-medium text-light-red">Reaction</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">80</span>{" "}
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-orangey-yellow/5 px-3 py-3 ">
            <div className="flex flex-row gap-3">
              <ReactSVG src="src/assets/images/icon-memory.svg" />
              <h3 className="font-medium text-orangey-yellow">Memory</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">92</span>{" "}
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-green-teal/5 px-3 py-3 ">
            <div className="flex flex-row gap-3">
              <ReactSVG src="src/assets/images/icon-verbal.svg" />
              <h3 className="font-medium text-green-teal">Verbal</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">61</span>{" "}
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 rounded-lg bg-cobalt-blue/5 px-3 py-3 ">
            <div className="flex flex-row gap-3">
              <ReactSVG src="src/assets/images/icon-visual.svg" />
              <h3 className="font-medium text-cobalt-blue">Visual</h3>
            </div>
            <div className="flex flex-row gap-2">
              <span className="font-medium text-dark-gray-blue">72</span>{" "}
              <span className="font-medium text-dark-gray-blue opacity-70">
                /
              </span>
              <span className="font-medium text-dark-gray-blue opacity-70">
                100
              </span>
            </div>
          </div>
        </div>
        <button className="w-full rounded-full bg-dark-gray-blue px-2 py-3 text-center text-white">
          Continue
        </button>
      </div>
    </div>
  );
}
