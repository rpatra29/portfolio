export type ProjectMedia = {
	src: string;
	label: string;
	alt: string;
};

export type Project = {
	id: string;
	name: string;
	summary: string;
	site?: string;
	github?: string;
	media: ProjectMedia[];
};

export const projects: Project[] = [
	{
		id: "nodestra",
		name: "Nodestra",
		site: "https://nodestra.com",
		summary:
			"I built the voice AI layer for indoor navigation in big, confusing spaces like airports. People can scan a QR code, call a number, or use the app and talk to a multilingual agent instead of struggling with signs or language barriers.",
		media: [
			{
				src: "/projects/nodestra.png",
				label: "Nodestra",
				alt: "Nodestra landing page",
			},
		],
	},
	{
		id: "keydance",
		name: "Keydance",
		github: "https://github.com/rpatra29/keydance",
		summary:
			"A typing speed and accuracy tracker that runs in the background. It uses ML and NLP to tell real typing apart from when you're thinking or done, and can flag typos that don't fit the sentence (like who vs how).",
		media: [
			{
				src: "/projects/keydance.jpg",
				label: "Keydance",
				alt: "Keydance onboarding screen",
			},
		],
	},
	{
		id: "thinkfast",
		name: "Think Fast",
		github: "https://github.com/rpatra29/quizbowl",
		summary:
			"A quiz bowl-style platform I built with classmates for a Title I school in our district. It's a no-stress way for kids to practice and get excited about learning without the pressure of a real competition.",
		media: [
			{
				src: "/projects/thinkfast.png",
				label: "Think Fast",
				alt: "Think Fast quiz bowl classroom interface",
			},
		],
	},
	{
		id: "docklet",
		name: "Docklet",
		github: "https://github.com/rpatra29/docklet",
		summary:
			"An open-source dynamic island for Mac I built because I couldn't find one that did what I wanted. Weather, now playing, system info, clipboard history, and quick capture in one lightweight SwiftUI notch utility.",
		media: [
			{
				src: "/projects/docklet-music.jpg",
				label: "Docklet · Now playing",
				alt: "Docklet showing Apple Music in the notch",
			},
			{
				src: "/projects/docklet-weather.jpg",
				label: "Docklet · Weather",
				alt: "Docklet showing weather in the notch",
			},
		],
	},
];
