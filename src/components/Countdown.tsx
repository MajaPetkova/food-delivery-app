"use client";
import React from "react";
import Countdown from 'react-countdown';

const endingDate = new Date("2024-02-01");

const Countdowny = () => {
  return  <Countdown className="text-bold text-yellow-400 text-5xl" date={endingDate} />;
};

export default Countdowny;
