import ProjectContainer from "../Projectcontainer/ProjectContainer";
import "./Project.css";
import { Element } from "react-scroll";

function Project() {
    const projects = [
        {
            img: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/08/Library-Management-System-Project-in-Java.png",
            title: "Library Management System ",
            description:
                "This is a library managemnt project .used to access books in the library.",
            link: "https://ram.selfmade.fun/libraryManagement_Xampp/",
        },
        {
            img: "https://m.economictimes.com/thumb/msid-78623207,width-1200,height-900,resizemode-4,imgsize-18418/bookmyshow.jpg",
            title: "Cinegrade",
            description:
                "This is a Movie rating website, here you can find the rating of the movies.",
            link: "https://cinegrade.netlify.app/",
        },
        {
            img: "https://images.prismic.io/edapp-website/5fe5bd0e-19db-4cd0-a83a-0f2febcfeeb8_top-free-quiz-software.png?auto=compress%2Cformat&rect=10%2C0%2C1340%2C700&w=768&h=627&q=15",
            title: "Quizz Website",
            description:
                "This is a Quiz Website, here you can take a quiz on React.",
            link: "https://take-quizzz.netlify.app/",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTfk3yam73NJolF7URfdtSN1c9G98GJpCeHPnHxX94PYxrvj2Aj--DzEQK3OgXzH00c4&usqp=CAU",
            title: "Social Media Website ",
            description:
                "This is a Social media Project that i have created .",
            link: "https://ram.selfmade.fun/photogram_colege/",
        },
        {
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--fZP9lGqA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/ilwn7lj87kgo3ycjdrwu.jpeg",
            title: "Google Notes Taker",
            description:
                "This is a Google Notes taker app, here you can add your notes.",
            link: "https://google-notestaker.netlify.app/",
        },
        {
            img: "https://www.tripmatrix.com/wp-content/uploads/2023/04/TripDesignAppV2.jpg",
            title: "Trip Planner App",
            description:
                "This is a Todo trip planner app.",
            link: "https://todo-trip.netlify.app/",
        },
    ];
    return (
        <div>
            <Element className="project" name="projects">
                <h1>Projects</h1>
                <p>Here are some of my projects which i done for my knowledge</p>
                <div className="project__projects">
                    {projects.map((project, index) => {
                        return (
                            <ProjectContainer
                                key={index}
                                img={project.img}
                                title={project.title}
                                desc={project.description}
                                link={project.link}
                            />
                        );
                    })}
                </div>
            </Element>
        </div>
    );
}

export default Project;
