import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse w-16 h-16 flex items-center justify-center bg-slate-800 z-10">
      <div className="animate-spin w-8 h-8 border-4 border-slate-500 flex items-center justify-center border-t-slate-300 rounded-full"></div>
    </div>
  );
};

export default Skeleton;
