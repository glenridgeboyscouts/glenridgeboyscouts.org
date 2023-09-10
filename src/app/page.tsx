import Image from 'next/image';
import heroImage from '../../public/robber.jpg';

export default function Home() {
	return (
		<>
			<main className='bg-white dark:bg-gray-900'>
				<div className='mx-auto max-w-screen-xl space-y-8 px-4 py-0 sm:px-6 lg:space-y-16 lg:px-8'>
					<section className='overflow-hidden bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2'>
						<div className='p-8 md:p-12 lg:px-16 lg:py-24'>
							<div className='mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
								<h2 className='text-2xl font-bold text-gray-900 dark:text-white md:text-3xl'>Troop 55
									Glen Ridge, NJ</h2>

								<p className='hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block'>
									This website will be worked on throughout the year. If you wish to help, please
									contact corbin.wunderlich@glenridgeboyscouts.org.
								</p>

								<div className='mt-4 md:mt-8'>
									<a
										href='#'
										className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
									>
										Get Started Today
									</a>
								</div>

								<p className='hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block'>
									If you would like to support scouting while getting yourself a tasty treat, you can
									go buy some popcorn and most of the profits will go to the troop and the scouting
									organization.
								</p>

								<div className='mt-4 md:mt-8'>
									<a
										href='/popcorn/'
										className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
									>
										Order now!
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
