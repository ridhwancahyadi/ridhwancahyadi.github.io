import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const certifications = [
    {
      name: "TensorFlow Developer Certificate",
      date: 'May 2024',
      organization:
        "TensorFlow Certificate Program",
      badges: [ "Python", "TensorFlow", " Image Classification", "NLP", "Time Series Sequences and Predictions"],
      imgSrc: "/src/pages/certificate/tfd.svg",
      link: "https://www.credential.net/0522ece6-6a16-44d3-b22b-e4d74e677718#gs.b7erdg",
    },
    {
      name: "Machine Learning Cohort Graduate",
      date: 'Jan 2024',
      organization:
        "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      badges: ["TensorFlow", "Mathematics", "Machine Learning", "Deep Learning", "Python", "Data Analytics"],
      imgSrc: "/src/pages/certificate/bangkit.svg",
      link: "https://github.com/ridhwancahyadi",
    },
    {
      name: "DeepLearning.AI TensorFlow Developer Specialization",
      date: 'Nov 2023',
      organization:
        "Coursera",
      badges: [ "Python", "TensorFlow", " Image Classification", "NLP", "Time Series Sequences and Predictions"],
      imgSrc: "/src/pages/certificate/deeplearning ai developer.svg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/BD7BW8M6XHNP",
    },
    {
      name: "Machine Learning Specialization",
      date: 'Oct 2023',
      organization:
        "Coursera",
      badges: ["Machine Learning", "Mathematics", "Python"],
      imgSrc: "/src/pages/certificate/machine learning spesialization.svg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HDBFKRZ5JK2V",
    },
    {
      name: "TensorFlow: Data and Deployment",
      date: 'Nov 2023',
      organization:
        "Coursera",
      badges: ["TensorFlow", "TFJS", "Machine Learning", "Deep Learning"],
      imgSrc: "/src/pages/certificate/tensorflow data and deployment.svg",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SSKUFSGGC8QP",
    },
    {
        name: "Mathematics for Machine Learning and Data Science",
        date: 'Sep 2023',
        organization:
          "Coursera",
        badges: ["Mathematics", "Statistics", "Python"],
        imgSrc: "/src/pages/certificate/mathematics for machine learning.svg",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/LBAUUXHJTWMA",
      },
    {
        name: "Crash Course On Python",
        date: 'Aug 2023',
        organization:
        "Coursera",
        badges: ["Python"],
        imgSrc: "/src/pages/certificate/crash course on python.svg",
        link: "https://www.coursera.org/account/accomplishments/certificate/9KFRH2EW2SNL",
    },
    {
        name: "Share Data Through the Art of Visualization",
        date: 'Sep 2023',
        organization:
        "Coursera",
        badges: ["Visualization"],
        imgSrc: "/src/pages/certificate/share data through the art of visualization.svg",
        link: "https://www.coursera.org/account/accomplishments/certificate/LCDJKV57S7NU",
    },
    {
      name: "Belajar Visualisasi Data",
      date: 'Nov 2023',
      organization:
        "Dicoding",
      badges: ["Visualization"],
      imgSrc: "/src/pages/certificate/visualisasi data.svg",
      link: "https://www.dicoding.com/certificates/NVP77Y29OPR0",
    },
];

const Certificate = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="my-[100px]">
            <div className="flex flex-col text-left justify-between pt-8 w-11/12 mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 inline bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text">
                        Licenses & Certifications
                    </h1>
                    <p className="text-[#a5a5a5] mt-2 text-md md:text-lg lg:w-3/12 w-8/12 mx-auto mb-10">
                        My Professional Journey Through Empowering Certifications.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-10/12 mx-auto content-center justify-items-center">
                {certifications.slice(0, showAll ? certifications.length : 3).map((certificate, index) => (
                    <div key={index} className="w-full rounded-xl p-3 bg-gradient-to-b from-[#06181d] to-[#00171d] text-[#d5d5d5]">
                        <img src={certificate.imgSrc} alt={certificate.name} className="w-full rounded-md bg-[#001115] " style={{objectFit: 'contain' }} />
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="mt-2 font-bold text-lg">{certificate.name}</h3>
                                <h3 className="mt-2 text-right text-md italic">{certificate.date}</h3>
                            </div>
                            <div>
                                <h5 className="mt-2 font-semibold text-md">{certificate.organization}</h5>
                            </div>
                            <div className="flex flex-wrap gap-2 my-3">
                                {certificate.badges.map((badge, badgeIndex) => (
                                    <Badge key={badgeIndex} variant="custom">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                            <div>
                                <a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`hover:opacity-75 mt-5 border ${buttonVariants({ variant: "custom4" })}`}
                                >
                                    Show Credential
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {certifications.length > 3 && (
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
};

export default Certificate;
