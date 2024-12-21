import { PanelData } from './paneldata/PanelData';

const PanelSettings = () => {
  return (
    <div className="absolute right-4 top-[12px] z-10 flex w-auto max-w-[calc(384px)] flex-col rounded-xl bg-black shadow-morebox">
      {PanelData.map((item, index) => (
        <div className="transition-colors hover:bg-[#ffffff08]" key={index}>
          <div className="flex w-full cursor-pointer items-center justify-start px-[18px] py-3 outline-none">
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18.75}
                height={18.75}
              >
                <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path>
              </svg>
            </div>

            <div className="flex items-center justify-center">
              <span className="flex-1 text-nowrap break-words pl-3 text-[15px] font-bold leading-5">
                {item.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PanelSettings;
