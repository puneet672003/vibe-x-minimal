"use client";

import React from "react";
import { Input, Textarea } from "@heroui/input";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Tabs, Tab } from "@heroui/tabs";
import { useRef, useState } from "react";

import { PiUploadSimpleThin } from "react-icons/pi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { FiUploadCloud } from "react-icons/fi";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClick = () => {
	if(inputRef.current)
		inputRef.current.click();
	console.log("hell")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
  };

  return (
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden flex flex-col items-center py-8">
      <h2 className="text-white text-6xl  font-bold text-center">VibeX</h2>
      <p className="text-white text-md max-w-xl my-4 text-center opacity-80">
        Create immersive storytelling experiences with background music that
        matches your narrative.
      </p>

      <Tabs
        fullWidth
        aria-label="Options"
        className="mt-8 w-[80%] md:w-[40%] justify-center">
        <Tab key="text" title="Write story" className="w-full md:w-[80%]">
          <Textarea fullWidth minRows={10} maxRows={10} size="lg" />
        </Tab>
        <Tab
          key="file"
          title="Upload file"
          className="w-full md:w-[80%] justify-center items-center">
          {/* upload pdf  */}
          <div className="w-full flex justify-center">
            <Card
              isHoverable={true}
			  
              className="py-4 md:w-[75%] md:h-[250px] flex justify-center cursor-pointer">
              <CardBody onClickCapture = {handleClick} className="overflow-visible py-10 flex flex-col justify-center items-center ">
                <FiUploadCloud size={30} className="text-purple-400 mb-1" />
                <p className="text-sm text-gray-400">
                  Drag and Drop or Click to Upload
                </p>
                <p className="text-xs font-thin text-white ">
                  supported type : .pdf, .doc
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  ref={inputRef}
                  className="hidden"
                  accept=".pdf,.docx"
                />
              </CardBody>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
