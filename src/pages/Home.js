/** @format */

import SignMessage from "../components/SignMessage";
import VerifyMessage from "../components/VerifyMessage";

function Home() {
	return (
		<div className="flex flex-wrap">
			<div className="w-full lg:w-1/2">
				<SignMessage />
			</div>
			<div className="w-full lg:w-1/2">
				<VerifyMessage />
			</div>
		</div>
	);
}

export default Home;
