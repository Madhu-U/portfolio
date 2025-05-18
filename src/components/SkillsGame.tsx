"use client";
import React, { useState } from "react"; // Import useEffect
import skills from "../lib/skills";
import { AnimatePresence, motion } from "framer-motion"; // Correct import for Framer Motion v7+
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";
import ExternalLink from "./ExternalLink";

const SkillsGame = () => {
  // Store the ID of the currently selected skill, or null if none
  const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null);
  // Store the full info object of the selected skill
  const [skillInfo, setSkillInfo] = useState<{
    id: number;
    label: string;
    icon: IconType;
    desc: string;
    link: string;
  } | null>(null);

  const handleClick = (id: number) => {
    // Determine the next selected ID
    const newSelectedId = selectedSkillId === id ? null : id;
    setSelectedSkillId(newSelectedId); // Schedule state update

    // Update skillInfo based on the new selected ID
    if (newSelectedId !== null) {
      // Find the skill matching the newly selected ID
      const skill = Object.values(skills)
        .flat()
        .find((s) => s.id === newSelectedId);
      setSkillInfo(skill || null); // Set the found skill, or null if not found
    } else {
      setSkillInfo(null); // Clear skill info if deselecting
    }
  };

  const renderSkillSection = (
    category: string,
    skillList: {
      id: number;
      label: string;
      icon: IconType;
      desc: string;
      link: string;
    }[]
  ) => (
    <div>
      <h2 className='mb-2 text-xl'>{category}</h2>
      <div className='skills-section'>
        {skillList.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.id}
              className='bg-background w-15 h-15 grid place-items-center hover:cursor-pointer'
              onClick={() => handleClick(skill.id)} //
            >
              <motion.span
                whileHover={{
                  scale: 1.4,
                }}
                animate={{
                  scale: selectedSkillId === skill.id ? 1.4 : 1,
                }}
                style={{
                  background:
                    selectedSkillId === skill.id
                      ? "linear-gradient(180deg,rgba(255, 70, 85, 1) 0%, rgba(0, 0, 0, 0) 100%)"
                      : "none",
                }}
              >
                <IconComponent className='w-10 h-10 ' />
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  const animationVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      originY: 0,
      height: 0, // Start with height 0
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      originY: 0,
      height: "auto", // Set height to auto
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      originY: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div className=''>
      <div className='flex flex-col gap-12 w-full '>
        {/* Render sections using the helper */}
        {renderSkillSection("Frontend", skills.frontend)}
        {renderSkillSection("Backend", skills.backend)}
        {renderSkillSection("Tools", skills.tools)}

        {/* Display the selected skill's description */}
        <div className='bg-foreground text-background p-4'>
          <AnimatePresence mode='wait'>
            {skillInfo ? (
              <motion.div
                key={skillInfo.id}
                className='flex flex-col gap-3'
                variants={animationVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                style={{ overflow: "hidden" }}
              >
                <h3 className='text-xl'>{skillInfo.label}</h3>
                <p className='text-lg '>{skillInfo.desc}</p>
                <ExternalLink
                  iconName={FiExternalLink}
                  href={skillInfo.link}
                  linkName='learn more'
                />
              </motion.div>
            ) : (
              <motion.p
                key='placeholder-text'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2, easings: "easeInOut" },
                }}
                exit={{ opacity: 0 }}
              >
                Click on a skill icon to see its description.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SkillsGame;
