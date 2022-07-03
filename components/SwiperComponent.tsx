/* eslint-disable @next/next/no-img-element */
import {Key} from 'react'
import {Autoplay, EffectFade, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Swiper, SwiperSlide} from 'swiper/react'

interface ISwiper {
	data: any
}

const SwiperComponent = ({data}: ISwiper) => {
	return (
		<Swiper
			spaceBetween={30}
			effect={'fade'}
			pagination={{
				clickable: true
			}}
			autoplay={true}
			centeredSlides
			loop={true}
			speed={4000}
			modules={[Pagination, Autoplay, EffectFade]}
			className='mySwiper'
			style={{width: '30%', border: '2px solid green', height: '50vh'}}>
			{data
				?.slice(data.length - 10, data.length)
				.map(
					(cat: {
						id: Key | null | undefined
						image: {url: string | undefined}
						name: string | undefined
					}) => (
						<SwiperSlide key={cat?.id}>
							<>
								<img
									src={cat?.image?.url}
									alt={cat?.name}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										objectPosition: '30% 70%'
									}}
								/>
							</>
						</SwiperSlide>
					)
				)}{' '}
		</Swiper>
	)
}

export default SwiperComponent
