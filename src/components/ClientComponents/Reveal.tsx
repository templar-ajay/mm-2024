"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  type?: "scale" | "opacity";
  delay?: number;
  y?: number;
  x?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  type = "opacity",
  delay,
  y = 0,
  x = 0,
  ...restProps
}: Props | any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: width,
        overflow: "visible",
      }}
      {...restProps}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: type == "opacity" ? 0 : 1,
            scale: type == "scale" ? 0 : 1,
            y: y,
            x: x,
          },
          visible: { opacity: 1, scale: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay || 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
