export type GalleryImage = {
	src: string;
	alt: string;
	caption: string;
	credit?: string;
};

export type EducationEntry = {
	place: string;
	credential: string;
	note: string;
	when?: string;
};

export type Checkpoint = {
	id: string;
	label: string;
	title: string;
	body: string | string[];
	detail: string;
	gallery?: GalleryImage[];
	entries?: EducationEntry[];
	entriesSide?: "left" | "right";
	highlights?: { value: string; label: string }[];
};

export const checkpoints: Checkpoint[] = [
	{
		id: "about",
		label: "About",
		title: "About me",
		body: [
			"I'm Ritvik, a data science student at UC San Diego. Most of what I do is machine learning, AI, and software, like computer vision, web apps, and mobile apps. I've also taught and mentored other students.",
			"I'm from Santa Clara. I like making things, from software projects to 3D animations and CAD models. Off the computer, you'll usually find me playing violin, playing badminton, or watching football with my friends.",
		],
		detail: "",
		gallery: [
			{
				src: "/about/geisel.jpg",
				alt: "Geisel Library at UC San Diego",
				caption: "Geisel Library",
				credit: "Stephen Bay, CC BY 4.0",
			},
			{
				src: "/about/hdsi.jpg",
				alt: "Aerial view of the Halıcıoğlu Data Science Institute at UC San Diego",
				caption: "HDSI",
				credit: "UC San Diego HDSI",
			},
			{
				src: "/about/niners.jpg",
				alt: "With friends at 49ers training camp",
				caption: "49ers training camp",
			},
		],
	},
	{
		id: "projects",
		label: "Projects",
		title: "Projects",
		body: [
			"These are some of the projects I've picked up over the years: Nodestra for voice-guided indoor navigation, Keydance as a typing performance analyzer, Think Fast as an interactive quiz bowl platform for elementary students, and more.",
			"Click a tile to open it. You'll get the screenshot and a short note on what it is, plus a link when there's a public repo or site.",
		],
		detail: "",
	},
	{
		id: "education",
		label: "Education",
		title: "Education",
		body: "",
		detail: "",
		entries: [
			{
				place: "UC San Diego",
				credential: "B.S. in Data Science",
				note: "I'm at the Halıcıoğlu Data Science Institute, studying machine learning, AI, and software.",
			},
			{
				place: "Santa Clara High School",
				credential: "49ers STEM Leadership Institute",
				note: "A six-year program with the 49ers Foundation and the Silicon Valley Education Foundation. We started in 7th grade at Cabrillo, took harder math and science together, built things in the engineering lab, and finished with AP Seminar and AP Research.",
			},
		],
		gallery: [
			{
				src: "/education/ucsd.jpg",
				alt: "Geisel Library at UC San Diego in daylight",
				caption: "UC San Diego",
				credit: "Westxtk, CC BY-SA 4.0",
			},
			{
				src: "/education/santa-clara.jpg",
				alt: "Santa Clara High School campus and marquee",
				caption: "Santa Clara High School",
			},
		],
	},
	{
		id: "experience",
		label: "Experience",
		title: "Experience",
		body: "",
		detail: "",
		entriesSide: "right",
		gallery: [
			{
				src: "/experience/kumon.jpg",
				alt: "Storefront of a Kumon Math and Reading Center",
				caption: "Kumon",
				credit: "Dwight Burdette, CC BY 3.0",
			},
			{
				src: "/experience/lab.jpg",
				alt: "STEM lab with a ShopBot and drill press",
				caption: "STEM lab",
			},
			{
				src: "/experience/raft.jpg",
				alt: "RAFT workroom where classroom kits are assembled",
				caption: "RAFT",
			},
		],
		entries: [
			{
				place: "Kumon",
				credential: "Instructor and Grader",
				when: "July 2023 to February 2024",
				note: "Worked with students on math and reading, graded assignments, and helped them through concepts they were stuck on.",
			},
			{
				place: "Santa Clara High School STEM Program",
				credential: "Student Teacher",
				when: "Summer 2024, Summer 2025",
				note: "Worked in the STEM lab across multiple summers (200+ hours), helping students with design-build projects. I coached them through the design process, CAD/CAM, and how to use the shop machines safely. I also helped shape lab curriculum and lesson plans.",
			},
			{
				place: "RAFT",
				credential: "Volunteer",
				when: "2022–2023",
				note: "Resource Area for Teaching is a San Jose nonprofit that turns donated materials into hands-on kits for classrooms. I assembled those supply kits so a teacher could open the box and start a lesson.",
			},
		],
	},
	{
		id: "contact",
		label: "Contact",
		title: "Contact me",
		body: "Thank you for reading. Please don't hesitate to reach out to connect or if you have any questions!",
		detail: "",
	},
];
