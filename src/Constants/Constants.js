import project1 from '../asset/computer vision.jpg'
import project2 from '../asset/branch predictor.png'
import project3 from '../asset/comp_arch.png'


export const HERO_CONTENT = `Aspiring Computer Science and Engineering Ph.D. student at UofM with a strong foundation in computer architecture and a
passion for advancing the integration of machine learning in hardware design and optimization. Seeking
opportunities to explore innovative solutions at the intersection of efficient computation, artificial intelligence, and
system-level performance. Driven to contribute to cutting-edge research that bridges theoretical advancements
with practical applications in computational systems.`;

export const ABOUT_TEXT = `I am a dedicated and versatile computer engineer currently working as a Graduate Student Research Assistant focusing on computer and memory architectures. My work centers on bridging the gap between modern AI workloads and efficient hardware execution, exploring how specialized architectures and accelerators can unlock new performance frontiers.
I have a strong foundation in low-level programming, including SystemVerilog and C++, and a deep passion for computer architecture, hardware design, and performance optimization. I thrive in collaborative, research-driven environments and enjoy solving complex, multidisciplinary problems. Outside of work, I stay active and continuously explore emerging technologies that inspire new ways to improve computational efficiency and system design.`;

export const EXPERIENCES = [
  {
    year: "08/2025 - present",
    role: "Graduate Student Research Assistant",
    company: "University of Michigan, Computer Science and Engineering Department",
    description: `Conduct research on specialized hardware accelerators for AI workloads, focusing on improving performance, energy efficiency, and scalability.`,
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
    links: "https://github.com/poseidon2022/EBSBP-Using-GNNs",
  },
  {
    title: "SAP Processor Design",
    image: project3,
    description:
      "A simple computer processor based on the 8086 architecture and can perform basic arithmetic and logical operations.",
    technologies: ["Proteus"],
    links: "https://github.com/poseidon2022/Processor_Design"
  },
  {
    title: "AI Virtual Mouse Using OpenCV",
    image: project1,
    description:
      "Developed a virtual mouse system powered by computer vision, enabling cursor control, click, and scroll functionalities using hand gestures and eliminating the need for physical interaction",
    technologies: ["Python", "OpenCV", "MediaPipe", "Node.js", "MySQL"],
    links: "https://github.com/poseidon2022/AI-Virtual-Mouse",
  }
];

export const CONTACT = {
  address: "1757 Cram Circle, Ann Arbor, MI 48105",
  phoneNo: "(734) 972-7114",
  email: "kidusm3l@gmail.com",
};