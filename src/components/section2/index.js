import React from "react";

const Section2 = () => {
  return (
    <div
      id="section2"
      className="flex flex-col dark:bg-slate-900 bg-slate-200 p-20 pb-0 pt-12 w-full"
    >
      <div>My Services</div>
      <div className="mt-4 text-4xl font-semibold">What I Do</div>
      <div className="mt-20 flex flex-row justify-evenly">
        <div className="p-8 gap-4 h-72 w-72 dark:bg-slate-700 bg-slate-300 rounded-lg flex flex-col items-center ">
          <div className="mt-4 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              fill="currentColor"
              class="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </div>
          <div className=" text-xl">Web Development</div>
          <div className="text-center text-sm h-12">
            I can do simple web development
          </div>
        </div>
        <div className="p-8 gap-4 h-72 w-72 dark:bg-slate-700 bg-slate-300 rounded-lg flex flex-col items-center ">
          <div className="mt-4 flex-1 flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              fill="currentColor"
              class="bi bi-palette"
              viewBox="0 0 16 16"
            >
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              fill="currentColor"
              class="bi bi-question"
              viewBox="0 0 16 16"
            >
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </div>
          <div className=" text-xl">Machine Learning</div>
          <div className="text-center text-sm h-12">Learning...</div>
        </div>
        <div className="p-8 gap-4 h-72 w-72 dark:bg-slate-700 bg-slate-300 rounded-lg flex flex-col items-center ">
          <div className="mt-4 flex-1">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              fill="currentColor"
              class="bi bi-question"
              viewBox="0 0 16 16"
            >
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </div>
          <div className=" text-xl">Mobile Development</div>
          <div className="text-center text-sm h-12">Learning...</div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
