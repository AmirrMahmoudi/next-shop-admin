"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NextNprogress = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#ffbe33"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default NextNprogress;
