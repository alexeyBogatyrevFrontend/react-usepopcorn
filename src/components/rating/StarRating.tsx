import React, { FC, useEffect, useState } from 'react'
import Star from './Star'

import styles from './StartRating.module.css'

type StarRatingProps = {
	maxRating: number
	setUserRating: React.Dispatch<React.SetStateAction<number>>
}

const StarRating: FC<StarRatingProps> = ({ maxRating = 5, setUserRating }) => {
	const [rating, setRating] = useState(0)
	const [tempRating, setTempRating] = useState(0)

	useEffect(() => {
		setUserRating(rating)
	}, [rating, setUserRating])

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						key={i}
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						onClick={() => {
							setRating(i + 1)
							setUserRating(rating)
						}}
						onMouseEnter={() => setTempRating(i + 1)}
						onMouseLeave={() => setTempRating(0)}
					/>
				))}
			</div>
			<p style={{ color: '#fcc419', fontWeight: 700 }}>
				{tempRating || rating || ''}
			</p>
		</div>
	)
}

export default StarRating
