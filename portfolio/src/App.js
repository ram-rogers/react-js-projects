import Header from "./Components//Header/Header"
import Contact from "./Components/Contact/Contact"
import ExperienceContainer from "./Components/ExperienceContainer/ExperienceContainer"
import Project from "./Components/ProjectsContainer/Project"
import Skills from "./Components/Skills/Skills"
import TopContainer from "./Components/TopContainer/TopContainer"

function App() {
	return (
		<div>
			<Header />
			<TopContainer />
			<Skills />
			<Project />
			<ExperienceContainer />
			<Contact />
		</div>

	)
}

export default App
