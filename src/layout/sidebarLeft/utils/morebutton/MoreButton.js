import React from 'react';

const MoreButton = () => {
  return (
    <button className="mt-1">
      <div className="flex max-w-full rounded-full p-3 hover:bg-[#8b82754d]">
        <div>
          <svg viewBox="0 0 24 24" fill="white" width={26.25} height={26.25}>
            <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
          </svg>
        </div>

        <div className="ml-5 mr-4 min-w-0 max-w-full overflow-hidden whitespace-nowrap break-words text-xl text-inherit">
          <span className="break-words text-xl text-inherit">More</span>
        </div>
      </div>
    </button>
  );
};

export default MoreButton;