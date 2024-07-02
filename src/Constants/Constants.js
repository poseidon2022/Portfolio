import project1 from '../asset/Online mar.png'
import project2 from '../asset/garden control.png'
import project3 from '../asset/comp_arch.png'


export const HERO_CONTENT = `An Electrical and Computer Engineering student at Addis Ababa University with strong academic standing.
A highly motivated enthusiast and a conscientious team worker who understands the importance of carrying
out my duties at high standards. Possess strong leadership and communication skills and keen to pursue a
career in Professional Services as per my qualifications`;

export const ABOUT_TEXT = `I am a dedicated and versatile computer engineer with a passion for creating efficient and user-friendly solutions. I have worked with a variety of technologies, including React, Python, C++, Node.js, MySQL, and MongoDB. My journey in computer engineering began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "06/2023 - Present",
    role: "International Service Directorship of Rotaract club of Lewet",
    company: "Rotaract Ethiopia.",
    description: `Playing a crucial role in facilitating collaborations with other Rotaract clubs around the globe`,
  },
  {
    year: "04/2023 - Present",
    role: "AI Engineering Intern",
    company: "Minnovation",
    description: `AI Engineering Intern working to bring about a positive change in my community.`
  },
  {
    year: "08/2023 - 11/2023",
    role: "Millennium fellow of 2023, Emerging Technologist",
    company: "Millennium Campus Network",
    description: `Millennium Fellow of 2023 and worked on one of United Nations’ SDGs, Education and served as an Emerging Technologist for the Millennium Fellowship class of 2023`
  },
];

export const PROJECTS = [
  {
    title: "SAP Processor Design",
    image: project3,
    description:
      "A simple computer processor based on the 8086 architecture and can perform basic arithmetic and logical operations.",
    technologies: ["Proteus"],
  },
  {
    title: "Automatic Garden Control",
    image: project2,
    description:
      "A simple garden automation system with LPC2438 core microprocessor and various other modules.",
    technologies: ["Proteus", "C++", "IAR Workbench"],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MySQL"],
  }
];

export const CONTACT = {
  address: "KING GEORGE IV Street, Addis Ababa, Ethiopia ",
  phoneNo: "+251909551265 ",
  email: "kidusm3l@gmail.com",
};