"use client";
import { features } from "@/config/constants";
import { featureInterface } from "@/config/TypeScriptTypes";
import React from "react";
import { motion } from "framer-motion";
import {
  slideAnimationLeftAndVibrate,
  slideAnimationRightAndVibrate,
} from "@/config/motion";
const FeatureCard = ({ feature }: { feature: featureInterface }) => {
  const alignMent: string = feature.alignment;
  return (
    <div
      className={"flex flex-col gap-4 mt-8 "}
      style={{ textAlign: alignMent === "left" ? "right" : "left" }}
    >
      <h2 className="text-grad">{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[60%] flex flex-col  gap-8">
        {features.map((feature: featureInterface,index:number) => {
          if (feature.alignment === "left") {
            return (
              <div key={index} className="flex  gap-8 justify-center">
                <div className=" flex-[0.5]">
                  <FeatureCard key={feature.title} feature={feature} />
                </div>
                <div className=" w-[400px] h-[300px] flex-[0.5] bg-red-500"></div>
              </div>
            );
          } else {
            return (
              <div key={index} className="flex  gap-8 justify-center">
                <motion.div className=" w-[400px] h-[300px] flex-[0.5] bg-red-500"></motion.div>
                <motion.div className=" flex-[0.5]">
                  <FeatureCard key={feature.title} feature={feature} />
                </motion.div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Features;
