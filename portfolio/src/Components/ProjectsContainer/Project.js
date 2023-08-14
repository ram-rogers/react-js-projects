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
            link: "http://www.github.com/ram-rogers",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2020/9/HI/PO/EE/6668018/e-commerce-solutions-500x500.jpg",
            title: "Ecommerce Website ",
            description:
                "This is a library managemnt project .used to access books in the library.",
            link: "http://www.github.com/ram-rogers",
        },
        {
            img: "https://images.prismic.io/edapp-website/5fe5bd0e-19db-4cd0-a83a-0f2febcfeeb8_top-free-quiz-software.png?auto=compress%2Cformat&rect=10%2C0%2C1340%2C700&w=768&h=627&q=15",
            title: "Quizz Website",
            description:
                "This is a library managemnt project .used to access books in the library.",
            link: "http://www.github.com/ram-rogers",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTfk3yam73NJolF7URfdtSN1c9G98GJpCeHPnHxX94PYxrvj2Aj--DzEQK3OgXzH00c4&usqp=CAU",
            title: "Social Media Website ",
            description:
                "This is a library managemnt project .used to access books in the library.",
            link: "http://www.github.com/ram-rogers",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizGKA4BMyGQjQVgXjvyFHGBPli8_ye69d8w&usqp=CAU",
            title: "onlineshopping",
            description:
                "This is a library managemnt project .used to access books in the library.",
            link: "http://www.github.com/ram-rogers",
        },
        {
            img: "https://instanteduhelp-14bb3.kxcdn.com/wp-content/uploads/2021/09/1-2.png",
            title: "Library Management System ",
            description:
                "This is a library managemnt project .used to access books in the library.",
            link: "http://www.github.com/ram-rogers",
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
