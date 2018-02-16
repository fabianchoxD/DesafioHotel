import React, { Component } from 'react';
import '../Css/Search.css';


class Search extends Component {

	filterUpdate() {
		const val = this.myValue.value
		this.props.filterUpdate(val)
		console.log(val)
	}

	render() {
		return (

			<aside className="card">
				<h2><b>Filtro</b></h2>

				<form>
					<input
						type="text"
						ref={(value) => { this.myValue = value }}
						placeholder="Type to search..."
						onChange={this.filterUpdate.bind(this)}
					/>
				</form>
			</aside>
		)
	}
}

export default Search;