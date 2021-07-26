import React from 'react';

export default function Mood() {
	return (
		<section className="mood u-margin-bottom-medium">
			<div className="mood__question u-margin-bottom-medium">
				<div>How do you feel?</div>

				<div>
					<div>&middot; &middot;</div>
				</div>
			</div>

			<div className="mood__emojis">
				<div className="mood__container">
					<div className="mood__emoji u-margin-bottom-small">&#128532;</div>
					<span className="mood__caption">Badly</span>
				</div>

				<div className="mood__container">
					<div className="mood__emoji u-margin-bottom-small">&#128522;</div>
					<span className="mood__caption">Fine</span>
				</div>

				<div className="mood__container">
					<div className="mood__emoji u-margin-bottom-small">&#128516;</div>
					<span className="mood__caption">Well</span>
				</div>

				<div className="mood__container">
					<div className="mood__emoji u-margin-bottom-small">&#128512;</div>
					<span className="mood__caption">Excellent</span>
				</div>
			</div>
		</section>
	)
}
