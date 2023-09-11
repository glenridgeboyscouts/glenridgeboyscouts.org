import Image from 'next/image';
import heroImage from '../../../public/troop-icon.png';

export default function Home() {
	return (
		<>
			<main className='bg-white dark:bg-gray-900'>
				<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-0 sm:px-6 lg:space-y-16 lg:px-8'>
					<section className='overflow-hidden bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2'>
						<div className='p-8 md:p-12 lg:px-16 lg:py-24'>
							<div className='mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
								<h2 className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>Popcorn Fundraising 2023 for Troop 55</h2>

								<p className='hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block'>
								    Friends and family can support a scout in our troop by asking your scout about ordering popcorn directly from them before Nov. 1st.
								    Your scout will deliver your popcorn to you in late November.
								</p>
								<p className='hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block'>
								    Online orders with delivery are also possible at <a href="https://www.trails-end.com/store">https://www.trails-end.com/store</a>, and be sure to
									 get a scout code or lookup your scout before ordering. Without a scout code, our troop does not get credit.
								</p>

								<div className='mt-4 md:mt-8'>
									<a
										href='https://www.trails-end.com/store'
										className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
									>
										Online Direct Order
									</a>
								</div>

								<p className='hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block'>
									Links for scouts
								</p>

								<div className='mt-4 md:mt-8'>
									<a
										href='/Starting-Guide.pdf'
										className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
									>
										Starting Guide
									</a>
								</div>
                                <div className='mt-4 md:mt-8'>
                                    <a
                                        href='/Order-Card.pdf'
                                        className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
                                    >
                                        Popcorn Selection & Printable Order List
                                    </a>
                                </div>
                                <div className='mt-4 md:mt-8'>
                                    <a
                                        href='https://wh-wf-training.s3.amazonaws.com/Rewards-2023.pdf'
                                        className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
                                    >
                                        Rewards
                                    </a>
                                </div>
							</div>
						</div>

						<Image alt='Student' src={heroImage} className='h-56 w-full object-cover sm:h-full' />
					</section>
				</div>
			</main>
		</>
	);
}
