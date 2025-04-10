'use client';

import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@heroui/button';
import { Textarea } from '@heroui/input';
import { Tabs, Tab } from '@heroui/tabs';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { Modal, ModalContent, ModalBody, ModalFooter } from '@heroui/modal';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FiUploadCloud } from 'react-icons/fi';

const paragraphs = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.',
];

export default function Home() {
	const [file, setFile] = useState<File | null>(null);
	const [readingIndex, setReadingIndex] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const currentParaRef = useRef<HTMLParagraphElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleClick = () => {
		if (inputRef.current) inputRef.current.click();
	};

	const handleSubmitText = async () => {
		setIsModalOpen(true);
	};

	const handleSubmitFile = async () => {
		setIsModalOpen(true);
	};

	useEffect(() => {
		if (readingIndex < 0) setReadingIndex(0);
		if (readingIndex == paragraphs.length)
			setReadingIndex(paragraphs.length - 1);

		if (currentParaRef.current) {
			currentParaRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	}, [readingIndex]);

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
				className="w-[80%] md:w-[40%] justify-center"
			>
				<Tab key="text" title="Write story" className="w-full md:w-[80%]">
					<Card>
						<CardBody>
							<Textarea
								fullWidth
								minRows={10}
								maxRows={10}
								size="lg"
								placeholder="Write your story here"
							/>
						</CardBody>
						<CardFooter className="!mt-0 !pt-0">
							<div className="w-full flex justify-end">
								<Button onPress={handleSubmitText}>Submit</Button>
							</div>
						</CardFooter>
					</Card>
				</Tab>

				<Tab
					key="file"
					title="Upload file"
					className="w-full md:w-[70%] flex flex-col justify-center items-center"
				>
					<Card className="relative w-full h-[250px] flex justify-center cursor-pointer">
						<CardBody
							onClickCapture={handleClick}
							className="overflow-visible flex flex-col justify-center items-center"
						>
							<FiUploadCloud size={30} className="text-purple-400 mb-1" />
							{file ? (
								<p>{file.name}</p>
							) : (
								<>
									<p className="text-sm opacity">Click to Upload</p>
									<p className="text-xs opacity-70">supported type : .pdf</p>
								</>
							)}

							<input
								type="file"
								onChange={handleFileChange}
								ref={inputRef}
								className="hidden"
								accept=".pdf"
							/>
						</CardBody>
						{file && (
							<CardFooter className="absolute bottom-0">
								<div className="w-full flex justify-end">
									<Button onPress={handleSubmitFile}>Submit</Button>
								</div>
							</CardFooter>
						)}
					</Card>
				</Tab>
			</Tabs>

			<Modal
				backdrop={'blur'}
				isOpen={isModalOpen}
				onClose={() => {
					setIsModalOpen(false);
					setReadingIndex(0);
				}}
				className="grow h-[calc(100vh-4rem)] w-full max-w-full !my-0"
			>
				<ModalContent>
					<ModalBody className="w-full overflow-y-scroll scrollbar-hide !py-4">
						{paragraphs.map((para, index) => {
							// const colorClass = textColors[index % textColors.length];
							// const colorClass = '';
							const colorClass = [
								'text-scene-1',
								'text-scene-2',
								'text-scene-3',
							][index % 3];

							const opacity =
								index == Number(readingIndex) ? 'opacity-100' : 'opacity-20';

							return (
								<p
									key={index}
									ref={index === readingIndex ? currentParaRef : null}
									className={`rounded-md px-2 ${colorClass} ${opacity}`}
								>
									{para}
								</p>
							);
						})}
					</ModalBody>
					<ModalFooter>
						<Button
							isIconOnly
							isDisabled={readingIndex == 0}
							onPress={() => setReadingIndex((prevIndex) => prevIndex - 1)}
						>
							<GrFormPrevious />
						</Button>
						<Button
							isIconOnly
							isDisabled={readingIndex == paragraphs.length - 1}
							onPress={() => setReadingIndex((prevIndex) => prevIndex + 1)}
						>
							<GrFormNext />
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}
