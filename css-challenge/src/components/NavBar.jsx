import React from 'react';
import pointer from '../pointer.jpg';

export default function NavBar() {
	return (
		<footer>
			<nav className="nav">
				<div className="nav__link--current">
					<i class="fas fa-home nav__icon nav__icon--current"></i>

					<div className="nav__pointer-container">
						<img src={pointer} alt="Pointer" className="nav__pointer" />
					</div>
				</div>

				<div>
					<i class="fas fa-th-large nav__icon"></i>
				</div>

				<div>
					<i class="fas fa-envelope nav__icon"></i>
				</div>

				<div>
					<i class="fas fa-user nav__icon"></i>
				</div>
			</nav>

		</footer>
	)
}
