import Lottie from 'lottie-react';

import catLoadingAnimation from '@/public/animations/cat_loading.json';

export default function CatLoading() {
	return (
		<div className="w-full flex justify-center">
			<div className="w-[250px] h-[250px]">
				<Lottie animationData={catLoadingAnimation} loop={true} />
			</div>
		</div>
	);
}
