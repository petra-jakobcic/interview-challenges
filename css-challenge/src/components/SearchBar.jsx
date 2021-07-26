import React from 'react';

export default function SearchBar() {
	return (
		<section className="searchbar u-margin-bottom-medium">
			<div className="searchbar__icon-container">
				<i className="searchbar__icon fas fa-search"></i>
			</div>

			<form>
				<input className="searchbar__input" type="text" placeholder="Search" />
			</form>
		</section>
	)
}
