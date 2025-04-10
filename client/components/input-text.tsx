import type { ProcessedChunk } from '@/api/types';

import React, { useState } from 'react';
import { Button } from '@heroui/button';
import { Textarea } from '@heroui/input';
import { Card, CardBody, CardFooter } from '@heroui/card';

import StoryModal from './strory-modal';

import { processText } from '@/api/endpoints/process-text';

export default function InputText() {
	const [isProcessing, setIsProcessing] = useState(false);
	const [storyText, setStoryText] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [storyChunks, setStoryChunks] = useState<ProcessedChunk[]>([]);

	const handleSubmitText = async () => {
		setIsModalOpen(true);
		setIsProcessing(true);

		processText(storyText)
			.then((chunks) => {
				setStoryChunks(chunks);
			})
			.catch((err: any) => {
				console.log(err.message || 'something went wrong');
			})
			.finally(() => {
				setIsProcessing(false);
			});
	};

	return (
		<div>
			<Card>
				<CardBody className="mb-0">
					<Textarea
						fullWidth
						value={storyText}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setStoryText(e.target.value);
						}}
						minRows={10}
						maxRows={10}
						size="lg"
						placeholder="Write your story here"
					/>
				</CardBody>
				<CardFooter className="mt-0">
					<div className="w-full flex justify-end">
						<Button onPress={handleSubmitText}>Submit</Button>
					</div>
				</CardFooter>
			</Card>

			<StoryModal
				isLoading={isProcessing}
				isModalOpen={isModalOpen}
				storyChunks={storyChunks}
				setIsModalOpen={setIsModalOpen}
			/>
		</div>
	);
}
