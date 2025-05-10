"use client";
import React, { useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import skillCategories from "@/lib/skills";

const gridSize = 84;

const SkillsGame = (): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);

  // This will hold a map of skill ids to their x and y motion values
  const motionValues = useRef<Map<string, { x: any; y: any }>>(new Map());

  // This function will initialize motion values for each skill
  const getMotionValues = (id: string) => {
    if (!motionValues.current.has(id)) {
      motionValues.current.set(id, {
        x: useMotionValue(0),
        y: useMotionValue(0),
      });
    }
    return motionValues.current.get(id)!;
  };

  const handleDragEnd = (x: number, y: number, id: string) => {
    // Snap to the nearest grid cell on drag end
    const snappedX = Math.round(x / gridSize) * gridSize;
    const snappedY = Math.round(y / gridSize) * gridSize;

    // Update the position with smooth animation
    animate(motionValues.current.get(id)!.x, snappedX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
    animate(motionValues.current.get(id)!.y, snappedY, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <div
      className='grid grid-cols-4 sm:grid-cols-6 gap-[16px] sm:gap-[12px] w-full max-w-[670px] h-[670px] sm:h-[500px] mx-auto border-2 border-primary bg-accent relative'
      ref={containerRef}
    >
      {Object.values(skillCategories)
        .flat()
        .map((skill) => {
          const Icon = skill.icon;

          // Get motion values for the specific skill
          const { x, y } = getMotionValues(skill.id);

          return (
            <motion.div
              key={skill.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0}
              dragDirectionLock
              onDragEnd={() => handleDragEnd(x.get(), y.get(), skill.id)}
              style={{ x, y }}
              className='w-[64px] sm:w-[80px] h-[64px] sm:h-[80px] border bg-background border-foreground grid place-items-center active:cursor-grabbing'
            >
              <Icon className='w-6 h-6 mx-auto text-primary' />
              <p>{skill.label}</p>
            </motion.div>
          );
        })}
    </div>
  );
};

export default SkillsGame;
