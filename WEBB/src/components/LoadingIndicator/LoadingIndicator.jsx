import React from "react";
import "./LoadingIndicator.css";
import { Ring } from "@uiball/loaders";

const LoadingIndicator = () => {
  return (
    <div className="LoadingIndicator">
      <Ring size={40} lineWeight={5} speed={2} color="black" />
    </div>
  );
};

export default LoadingIndicator;

