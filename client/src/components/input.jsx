"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

/* ------------------------------ INPUT ------------------------------ */

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
            #f87171,
            transparent 80%
          )
        `,
      }}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      <input
        ref={ref}
        type={type}
        className={cn(
          `
          flex h-10 w-full rounded-md border-none
          bg-zinc-200 dark:bg-zinc-800
          px-3 py-2 text-sm text-black dark:text-white
          shadow-input transition duration-300
          placeholder:text-neutral-400 dark:placeholder:text-neutral-600
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
          disabled:cursor-not-allowed disabled:opacity-50
          group-hover/input:shadow-none
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
        `,
          className
        )}
        {...props}
      />
    </motion.div>
  );
});

Input.displayName = "Input";

/* ------------------------------ TEXTAREA ------------------------------ */

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const radius = 100;
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const handleInput = (e) => {
    const el = e.currentTarget;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
            #f87171,
            transparent 80%
          )
        `,
      }}
      className="group/input rounded-lg p-[2px] transition duration-300"
    >
      <textarea
        ref={ref}
        onInput={handleInput}
        className={cn(
          `
          flex w-full min-h-10 resize-none rounded-md
          border-none bg-zinc-200 dark:bg-zinc-800
          px-3 py-2 text-sm text-black dark:text-white
          shadow-input transition duration-300
          placeholder:text-neutral-400 dark:placeholder:text-neutral-600
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
          disabled:cursor-not-allowed disabled:opacity-50
          group-hover/input:shadow-none
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
        `,
          className
        )}
        {...props}
      />
    </motion.div>
  );
});

Textarea.displayName = "Textarea";

export { Input, Textarea };
