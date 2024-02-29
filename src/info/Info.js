import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import logo from "../img/SRlogo-removebg.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Soundhar",
    lastName: "Rajan",
    initials :logo,
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Software Developer"
        },
        {
            emoji: "📧",
            text: "soundhar00001@gmail.com"
        }
    ],
    socials: [
        {
            link: "",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/SoundhararajanL",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/soundhararajan-l-75786723b/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
    ],
    bio: "👋 Hello, I'm Soundhararajan L, a software engineer . 💻 Experienced in React, Django, Python, and JavaScript. 📊",
    skills: {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'Google Script']
    },
    hobbies: [
        {
            label: 'riding',
            emoji: '🏍️ '
        },
        {
            label: 'GYM',
            emoji: '💪🏼'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'travelling',
            emoji: '🛩🗺'
        }
    ],
    portfolio: [
        {
            title: "Perfect App",
            live: "https://quiet-chaja-518a79.netlify.app/",
            source: "https://github.com/SoundhararajanL/Perfect-Application",
            image: mock1
        },
        
    ]
};
