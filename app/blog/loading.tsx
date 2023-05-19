"use client";

import { ThreeDots } from "react-loader-spinner";

export default function LoadingPosts() {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="ghostWhite"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="spinner"
      visible={true}
    />
  );
}
