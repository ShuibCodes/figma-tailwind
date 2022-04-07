 /* eslint-disable */ 
import React from 'react';
import './styles.css'
function Banner() {
	return (
		<div className=" max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<div
			
				className="rounded-3xl banner-container shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 "
			>
				<div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-12 ">
					<div className="lg:self-center md:w-100">
						<h1 style={{color:"#6E8FD1"}} className="banner-title font-xl  font-bold text-white lg:text-5xl ">
						Discover, Collect, and Sell Various Extraordinary NFTS 
						</h1>
						<p className="mt-4 text-lg leading-6 text-indigo-200">
						This NFT is an artificial intelligent NFT (iNFT) that lives on the Ethereum blockchain. Her name is Alice, and she learns and builds her.
						</p>
						<button
							style={{backgroundColor:"#59A4C8"}}
							className="mt-8 text-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium  hover:bg-indigo-50"
						>
							Explore Collection
						</button>
					</div>
				</div>
				<div className="-mt-6 md:ml-32  aspect-w-1/4 aspect-h-1 md:aspect-w-2 md:aspect-h-1 ">
					<img style={{width:"80%"}}
						className="p-12 md:ml-16 rounded object-cover" 
						src="https://via.placeholder.com/300x400"
						alt="App screenshot"
					/>
				</div>
			</div>
		</div>
	);
}

export default Banner;
