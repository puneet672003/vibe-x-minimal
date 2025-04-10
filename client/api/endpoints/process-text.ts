import type { AxiosResponse } from 'axios';
import type { ProcessedChunk } from '@/api/types';

import API from '@/api/axios';

export const processText = async (text: string): Promise<ProcessedChunk[]> => {
	const formData = new FormData();

	formData.append('story_text', text);

	const res: AxiosResponse<{ segments: ProcessedChunk[] }> = await API.post(
		'/process-text/',
		formData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}
	);

	return res.data['segments'];
};
