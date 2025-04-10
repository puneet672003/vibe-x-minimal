"use client";

import React from "react";

import { useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";

import UploadPDF from "@/components/upload-pdf";
import InputText from "@/components/input-text";
import StoryModal from "@/components/strory-modal";

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="grow w-full mx-auto rounded-md flex flex-col items-center">
      <div className="my-8">
        <h2 className="text-6xl font-bold text-center">VibeX</h2>
        <p className="text-md max-w-xl my-4 text-center opacity-80">
          Create immersive storytelling experiences with background music that
          matches your narrative.
        </p>
      </div>
      <Tabs
        fullWidth
        aria-label="Options"
        className="w-[80%] md:w-[40%] justify-center">
        <Tab key="text" title="Write story" className="w-full md:w-[80%]">
          <InputText setIsModalOpen={setIsModalOpen} />
        </Tab>
        <Tab
          key="file"
          title="Upload file"
          className="w-full md:w-[70%] flex flex-col justify-center items-center">
          <UploadPDF setIsModalOpen={setIsModalOpen} />
        </Tab>
      </Tabs>
      <StoryModal
        storyChunks={paragraphs}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
