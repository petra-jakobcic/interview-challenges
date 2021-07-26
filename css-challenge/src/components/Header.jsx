import React from 'react';

export default function Header() {
	return (
		<header className="header u-margin-bottom-medium">
			<div>
				<div className="header__greeting u-margin-bottom-small">Hi, Jared!</div>

				<div className="header__date">23 Jan, 2021</div>
			</div>

			<div>
				<i className="header__icon fas fa-bell"></i>
			</div>
		</header>
	)
}
