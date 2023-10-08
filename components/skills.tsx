import { Backend, Frontend, Tools } from "@/constants/skills";
import { Tab, Tabs, Card } from "@nextui-org/react";
import React from "react";
import { BiServer, BiLaptop } from "react-icons/bi";
import { TbTool } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="flex w-full flex-col">
      <h1 className="font-semibold text-xl md:text-2xl whitespace-nowrap">
        Skills
      </h1>
      <Tabs id="works" aria-label="Options" variant="underlined">
        <Tab
          key="Frontend"
          title={
            <div className="flex items-center space-x-2">
              <BiLaptop />
              <span>Frontend</span>
            </div>
          }
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2 pb-10 md:pb-20">
            {Frontend.map((skill) => (
              <motion.div key={skill.text} whileHover={{ scale: 1.05 }}>
                <Card
                  radius="none"
                  className="rounded-sm px-2 py-1  min-w-[100px]"
                  shadow="sm"
                >
                  <div className="flex items-center text-sm gap-1">
                    <skill.icon />
                    {skill.text}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Tab>
        <Tab
          key="Backend"
          title={
            <div className="flex items-center space-x-2">
              <BiServer />
              <span>Backend</span>
            </div>
          }
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2 pb-20">
            {Backend.map((skill) => (
              <motion.div key={skill.text} whileHover={{ scale: 1.05 }}>
                <Card
                  radius="none"
                  className="rounded-sm px-2 py-1  min-w-[100px]"
                  shadow="sm"
                >
                  <div className="flex items-center text-sm gap-1">
                    <skill.icon />
                    {skill.text}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Tab>
        <Tab
          key="Others"
          title={
            <div className="flex items-center space-x-2">
              <TbTool />
              <span>Others</span>
            </div>
          }
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2 pb-20">
            {Tools.map((skill) => (
              <motion.div key={skill.text} whileHover={{ scale: 1.05 }}>
                <Card
                  radius="none"
                  className="rounded-sm px-2 py-1  min-w-[100px]"
                  shadow="sm"
                >
                  <div className="flex items-center text-sm gap-1">
                    <skill.icon />
                    {skill.text}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
