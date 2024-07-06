import React, {useState} from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

// Helper function to truncate text to a specified word limit
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const projects = [
  {
    title: "MeditaZone APP",
    description:
      "An app inspired by Generation Z Indonesians facing mental health issues, aimed at assisting individuals in recognizing and managing mental disorders effectively using machine-learning models focused on Natural Language Processing (NLP).",
    imgSrc: "/src/pages/projects/meditazone-app.svg",
    badges: ["TensorFlow", "NLP", "Classification", "Python", "Flask", "Google Cloud Platform"],
    githubLink: "https://github.com/meditazone",
  },
  {
    title: "Eco Sort",
    description:
      "Developed EcoSort, an app aiding waste management in urban Indonesia. Utilized machine learning to classify waste into seven categories: glass, cardboard, metal, plastic, paper, organic, and others. Implemented ResNet50 CNN, trained on ImageNet, achieving over 95% accuracy and around 87% validation accuracy.",
    imgSrc: "/src/pages/projects/ecosort.svg",
    badges: ["TensorFlow", "Image Classification", "React JS", "Tailwind CSS"],
    githubLink: "https://github.com/utdi-gas",
  },
  {
    title: "UKM IK Website",
    description:
    "The IK UKM website aims to organize UKM efficiently and make it easier for administrators to manage members more effectively, in line with technological developments and the needs of the times.",
    imgSrc: "/src/pages/projects/ukmik.svg",
    badges: ["JavaScript", "React JS", "Tailwind CSS"],
    githubLink: "https://github.com/UKM-IK",
  },
  {
    title: "Mindful Work",
    description:
      "MindfulWork is a digital platform dedicated to helping workers address their mental health issues. Our mission is to address mental health issues among workers by providing a comprehensive platform that supports mental health in a professional environment.",
    imgSrc: "/src/pages/projects/mindfulwork.svg",
    badges: ["Bootstrap"],
    githubLink: "https://github.com/ridhwancahyadi/Mindful-Work",
  },
  {
    title: "Medical Checkup",
    description:
      "RSMedicalCheckup is a simple medical checkup management website. This simple website allows users to manage patient, doctor, and medical checkup data efficiently. Please note that this project is part of the campus project assignment in the Server Side Programming course.",
    imgSrc: "/src/pages/projects/rsmc.svg",
    badges: ["PHP", "JavaScript", "SQL"],
    githubLink: "https://github.com/ridhwancahyadi/RSMedicalCheckup",
  },
];

const Projects = () => {

  const [showAll, setShowAll] = useState(false);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

  return (
    <div className="my-[100px]">
      <div className="flex flex-col text-left justify-between pt-8 w-11/12 mx-auto">
        <div className="text-center mb-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 inline bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text">
            Featured Projects
          </h1>
          <p className="text-[#a5a5a5] mt-2 text-md md:text-lg lg:w-3/12 w-8/12 mx-auto mb-10">
            Discover the highlights of my professional portfolio and creative work.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-10/12 mx-auto content-center  justify-items-center">
      {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
          <div key={index} className="w-full  flex flex-col justify-center rounded-xl p-3 bg-gradient-to-b from-[#06181d] to-[#00171d] text-[#d5d5d5]">
            <img src={project.imgSrc} alt={project.title} className="w-full rounded-md bg-[#001115] h-200" />
            <div>
              <h3 className="mt-2 font-bold text-xl">{project.title}</h3>
              <div className="flex flex-wrap gap-2 my-3">
                {project.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} variant="custom">
                    {badge}
                  </Badge>
                ))}
              </div>
              <div>
                <p className="text-sm font-light">{truncateText(project.description, 20)}</p>
              </div>
              <div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:opacity-75 mt-5 border ${buttonVariants({ variant: "custom4" })}`}
                >
                  Explore on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
        {projects.length > 3 && (
                <div className="text-center mt-24 text-[#d5d5d5]">
                    <button 
                        onClick={handleToggleShowAll} 
                        className={`border ${buttonVariants({ variant: "custom5" })}`}
                    >
                        {showAll ? "Show Less" : "View All"}
                    </button>
                </div>
            )}
    </div>
  );
}

export default Projects;
