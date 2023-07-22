//  DO NOT REMOVE / DELETE ANY VARIABLE !!!

// NOTE:
// declare a variable null then it won't show up
// example:
// export const my_whatsapp = null;
// AGAIN, DO NOT REMOVE / DELETE ANY VARIABLE !!!
// Some vlues cannot be null, lookout carefully for those

// OVERALL INFORMATION
export const my_name = "Aishwarya Tewari"; //cannot be null
export const my_resume_file = "resume.pdf"; // can be null
// if you wanna show your resume put that file in public folder and change my_resume_file value to its name

//SOCIALS
export const my_email = "aishwarya.tewari19@gmail.com"; // can be null
export const my_whatsapp = "+918777501356"; // can be null
export const my_github = "AishwaryaT19"; // can be null
export const my_instagram = "aishwarya_tewari"; // can be null
export const my_linkedin = "aishwarya-tewari-33a6911b9"; // can be null

//HOME PAGE
export const home_hello = "Hi, my name is"; //cannot be null
export const home_sub_heading = "I build things for the web."; //can be null
export const home_desc =
  "I'm a software engineer specializing in building exceptional digital experiences."; // can be null
export const home_links = [
  {
    text: "exceptional digital experiences",
    link: "https://youtu.be/dQw4w9WgXcQ?t=43",
  },
]; // can be null
//format: an array of objects [{}, {},...], each object will have 2 properties text and link -> {text:"", link: ""}
//    text property will tell what text you want to be selected (every occurance will be selected)
//    link property will tell the hyperlink you want to add to that text

//ABOUT PAGE
// you can use backtick -> ` <- if you want to write multiple lines/paragraphs in about me, just as I have used
export const about_me = `Hello! My name is Aishwarya and I take great interest in the matters of the web. I have led the R&D team of Sketch Club and was part of it's web development team.`;
// about me cannout be null
export const about_me_links = [
  { text: "Sketch Club", link: "https://sketchclub.dev" },
]; //can be null
//format: an array of objects [{}, {},...], each object will have 2 properties text and link -> {text:"", link: ""}
//    text property will tell what text you want to be selected (every occurance will be selected)
//    link property will tell the hyperlink you want to add to that text
export const about_me_exp = [
  "JavaScript (ES6+)",
  "React",
  "TypeScript",
  "Next.js",
  "Sass",
];
// about_me_exp is an array of technologies you have worked with
// can only contain maximum of 10 elements
export const about_photo_name = "me.png";
// put your photo in "public" folder and store the photos name in about_photo_name

//EXPERIENCE
export const experience_heading = "Where I've Worked";
export const experiences = [
  {
    role: " R&D Lead",
    company: "Sketch Club",
    duration: "August 2022 - February 2023",
    website: "https://sketchclub.dev", // can be null
    list: [
      "Developed the Sketch Website ",
      "Helped Establishing Development Community",
    ],
  },
]; // cannot be null
//format: an array of objects [{}, {},...], each object will have 5 properties as follows:
//    role property - your job title/role
//    company - name of company you worked in
//    duration - the time period in which you worked in the company
//    website - the website of the company - it can be null also
//    list - points you wanna mention - its an array of strings - ["", "", ...] - cannot be null

//WORK PAGE
export const work_heading = "Some things I've built";
export const work_projects = [
   {
    title: "CleanTank's Website",
    desc: " A website of a tank cleaning and service company, design inspired by prague.",
    tech_stack: ["Next.JS", "TypeScript", "Sass"],
    picture: "cleantank.png",
    links: {
      github: "https://github.com/gobindgalaxy/cleanTank",
      website: "https://cleantankservices.com"
    }
  },
  {
    title: "Radiant's Website",
    desc: "An  ISR based e-commerce website for shooping from Radiant ( a small business)",
    tech_stack: ["Next.JS", "TypeScript", "Sass"],
    picture: "radiant.png",
    links: {
      github: "https://github.com/AishwaryaT19/Radiant",
      website: "https://radiant-tau.vercel.app/"
    }
  },
  {
    title: "Sketch Club's Website",
    desc: "A website for my college club. It is a dynamic website made with Next.js and Contentful.",
    tech_stack: [
      "Next.JS",
      "React-Query",
      "GraphQL",
      "Contentful",
      "TypeScript",
    ],
    picture: "sketch.webp",
    links: {
      github: "https://github.com/SketchClub/website",
      website: "https://sketchclub.dev",
    },
  },
  {
    title: "Expense Tracker",
    desc: "This application allows you to track your day to day expenses and helps gain an insight into your daily income and expenditure.",
    tech_stack: ["React", "Local-Storage managemant", "Sass"],
    picture: "expense_tracker.png",
    links: {
      github: "https://github.com/AishwaryaT19/ET",
      website: "https://expense-tracker-eta-six.vercel.app/",
    },
  },
];

//EXTRA-CURRICULAR PAGE
export const extra_heading = "Poetry";
//can be null
//if null, it wont be there on website
// I couldn't think of any way to make this customisable.. so im sorry :(
export const extra_link = "http://surl.li/gbvkq";

//CONTACT PAGE
export const cont_heading_one = "What's Next?"; // cannot be null
export const cont_heading_two = "Get In Touch."; // cannot be null
export const cont_desc = `I am Actively looking for job oppurtunities to prove my skills and grow in my field of interest.`; // cannot be null
export const cont_email_btn = "Say Hello";
