export const profile ={
    name: "Onyia Kamsiyochukwu",
    role: "Senior Developer",
    tagline: "I build clean, responsive interfaceswith react and tailwindcss.",
    location : "Enugu Nigeria",
    email:"onyiakamsi9@gmail.com",

    about : [
        "I started Learning Web Decelopment in 2021 and fell in lovewith buildingthings that people can actually use",
       "I am working through a twelve week React-course, building afinished project everyday and publishing it on github",

    ],

    links:[

        {label: "GitHub",
            url: "https://github.com/kam-ben"
        }
    ]
};

export const skills =[
    {name: "HTML", category: "Foundations", level:4},
    {name: "CSS", category: "Foundations", level:4},
    {name: "Javascript", category: "Foundations", level:3},
    {name: "React", category: "libraries", level:2},
    {name: "Tailwind css", category: "libraries", level:3},
    {name: "Git and GitHub", category: "Tools", level:3},
    {name: "VS Code", category: "Tools", level:4},
    {name: "npm", category: "Tools", level:3}

]

export const projects =[
    {
        id:1,
        title: "Welcome Profile Card",
        discription: "A responsive profile card with resuable button styles and a data-driven skill list.",
        tech: ["React", "Tailwind CSS"],
        repo: "https://github.com/kam-ben",
        featured: false
    },

     {
        id:2,
        title: "Team Directory",
        discription: "A grid of team cards that changes from 1 to 4 columns, built from a data file",
        tech: ["React", "Tailwind CSS", "Flexbox", "Grid"],
        repo: "https://github.com/kam-ben",
        featured: false
    },

     {
        id:3,
        title: "Bill Split Receipts",
        discription: "Receipts cards whose totals come fromsmall, tested helper functions",
        tech: ["React", "Tailwind CSS", "Flexbox", "Grid"],
        repo: "https://github.com/kam-ben",
        featured: false
    },

     {
        id:4,
        title: "Product Catalog",
        discription: "A catalog grouped by category, with sorting and statistics computed using map, filter and reduce.",
        tech: ["React", "Tailwind CSS", "Array methods"],
        repo: "https://github.com/kam-ben",
        featured: true
    }
]