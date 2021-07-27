import React from 'react';

export default function Exercise(props) {
  let icon, iconBackgroundColour;

  switch (props.iconNumber) {
    case 1:
      icon = "fas fa-heart";
      iconBackgroundColour = "exercise__icon-container--peach";
      break;
    case 2:
      icon = "fas fa-user";
      iconBackgroundColour = "exercise__icon-container--blue";
      break;
    default:
      console.log("No icon found.")
  }

	return (
		<div className="exercise__container u-margin-bottom-medium">
			<div className={`exercise__icon-container ${iconBackgroundColour}`}>
				<i className={`exercise__icon ${icon}`}></i>
			</div>

			<div className="exercise__details">
				<div className="exercise__detail">
					<div>{props.exerciseTitle}</div>

					<div>&middot; &middot;</div>
				</div>

				<div className="exercise__number">{props.numberOfExercises}</div>
			</div>
		</div>
	)
}
