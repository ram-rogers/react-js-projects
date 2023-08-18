import Search from "./Components/Search/Search"
import "./App.css"

function App() {

	function handleOnSearchChange(searchData) {
		console.log(searchData)
	}


	return (
		<div className="container">
			<Search onSearchChange={handleOnSearchChange} />
		</div>
	)
}

export default App
