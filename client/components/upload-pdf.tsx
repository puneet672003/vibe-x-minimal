import React from 'react';
import { useRef, useState, Dispatch, SetStateAction } from 'react';
import { Button } from '@heroui/button';
import { Card, CardBody, CardFooter } from '@heroui/card';
import { FiUploadCloud } from 'react-icons/fi';

export default function UploadPDF({
	setIsModalOpen,
}: {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>,
}) {
	const [file, setFile] = useState<File | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};
	const handleClick = () => {
		if (inputRef.current) inputRef.current.click();
	};
	const handleSubmitFile = async () => {
		setIsModalOpen(true);
	};

	return (
		<Card className="relative w-full h-[250px] flex justify-center cursor-pointer">
			<CardBody
				onClickCapture={handleClick}
				className="overflow-visible flex flex-col justify-center items-center"
			>
				<FiUploadCloud size={30} className="text-scene-1 mb-1" />
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
	);
}
