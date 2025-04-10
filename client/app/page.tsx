'use client';

import React from 'react';
import { useState } from 'react';
import { Tabs, Tab } from '@heroui/tabs';

import UploadPDF from '@/components/upload-pdf';
import InputText from '@/components/input-text';

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<div className="relative grow w-full mx-auto rounded-md flex flex-col items-center">
			<div className="absolute inset- -z-10 size-full items-center px-5 py-24 " />
			<div className="my-8">
				<h2 className="text-6xl font-bold text-center">
					Vibe<span className="text-scene-1">X</span>
				</h2>
				<p className="relative text-md max-w-xl my-4 text-center opacity-80">
					Create immersive storytelling experiences with background music that
					matches your narrative.
				</p>
			</div>
			<Tabs
				fullWidth
				aria-label="Options"
				className="w-[80%] md:w-[40%] justify-center"
			>
				<Tab key="text" title="Write story" className="w-full md:w-[80%]">
					<InputText />
				</Tab>
				<Tab
					key="file"
					title="Upload file"
					className="w-full md:w-[70%] flex flex-col justify-center items-center"
				>
					<UploadPDF setIsModalOpen={setIsModalOpen} />
				</Tab>
			</Tabs>
		</div>
	);
}
