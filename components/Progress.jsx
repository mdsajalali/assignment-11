"use client"

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Progress = () => {
  return (
    <div>
      <ProgressBar
        height="5px"
        color="#3B82F6"
        options={{ showSpinner: false }}
      />
    </div>
  );
};

export default Progress;
