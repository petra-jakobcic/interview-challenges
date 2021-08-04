import React from 'react';
import Exercise from './Exercise';

export default function Exercises() {
	return (
		<section className="exercises">
			<div className="exercises__swipe-line"></div>

			<div className="exercises__container u-margin-bottom-medium">
				<div>Exercises</div>

				<div>
					<div>&middot; &middot;</div>
				</div>
			</div>

			<Exercise
				className="u-margin-bottom-medium"
				exerciseTitle="Speaking skills"
				numberOfExercises="16 Exercises"
				iconNumber={1}
			/>

			<Exercise
				exerciseTitle="Reading speed"
				numberOfExercises="8 Exercises"
				iconNumber={2}
			/>

			<Exercise
				exerciseTitle="Exercise title"
				iconNumber={3}
			/>
		</section>
	)
}
