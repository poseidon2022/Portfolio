import project1 from '../asset/computer vision.jpg'
import project2 from '../asset/branch predictor.png'
import project3 from '../asset/comp_arch.png'


export const HERO_CONTENT = `An Electrical and Computer Engineering graduate from Addis Ababa University with strong academic standing.
A highly motivated enthusiast and a conscientious team worker who understands the importance of carrying
out my duties at high standards. Possess strong leadership and communication skills and keen to pursue a
career in Professional Services as per my qualifications`;

export const ABOUT_TEXT = `I am a dedicated and versatile computer engineer with a passion for creating efficient and user-friendly solutions. I have worked with a variety of technologies, including React, Python, C++, Node.js, MySQL, and MongoDB. My journey in computer engineering began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "01/2025 - 05/2025",
    role: "Project Manager and Backend Developer",
    company: "Weyratech.",
    description: `Led a cross-functional team of 5 developers in building a talent-employer matchmaking platform from the ground up.`,
  },
  {
    year: "10/2024 - 04/2025",
    role: "Backend Engineering Intern",
    company: "Mereb Technologies",
    description: `Collaborated with a team of 4 to develop an application tracking system projected to reduce recruitment
processing time by more than 30%`
  },
  {
    year: "10/2024 - 01/2025",
    role: "HPC Management and Maintenance Intern ",
    company: "Addis Ababa Institute of Technology",
    description: `Managing the reliability and performance of a cluster of 8 NVIDIA DGX-1 servers, enabling 5 researchers to
efficiently curate, label, document, and store datasets for high-impact AI research projects.`
  },
];

export const PROJECTS = [
  {
    title: "Evidence-Based Static Branch Predictor",
    image: project2,
    description:
      "Leveraged GNNs to capture complex program execution patterns, achieving a 23% average miss rate for hard-to-predict branches, significantly outperforming traditional heuristic-based predictors",
    technologies: ["C++", "LLVM IR", "Python", "PinTool", "Pytorch Geometric"],
  },
  {
    title: "SAP Processor Design",
    image: project3,
    description:
      "A simple computer processor based on the 8086 architecture and can perform basic arithmetic and logical operations.",
    technologies: ["Proteus"],
  },
  {
    title: "AI Virtual Mouse Using OpenCV",
    image: project1,
    description:
      "Developed a virtual mouse system powered by computer vision, enabling cursor control, click, and scroll functionalities using hand gestures and eliminating the need for physical interaction",
    technologies: ["Python", "OpenCV", "MediaPipe", "Node.js", "MySQL"],
  }
];

export const CONTACT = {
  address: "KING GEORGE VI Street, Addis Ababa, Ethiopia ",
  phoneNo: "+251909551265 ",
  email: "kidusm3l@gmail.com",
};