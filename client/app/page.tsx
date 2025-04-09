'use client';

import React from 'react';
import { Input, Textarea } from '@heroui/input';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import { Tabs, Tab } from '@heroui/tabs';

import { PiUploadSimpleThin } from 'react-icons/pi';

export default function Home() {
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
				className="mt-8 w-[80%] md:w-[40%] justify-center"
			>
				<Tab key="text" title="Write story" className="w-full md:w-[80%]">
					<Textarea fullWidth minRows={10} maxRows={10} size="lg" />
				</Tab>
				<Tab
					key="file"
					title="Upload file"
					className="w-full md:w-[80%] justify-center items-center"
				>
					<div className="w-full flex justify-center">
						<Card className="py-4 w-[80%] md:w-[50%] flex justify-center cursor-pointer">
							<CardHeader className="py-4 px-4 flex-col items-center">
								<h4 className="font-bold text-large">Upload file</h4>
							</CardHeader>
							<CardBody className="overflow-visible py-2 items-center">
								<PiUploadSimpleThin size={100} />
							</CardBody>
						</Card>
					</div>
				</Tab>
			</Tabs>
		</div>
	);
}
