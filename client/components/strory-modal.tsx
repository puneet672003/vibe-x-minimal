import type { ProcessedChunk } from '@/api/types';

import React from 'react';
import { Howl } from 'howler';
import { useRef, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Button } from '@heroui/button';
import { Modal, ModalContent, ModalBody, ModalFooter } from '@heroui/modal';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import CatLoading from '@/components/ui/cat-loading';

export default function StoryModal({
	isLoading,
	isModalOpen,
	storyChunks,
	setIsModalOpen,
}: {
	isLoading: boolean,
	isModalOpen: boolean,
	storyChunks: ProcessedChunk[],
	setIsModalOpen: Dispatch<SetStateAction<boolean>>,
}) {
	const [isLoadingSound, setIsLoadingSound] = useState<boolean>(true);
	const [howlerSounds, setHowlerSound] = useState<any[]>([]);
	const [readingIndex, setReadingIndex] = useState<number>(0);
	const currentParaRef = useRef<HTMLParagraphElement>(null);

	const changeScene = (oldIndex: number, change: number) => {
		if (howlerSounds.length) {
			const newIndex = oldIndex + change;

			if (oldIndex != newIndex) howlerSounds[oldIndex].stop();

			howlerSounds[newIndex].seek(storyChunks[newIndex].start_time);
			howlerSounds[newIndex].play();
			howlerSounds[newIndex].fade(0, 0.5, 1000);

			setReadingIndex(newIndex);
		}
	};

	useEffect(() => {
		setHowlerSound(
			storyChunks.map(
				(chunk) =>
					new Howl({
						src: [chunk.audio_url],
						loop: true,
						html5: true,
					})
			)
		);
	}, [isLoading]);

	useEffect(() => {
		if (howlerSounds.length) {
			setIsLoadingSound(false);
			changeScene(0, 0);
		}
	}, [howlerSounds]);

	useEffect(() => {
		if (currentParaRef.current) {
			currentParaRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	}, [readingIndex]);

	return (
		<Modal
			backdrop={'blur'}
			isOpen={isModalOpen}
			onClose={() => {
				setIsModalOpen(false);
				setReadingIndex(0);
			}}
			className="grow h-[calc(100vh-4rem)] w-full max-w-full !my-0 rounded-b-none"
		>
			<ModalContent>
				<ModalBody className="w-full overflow-y-scroll scrollbar-hide !pb-4 !pt-8">
					{isLoading || isLoadingSound ? (
						<div className="w-full h-full flex-col justify-center items-center">
							<CatLoading />

							<p className="text-center text-lg">
								Processing your story... Please wait for a while :)
							</p>
						</div>
					) : (
						storyChunks.map((chunk, index) => {
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
									className={`rounded-md px-2 transition-all duration-300 ${colorClass} ${opacity}`}
								>
									{chunk.chunk_text}
								</p>
							);
						})
					)}
				</ModalBody>
				{!isLoading && !isLoadingSound && (
					<ModalFooter>
						<Button
							isIconOnly
							isDisabled={readingIndex == 0}
							onPress={() => changeScene(readingIndex, -1)}
						>
							<GrFormPrevious />
						</Button>
						<Button
							isIconOnly
							isDisabled={readingIndex == storyChunks.length - 1}
							onPress={() => changeScene(readingIndex, 1)}
						>
							<GrFormNext />
						</Button>
					</ModalFooter>
				)}
			</ModalContent>
		</Modal>
	);
}
