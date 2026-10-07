/* =====================================================
   NEXTSTEP – CAREER GUIDE
   JAVASCRIPT
===================================================== */


/* =====================================================
   CAREER DATA
===================================================== */

const careers = {

    "Software Development": {

        category: "technology",

        icon: "💻",

        description:
            "Design, build, test and maintain software applications.",

        skills: [
            "Programming",
            "Data Structures",
            "Algorithms",
            "Git & GitHub",
            "Databases",
            "APIs",
            "Problem Solving"
        ],

        tools: [
            "VS Code",
            "Git",
            "GitHub",
            "Java / Python / JavaScript",
            "SQL",
            "Postman"
        ],

        education:
            "B.Tech / BCA / B.Sc / MCA or equivalent skills",

        exams:
            "Entrance exams depend on the chosen degree.",

        roles:
            "Software Developer, Backend Developer, Application Developer",

        higher:
            "M.Tech, MCA, MS, MBA or specialized certifications",

        salary:
            "Entry-level salaries vary by company, role and skills.",

        growth:
            "Developer → Senior Developer → Tech Lead → Architect / Engineering Manager",

        roadmap: [
            "Choose Programming",
            "Learn Data Structures",
            "Learn Git & GitHub",
            "Build Projects",
            "Practice DSA",
            "Internship",
            "Fresher Job"
        ]

    },


    "Full Stack Development": {

        category: "technology",

        icon: "🌐",

        description:
            "Build complete web applications across frontend, backend and databases.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Backend",
            "APIs",
            "Databases"
        ],

        tools: [
            "VS Code",
            "GitHub",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL"
        ],

        education:
            "B.Tech / BCA / B.Sc / MCA or equivalent practical skills",

        exams:
            "No specific career exam is mandatory.",

        roles:
            "Frontend Developer, Backend Developer, Full Stack Developer",

        higher:
            "MCA, M.Tech, MS or specialization courses",

        salary:
            "Varies significantly based on skills, location and employer.",

        growth:
            "Junior Developer → Full Stack Developer → Senior Developer → Lead",

        roadmap: [
            "HTML & CSS",
            "JavaScript",
            "Frontend Framework",
            "Backend",
            "Database",
            "Projects",
            "Internship",
            "Job"
        ]

    },


    "AI / ML": {

        category: "technology",

        icon: "🤖",

        description:
            "Develop intelligent systems using machine learning, statistics and data.",

        skills: [
            "Python",
            "Statistics",
            "Linear Algebra",
            "Machine Learning",
            "Deep Learning",
            "Data Processing"
        ],

        tools: [
            "Python",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "TensorFlow",
            "PyTorch"
        ],

        education:
            "B.Tech / B.Sc / BCA / Mathematics / Statistics and related degrees",

        exams:
            "Degree entrance exams depend on institution.",

        roles:
            "ML Engineer, AI Engineer, Data Scientist, Research Engineer",

        higher:
            "M.Tech AI/ML, MS, PhD and research programs",

        salary:
            "Compensation varies based on experience and specialization.",

        growth:
            "ML Engineer → Senior ML Engineer → AI Lead → Research / Architecture",

        roadmap: [
            "Python",
            "Statistics",
            "Linear Algebra",
            "Machine Learning",
            "Deep Learning",
            "Projects",
            "Internship",
            "Job / Research"
        ]

    },


    "Data Analytics": {

        category: "technology",

        icon: "📊",

        description:
            "Use data to identify patterns and support business decisions.",

        skills: [
            "Excel",
            "SQL",
            "Statistics",
            "Python",
            "Data Cleaning",
            "Visualization",
            "Business Understanding"
        ],

        tools: [
            "Excel",
            "SQL",
            "Python",
            "Pandas",
            "Power BI",
            "Tableau"
        ],

        education:
            "Any relevant degree with strong analytical skills can be useful.",

        exams:
            "No single mandatory career exam.",

        roles:
            "Data Analyst, BI Analyst, Reporting Analyst, Business Analyst",

        higher:
            "MBA Analytics, MS Analytics, Data Science programs",

        salary:
            "Depends on skills, company, location and experience.",

        growth:
            "Analyst → Senior Analyst → Analytics Lead → Data / BI Manager",

        roadmap: [
            "Excel",
            "SQL",
            "Statistics",
            "Python",
            "Visualization",
            "Dashboard Projects",
            "Internship",
            "Job"
        ]

    },


    "DevOps": {

        category: "technology",

        icon: "⚙️",

        description:
            "Automate software delivery, infrastructure, deployment and operations.",

        skills: [
            "Linux",
            "Git",
            "CI/CD",
            "Docker",
            "Kubernetes",
            "Cloud",
            "Monitoring"
        ],

        tools: [
            "GitHub",
            "Jenkins",
            "Docker",
            "Kubernetes",
            "Helm",
            "Prometheus",
            "Grafana"
        ],

        education:
            "B.Tech / BCA / B.Sc or relevant technical background",

        exams:
            "No specific DevOps entrance examination.",

        roles:
            "DevOps Engineer, Cloud Engineer, Platform Engineer, SRE",

        higher:
            "Cloud certifications, M.Tech, MS and specialized programs",

        salary:
            "Varies according to cloud skills, experience and company.",

        growth:
            "DevOps Engineer → Senior → Platform/SRE Lead → Cloud Architect",

        roadmap: [
            "Linux",
            "Git & GitHub",
            "CI/CD",
            "Docker",
            "Kubernetes",
            "Cloud",
            "Monitoring",
            "Projects",
            "Internship"
        ]

    },


    "Cloud Computing": {

        category: "technology",

        icon: "☁️",

        description:
            "Design, deploy and manage applications and infrastructure on cloud platforms.",

        skills: [
            "Linux",
            "Networking",
            "Cloud Fundamentals",
            "Security",
            "Containers",
            "Automation"
        ],

        tools: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Docker",
            "Kubernetes",
            "Terraform"
        ],

        education:
            "B.Tech / BCA / B.Sc and technical certifications are useful.",

        exams:
            "No mandatory cloud-specific entrance exam.",

        roles:
            "Cloud Engineer, Cloud Administrator, Cloud Architect",

        higher:
            "Cloud certifications, M.Tech, MS",

        salary:
            "Depends on cloud platform expertise and experience.",

        growth:
            "Cloud Engineer → Senior → Cloud Architect → Cloud Lead",

        roadmap: [
            "Linux",
            "Networking",
            "Cloud Fundamentals",
            "AWS / Azure / GCP",
            "Docker",
            "Kubernetes",
            "Projects",
            "Certification"
        ]

    },


    "Cybersecurity": {

        category: "technology",

        icon: "🔐",

        description:
            "Protect systems, applications, networks and data from cyber threats.",

        skills: [
            "Networking",
            "Linux",
            "Security Fundamentals",
            "Ethical Hacking",
            "Web Security",
            "Risk Management"
        ],

        tools: [
            "Linux",
            "Wireshark",
            "Burp Suite",
            "Nmap",
            "SIEM Tools"
        ],

        education:
            "B.Tech / BCA / B.Sc / Cybersecurity programs",

        exams:
            "Degree entrance requirements vary.",

        roles:
            "Security Analyst, SOC Analyst, Security Engineer, Penetration Tester",

        higher:
            "M.Tech Cybersecurity, MS Cybersecurity, security certifications",

        salary:
            "Varies based on specialization and experience.",

        growth:
            "Analyst → Security Engineer → Security Lead → Security Architect",

        roadmap: [
            "Networking",
            "Linux",
            "Security Basics",
            "Web Security",
            "Labs",
            "Certifications",
            "Internship",
            "Job"
        ]

    },


    "VLSI": {

        category: "electronics",

        icon: "🔬",

        description:
            "Design and verify integrated circuits and semiconductor systems.",

        skills: [
            "Digital Electronics",
            "Verilog",
            "SystemVerilog",
            "RTL Design",
            "Verification",
            "Computer Architecture"
        ],

        tools: [
            "Verilog",
            "SystemVerilog",
            "Vivado",
            "ModelSim",
            "Cadence",
            "Synopsys"
        ],

        education:
            "B.Tech ECE / EEE / related electronics branches",

        exams:
            "GATE can be relevant for higher studies and some opportunities.",

        roles:
            "RTL Engineer, Verification Engineer, Design Engineer",

        higher:
            "M.Tech VLSI, MS, PhD and semiconductor research",

        salary:
            "Depends on company, specialization and experience.",

        growth:
            "Design Engineer → Senior → Lead → Architect / Research",

        roadmap: [
            "Digital Electronics",
            "Verilog",
            "SystemVerilog",
            "RTL Design",
            "Verification",
            "Projects",
            "Internship",
            "VLSI Job"
        ]

    },


    "Embedded Systems": {

        category: "electronics",

        icon: "🔌",

        description:
            "Develop software and hardware systems for embedded devices.",

        skills: [
            "C",
            "C++",
            "Microcontrollers",
            "Embedded C",
            "Digital Electronics",
            "Communication Protocols"
        ],

        tools: [
            "Arduino",
            "STM32",
            "ESP32",
            "Keil",
            "MATLAB",
            "Oscilloscope"
        ],

        education:
            "B.Tech ECE / EEE / EIE / related branches",

        exams:
            "GATE can be useful for higher studies.",

        roles:
            "Embedded Engineer, Firmware Engineer, Automotive Engineer",

        higher:
            "M.Tech Embedded Systems, MS, research",

        salary:
            "Depends on domain, product company and experience.",

        growth:
            "Embedded Engineer → Senior → Lead → System Architect",

        roadmap: [
            "C Programming",
            "Electronics",
            "Microcontrollers",
            "Embedded C",
            "Protocols",
            "Projects",
            "Internship",
            "Job"
        ]

    },


    "PCB Design": {

        category: "electronics",

        icon: "🧩",

        description:
            "Design printed circuit boards used in electronic products.",

        skills: [
            "Circuit Design",
            "PCB Layout",
            "Electronics",
            "Signal Integrity",
            "Schematic Design"
        ],

        tools: [
            "Altium",
            "KiCad",
            "Eagle",
            "OrCAD"
        ],

        education:
            "ECE / EEE / Electronics related education",

        exams:
            "No specific mandatory exam.",

        roles:
            "PCB Designer, Hardware Design Engineer",

        higher:
            "M.Tech Electronics, Embedded Systems and related specializations",

        salary:
            "Depends on experience and specialization.",

        growth:
            "PCB Designer → Hardware Engineer → Senior Hardware Engineer",

        roadmap: [
            "Electronics",
            "Schematic Design",
            "PCB Basics",
            "PCB Layout",
            "Signal Integrity",
            "Projects",
            "Internship"
        ]

    },


    "RF Engineering": {

        category: "electronics",

        icon: "📡",

        description:
            "Work with radio frequency systems, wireless communication and antennas.",

        skills: [
            "Communication Systems",
            "Electromagnetics",
            "RF Circuits",
            "Antennas",
            "Signal Processing"
        ],

        tools: [
            "MATLAB",
            "ADS",
            "HFSS",
            "CST"
        ],

        education:
            "B.Tech ECE / EEE / related branches",

        exams:
            "GATE can support higher studies.",

        roles:
            "RF Engineer, Antenna Engineer, Wireless Engineer",

        higher:
            "M.Tech Communication / RF, MS, PhD",

        salary:
            "Depends on company and specialization.",

        growth:
            "RF Engineer → Senior → Lead → RF Architect",

        roadmap: [
            "Electromagnetics",
            "Communication",
            "RF Circuits",
            "Antennas",
            "Simulation",
            "Projects",
            "Internship"
        ]

    },


    "Government Jobs": {

        category: "government",

        icon: "🏛️",

        description:
            "Build a career through central, state, banking, railway, defence and public sector opportunities.",

        skills: [
            "Aptitude",
            "Reasoning",
            "English",
            "General Awareness",
            "Subject Knowledge",
            "Time Management"
        ],

        tools: [
            "Mock Tests",
            "Previous Papers",
            "Current Affairs",
            "Study Plans"
        ],

        education:
            "Eligibility varies by examination and post.",

        exams:
            "UPSC, SSC, Banking, Railways, Defence and State examinations.",

        roles:
            "Administrative, Banking, Technical, Defence and Public Sector roles",

        higher:
            "Further specialization depends on the selected service.",

        salary:
            "Depends on post, department and pay structure.",

        growth:
            "Career growth depends on service rules, examinations and promotions.",

        roadmap: [
            "Choose Exam",
            "Understand Syllabus",
            "Build Fundamentals",
            "Practice",
            "Mock Tests",
            "Exam",
            "Interview / Selection"
        ]

    },


    "Business / Entrepreneurship": {

        category: "business",

        icon: "💼",

        description:
            "Create and manage products, services or businesses.",

        skills: [
            "Communication",
            "Leadership",
            "Marketing",
            "Finance",
            "Problem Solving",
            "Sales"
        ],

        tools: [
            "Excel",
            "Canva",
            "Analytics",
            "CRM Tools",
            "Business Platforms"
        ],

        education:
            "Any degree can lead toward entrepreneurship.",

        exams:
            "No single mandatory exam.",

        roles:
            "Founder, Product Manager, Business Analyst, Sales and Marketing roles",

        higher:
            "MBA, Entrepreneurship programs and specialized courses",

        salary:
            "Highly variable depending on business and role.",

        growth:
            "Founder → Business Growth → Leadership / Scale",

        roadmap: [
            "Problem Identification",
            "Market Research",
            "Build Solution",
            "Test Product",
            "Launch",
            "Customers",
            "Scale"
        ]

    },


    "MBA": {

        category: "higher",

        icon: "📈",

        description:
            "A management pathway leading to careers in business, consulting, finance, marketing and operations.",

        skills: [
            "Communication",
            "Business Analysis",
            "Leadership",
            "Finance",
            "Marketing",
            "Strategy"
        ],

        tools: [
            "Excel",
            "PowerPoint",
            "Business Analytics",
            "Case Studies"
        ],

        education:
            "Bachelor's degree is generally required.",

        exams:
            "CAT, XAT, GMAT and other management entrance exams.",

        roles:
            "Business Analyst, Product Manager, Consultant, Marketing Manager",

        higher:
            "Specialized management programs and executive education",

        salary:
            "Varies significantly by institution, role and experience.",

        growth:
            "Analyst → Manager → Senior Manager → Leadership",

        roadmap: [
            "Bachelor's Degree",
            "Entrance Preparation",
            "MBA",
            "Internship",
            "Specialization",
            "Placement"
        ]

    },


    "MS / Research": {

        category: "higher",

        icon: "🧪",

        description:
            "Advanced study and research for students interested in specialization and innovation.",

        skills: [
            "Research",
            "Academic Writing",
            "Problem Solving",
            "Data Analysis",
            "Technical Knowledge"
        ],

        tools: [
            "Research Papers",
            "MATLAB",
            "Python",
            "Simulation Tools"
        ],

        education:
            "Relevant bachelor's degree followed by higher study admission.",

        exams:
            "Requirements vary by university and country.",

        roles:
            "Research Assistant, Research Engineer, Scientist",

        higher:
            "PhD and advanced research programs",

        salary:
            "Depends on research domain, institution and career path.",

        growth:
            "Researcher → Senior Researcher → Scientist / Professor / R&D Lead",

        roadmap: [
            "Bachelor's",
            "Choose Research Area",
            "Research Project",
            "MS / M.Tech",
            "Publications",
            "PhD / R&D"
        ]

    }

};


/* =====================================================
   CAREER EXPLORER
===================================================== */

function renderCareers(filter = "all") {

    const grid =
        document.getElementById("careerGrid");

    grid.innerHTML = "";

    Object.entries(careers).forEach(
        ([name, career]) => {

            if (
                filter !== "all" &&
                career.category !== filter
            ) {
                return;
            }

            const tags =
                career.skills
                    .slice(0, 3)
                    .map(
                        skill =>
                            `<span>${skill}</span>`
                    )
                    .join("");

            grid.innerHTML += `

                <article class="career-card">

                    <div class="career-icon">
                        ${career.icon}
                    </div>

                    <h3>${name}</h3>

                    <p>
                        ${career.description}
                    </p>

                    <div class="career-tags">
                        ${tags}
                    </div>

                    <button
                        onclick="showCareer('${name}')"
                    >
                        Explore Career →
                    </button>

                </article>

            `;
        }
    );
}


function filterCareers(filter, button) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );

    button.classList.add("active");

    renderCareers(filter);
}


/* =====================================================
   CAREER DETAILS
===================================================== */

function showCareer(name) {

    const career =
        careers[name];

    if (!career) {
        return;
    }

    const content =
        document.getElementById(
            "careerDetailsContent"
        );

    const saved =
        getSavedCareers().includes(name);

    content.innerHTML = `

        <div class="details-card">

            <div class="details-header">

                <div>

                    <span class="details-badge">
                        ${career.category.toUpperCase()}
                    </span>

                    <h2>
                        ${career.icon}
                        ${name}
                    </h2>

                    <p>
                        ${career.description}
                    </p>

                </div>

                <button
                    class="save-career"
                    onclick="saveCareer('${name}')"
                >
                    ${saved ? "♥ Saved" : "♡ Save Career"}
                </button>

            </div>


            <div class="career-info-grid">

                <div class="info-item">
                    <span>Education</span>
                    <strong>${career.education}</strong>
                </div>

                <div class="info-item">
                    <span>Entrance Exams</span>
                    <strong>${career.exams}</strong>
                </div>

                <div class="info-item">
                    <span>Salary</span>
                    <strong>${career.salary}</strong>
                </div>

                <div class="info-item">
                    <span>Growth</span>
                    <strong>${career.growth}</strong>
                </div>

            </div>


            <div class="details-columns">

                <div class="details-box">

                    <h3>Important Skills</h3>

                    <ul>
                        ${career.skills
                            .map(
                                skill =>
                                    `<li>✓ ${skill}</li>`
                            )
                            .join("")}
                    </ul>

                </div>


                <div class="details-box">

                    <h3>Tools & Technologies</h3>

                    <ul>
                        ${career.tools
                            .map(
                                tool =>
                                    `<li>⚙ ${tool}</li>`
                            )
                            .join("")}
                    </ul>

                </div>

            </div>


            <div class="details-box" style="margin-top:20px;">

                <h3>Job Roles</h3>

                <p>
                    ${career.roles}
                </p>

                <br>

                <h3>Higher Study Opportunities</h3>

                <p>
                    ${career.higher}
                </p>

            </div>


            <div class="details-box" style="margin-top:20px;">

                <h3>Recommended Career Roadmap</h3>

                <div class="detail-roadmap">

                    ${career.roadmap
                        .map(
                            step =>
                                `<span class="detail-step">${step}</span>`
                        )
                        .join("")}

                </div>

            </div>

        </div>
    `;


    document
        .getElementById("careerDetails")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =====================================================
   SAVED CAREERS
===================================================== */

function getSavedCareers() {

    return JSON.parse(
        localStorage.getItem(
            "nextstepSavedCareers"
        ) || "[]"
    );
}


function saveCareer(name) {

    let saved =
        getSavedCareers();

    if (saved.includes(name)) {

        saved =
            saved.filter(
                item => item !== name
            );

    } else {

        saved.push(name);
    }

    localStorage.setItem(
        "nextstepSavedCareers",
        JSON.stringify(saved)
    );

    updateSavedCareerList();

    showCareer(name);
}


function updateSavedCareerList() {

    const container =
        document.getElementById(
            "savedCareerList"
        );

    const saved =
        getSavedCareers();

    if (saved.length === 0) {

        container.innerHTML =
            "<p>No saved careers yet.</p>";

        return;
    }

    container.innerHTML =
        saved
            .map(
                career => `
                    <div class="saved-career-item">
                        <strong>${career}</strong>
                    </div>
                `
            )
            .join("");
}


/* =====================================================
   PROFILE
===================================================== */

function openProfileModal() {

    document
        .getElementById("profileModal")
        .classList.add("show");
}


function closeProfileModal() {

    document
        .getElementById("profileModal")
        .classList.remove("show");
}


function saveProfile(event) {

    event.preventDefault();

    const name =
        document.getElementById(
            "studentName"
        ).value;

    const education =
        document.getElementById(
            "educationLevel"
        ).value;

    const stream =
        document.getElementById(
            "studentStream"
        ).value;

    const subject =
        document.getElementById(
            "preferredSubject"
        ).value;

    const goal =
        document.getElementById(
            "careerGoal"
        ).value;


    const interests =
        Array.from(
            document.querySelectorAll(
                'input[name="interests"]:checked'
            )
        ).map(
            checkbox => checkbox.value
        );


    const profile = {

        name,
        education,
        stream,
        subject,
        goal,
        interests

    };


    localStorage.setItem(
        "nextstepProfile",
        JSON.stringify(profile)
    );


    updateProfileUI();

    closeProfileModal();

    alert(
        "Your NextStep profile has been saved!"
    );
}


function updateProfileUI() {

    const profile =
        JSON.parse(
            localStorage.getItem(
                "nextstepProfile"
            ) || "null"
        );

    if (!profile) {
        return;
    }


    document.getElementById(
        "profileName"
    ).textContent =
        profile.name;


    document.getElementById(
        "profileSummary"
    ).textContent =
        `${profile.education || "Student"} ${
            profile.stream
                ? "• " + profile.stream
                : ""
        } ${
            profile.goal
                ? "• Goal: " + profile.goal
                : ""
        }`;


    document.getElementById(
        "educationTag"
    ).textContent =
        profile.education ||
        "Education not selected";


    document.getElementById(
        "streamTag"
    ).textContent =
        profile.stream ||
        "Stream not selected";


    document.getElementById(
        "interestTag"
    ).textContent =
        profile.interests.length
            ? profile.interests.join(", ")
            : "Interests not selected";


    document.getElementById(
        "dashboardName"
    ).textContent =
        profile.name;


    document.getElementById(
        "dashboardEducation"
    ).textContent =
        `${profile.education || ""} ${
            profile.stream
                ? "• " + profile.stream
                : ""
        }`;


    if (profile.goal) {

        document.getElementById(
            "roadmapGoal"
        ).textContent =
            `Become a ${profile.goal}`;

    }

}


/* =====================================================
   ASSESSMENT
===================================================== */

const assessmentQuestions = [

    {
        question:
            "Which activity sounds most interesting to you?",

        options: [
            {
                text: "Building apps or websites",
                careers: [
                    "Software Development",
                    "Full Stack Development"
                ]
            },

            {
                text: "Working with electronics and circuits",
                careers: [
                    "VLSI",
                    "Embedded Systems",
                    "PCB Design"
                ]
            },

            {
                text: "Analyzing data and finding patterns",
                careers: [
                    "Data Analytics",
                    "AI / ML"
                ]
            },

            {
                text: "Managing systems and technology",
                careers: [
                    "DevOps",
                    "Cloud Computing",
                    "Cybersecurity"
                ]
            }
        ]
    },


    {
        question:
            "Which subject do you enjoy most?",

        options: [
            {
                text: "Mathematics",
                careers: [
                    "AI / ML",
                    "Data Analytics",
                    "Software Development"
                ]
            },

            {
                text: "Physics / Electronics",
                careers: [
                    "VLSI",
                    "Embedded Systems",
                    "RF Engineering"
                ]
            },

            {
                text: "Computer Science",
                careers: [
                    "Software Development",
                    "DevOps",
                    "Cybersecurity"
                ]
            },

            {
                text: "Business / Economics",
                careers: [
                    "Business / Entrepreneurship",
                    "MBA",
                    "Data Analytics"
                ]
            }
        ]
    },


    {
        question:
            "How do you prefer solving problems?",

        options: [
            {
                text: "Writing code and creating solutions",
                careers: [
                    "Software Development",
                    "Full Stack Development"
                ]
            },

            {
                text: "Designing hardware or physical systems",
                careers: [
                    "VLSI",
                    "PCB Design",
                    "Embedded Systems"
                ]
            },

            {
                text: "Studying information and making decisions",
                careers: [
                    "Data Analytics",
                    "AI / ML"
                ]
            },

            {
                text: "Planning, organizing and leading",
                careers: [
                    "MBA",
                    "Business / Entrepreneurship",
                    "Government Jobs"
                ]
            }
        ]
    },


    {
        question:
            "What kind of work environment sounds best?",

        options: [
            {
                text: "Technology company",
                careers: [
                    "Software Development",
                    "DevOps",
                    "Cloud Computing"
                ]
            },

            {
                text: "Electronics / Semiconductor company",
                careers: [
                    "VLSI",
                    "RF Engineering",
                    "Embedded Systems"
                ]
            },

            {
                text: "Research or laboratory",
                careers: [
                    "AI / ML",
                    "MS / Research",
                    "VLSI"
                ]
            },

            {
                text: "Government organization",
                careers: [
                    "Government Jobs"
                ]
            }
        ]
    },


    {
        question:
            "What is your biggest career goal?",

        options: [
            {
                text: "Build technology products",
                careers: [
                    "Software Development",
                    "Full Stack Development",
                    "AI / ML"
                ]
            },

            {
                text: "Work in electronics and hardware",
                careers: [
                    "VLSI",
                    "Embedded Systems",
                    "PCB Design"
                ]
            },

            {
                text: "Become an expert / researcher",
                careers: [
                    "MS / Research",
                    "AI / ML",
                    "VLSI"
                ]
            },

            {
                text: "Have a stable public-sector career",
                careers: [
                    "Government Jobs"
                ]
            }
        ]
    }

];


let currentQuestion = 0;

let assessmentAnswers =
    Array(
        assessmentQuestions.length
    ).fill(null);


function renderQuestion() {

    const question =
        assessmentQuestions[
            currentQuestion
        ];

    document.getElementById(
        "questionNumber"
    ).textContent =
        currentQuestion + 1;


    document.getElementById(
        "assessmentProgress"
    ).style.width =
        `${(
            (currentQuestion + 1) /
            assessmentQuestions.length
        ) * 100}%`;


    document.getElementById(
        "questionContainer"
    ).innerHTML = `

        <h3 class="question-title">
            ${question.question}
        </h3>

        <div class="answer-grid">

            ${question.options
                .map(
                    (option, index) => `

                        <button
                            class="
                                answer-option
                                ${
                                    assessmentAnswers[
                                        currentQuestion
                                    ] === index
                                        ? "selected"
                                        : ""
                                }
                            "
                            onclick="selectAnswer(${index})"
                        >
                            ${option.text}
                        </button>

                    `
                )
                .join("")}

        </div>
    `;


    document.getElementById(
        "previousQuestion"
    ).style.visibility =
        currentQuestion === 0
            ? "hidden"
            : "visible";


    document.getElementById(
        "nextQuestion"
    ).textContent =
        currentQuestion ===
        assessmentQuestions.length - 1
            ? "See My Results"
            : "Next";
}


function selectAnswer(index) {

    assessmentAnswers[
        currentQuestion
    ] = index;

    renderQuestion();
}


function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        renderQuestion();
    }
}


function nextQuestion() {

    if (
        assessmentAnswers[
            currentQuestion
        ] === null
    ) {

        alert(
            "Please select an answer first."
        );

        return;
    }


    if (
        currentQuestion <
        assessmentQuestions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

        return;
    }


    showAssessmentResults();
}


function showAssessmentResults() {

    const scores = {};


    assessmentAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex === null) {
                return;
            }

            const selected =
                assessmentQuestions[
                    questionIndex
                ].options[
                    answerIndex
                ];

            selected.careers.forEach(
                career => {

                    scores[career] =
                        (scores[career] || 0) + 1;

                }
            );

        }
    );


    const results =
        Object.entries(scores)
            .sort(
                (a, b) =>
                    b[1] - a[1]
            )
            .slice(0, 3);


    const container =
        document.getElementById(
            "questionContainer"
        );


    container.innerHTML = `

        <div class="assessment-result">

            <div class="empty-icon">
                🎯
            </div>

            <h3 class="question-title">
                Your Recommended Career Areas
            </h3>

            <p>
                Based on your answers, these careers
                may be worth exploring.
            </p>

            <div class="result-careers">

                ${results
                    .map(
                        ([career, score]) => `

                            <button
                                class="answer-option"
                                onclick="showCareer('${career}')"
                            >
                                <strong>
                                    ${career}
                                </strong>

                                <br>

                                <small>
                                    Match Score: ${score}
                                </small>
                            </button>

                        `
                    )
                    .join("")}

            </div>

        </div>

    `;


    document.querySelector(
        ".assessment-actions"
    ).style.display = "none";
}


/* =====================================================
   EDUCATION GUIDANCE
===================================================== */

const guidanceData = {

    after10: [

        {
            icon: "🔬",
            title: "MPC",
            description:
                "Mathematics, Physics and Chemistry.",
            options: [
                "Engineering",
                "Computer Science",
                "Architecture",
                "Pure Sciences"
            ]
        },

        {
            icon: "🧬",
            title: "BiPC",
            description:
                "Biology, Physics and Chemistry.",
            options: [
                "Medicine",
                "Pharmacy",
                "Biotechnology",
                "Life Sciences"
            ]
        },

        {
            icon: "💼",
            title: "CEC / HEC",
            description:
                "Commerce, economics, history and related subjects.",
            options: [
                "B.Com",
                "CA",
                "Law",
                "Business",
                "Government Careers"
            ]
        },

        {
            icon: "🛠️",
            title: "Diploma",
            description:
                "Practical technical education after 10th.",
            options: [
                "Engineering Diploma",
                "Technical Jobs",
                "Lateral Entry B.Tech",
                "Skill-Based Careers"
            ]
        }

    ],


    after12: [

        {
            icon: "💻",
            title: "B.Tech / Engineering",
            description:
                "Choose a technical branch based on your interests.",
            options: [
                "CSE",
                "ECE",
                "EEE",
                "Mechanical",
                "Civil"
            ]
        },

        {
            icon: "🎓",
            title: "Degree",
            description:
                "Build academic and professional foundations.",
            options: [
                "B.Sc",
                "B.Com",
                "BBA",
                "BA",
                "BCA"
            ]
        },

        {
            icon: "🏥",
            title: "Healthcare",
            description:
                "Explore health and life-science careers.",
            options: [
                "MBBS",
                "B.Pharm",
                "Nursing",
                "Biotechnology"
            ]
        }

    ],


    btech: [

        {
            icon: "💻",
            title: "CSE",
            description:
                "Strong options across software and technology.",
            options: [
                "Software",
                "AI/ML",
                "Data",
                "Cybersecurity",
                "DevOps",
                "Cloud"
            ]
        },

        {
            icon: "📡",
            title: "ECE",
            description:
                "Combines electronics with multiple technology paths.",
            options: [
                "VLSI",
                "Embedded",
                "RF",
                "PCB",
                "Software",
                "Cloud"
            ]
        },

        {
            icon: "⚡",
            title: "EEE",
            description:
                "Electrical engineering with core and technology options.",
            options: [
                "Power Systems",
                "Embedded",
                "Automation",
                "Software",
                "Government",
                "Higher Studies"
            ]
        },

        {
            icon: "⚙️",
            title: "Mechanical",
            description:
                "Core engineering plus modern technology pathways.",
            options: [
                "Design",
                "Manufacturing",
                "Automation",
                "Robotics",
                "Government",
                "MBA"
            ]
        },

        {
            icon: "🏗️",
            title: "Civil",
            description:
                "Infrastructure, construction and public sector pathways.",
            options: [
                "Construction",
                "Structural",
                "Transportation",
                "Government",
                "Planning",
                "MBA"
            ]
        }

    ]

};


function showGuidance(type, button) {

    document
        .querySelectorAll(".guidance-tab")
        .forEach(
            tab =>
                tab.classList.remove("active")
        );

    button.classList.add("active");


    const container =
        document.getElementById(
            "guidanceContent"
        );


    container.innerHTML =
        guidanceData[type]
            .map(
                item => `

                    <div class="guidance-card">

                        <div class="guidance-icon">
                            ${item.icon}
                        </div>

                        <h3>
                            ${item.title}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                        <ul>

                            ${item.options
                                .map(
                                    option =>
                                        `<li>${option}</li>`
                                )
                                .join("")}

                        </ul>

                    </div>

                `
            )
            .join("");
}


/* =====================================================
   ROADMAP
===================================================== */

const roadmapSteps = [

    {
        title: "Education Foundation",
        description:
            "Complete your current education stage.",
        status: "completed"
    },

    {
        title: "Programming / Core Fundamentals",
        description:
            "Build the fundamentals required for your career.",
        status: "completed"
    },

    {
        title: "Git & GitHub",
        description:
            "Learn version control and create your developer profile.",
        status: "completed"
    },

    {
        title: "Core Career Skills",
        description:
            "Develop the main skills required for your chosen career.",
        status: "completed"
    },

    {
        title: "Build Projects",
        description:
            "Create practical projects for your portfolio.",
        status: "current"
    },

    {
        title: "Practice & Interview Preparation",
        description:
            "Practice aptitude, coding and technical interviews.",
        status: "upcoming"
    },

    {
        title: "Internship",
        description:
            "Gain real-world experience.",
        status: "upcoming"
    },

    {
        title: "Job or Higher Studies",
        description:
            "Take the next step toward your long-term goal.",
        status: "upcoming"
    }

];


function renderRoadmap() {

    const list =
        document.getElementById(
            "roadmapList"
        );


    list.innerHTML =
        roadmapSteps
            .map(
                (step, index) => {

                    let symbol =
                        index + 1;

                    if (
                        step.status ===
                        "completed"
                    ) {
                        symbol = "✓";
                    }

                    if (
                        step.status ===
                        "current"
                    ) {
                        symbol = "→";
                    }

                    return `

                        <div
                            class="
                                roadmap-item
                                ${step.status}
                            "
                        >

                            <div class="roadmap-status">
                                ${symbol}
                            </div>

                            <div>

                                <h4>
                                    ${step.title}
                                </h4>

                                <p>
                                    ${step.description}
                                </p>

                            </div>

                        </div>

                    `;

                }
            )
            .join("");
}


/* =====================================================
   RESOURCES
===================================================== */

const resources = {

    courses: [
        {
            title: "Programming Fundamentals",
            description:
                "Start with programming logic and problem solving."
        },
        {
            title: "Web Development",
            description:
                "Learn frontend and backend application development."
        },
        {
            title: "DevOps Fundamentals",
            description:
                "Learn Linux, Git, Docker, CI/CD and cloud concepts."
        }
    ],

    documentation: [
        {
            title: "MDN Web Docs",
            description:
                "Reference material for web technologies."
        },
        {
            title: "Git Documentation",
            description:
                "Learn version control concepts and commands."
        },
        {
            title: "Docker Documentation",
            description:
                "Learn containers and Docker fundamentals."
        }
    ],

    practice: [
        {
            title: "Coding Practice",
            description:
                "Practice programming and problem-solving questions."
        },
        {
            title: "Aptitude Practice",
            description:
                "Prepare quantitative aptitude and reasoning."
        },
        {
            title: "Mock Interviews",
            description:
                "Practice technical and behavioral interviews."
        }
    ],

    projects: [
        {
            title: "Student Portfolio",
            description:
                "Create a personal portfolio website."
        },
        {
            title: "Career Guide App",
            description:
                "Build a career guidance application."
        },
        {
            title: "DevOps Deployment Project",
            description:
                "Deploy an application using Docker and Kubernetes."
        }
    ]

};


function showResource(type) {

    const container =
        document.getElementById(
            "resourceResults"
        );


    container.innerHTML =
        resources[type]
            .map(
                resource => `

                    <div class="resource-result">

                        <h4>
                            ${resource.title}
                        </h4>

                        <p>
                            ${resource.description}
                        </p>

                    </div>

                `
            )
            .join("");
}


/* =====================================================
   SCHOLARSHIPS
===================================================== */

function searchScholarships() {

    const education =
        document.getElementById(
            "scholarshipEducation"
        ).value;

    const category =
        document.getElementById(
            "scholarshipCategory"
        ).value;


    const results = [

        {
            title:
                "Merit Scholarship",
            category:
                "merit",
            education:
                "btech"
        },

        {
            title:
                "State Student Scholarship",
            category:
                "state",
            education:
                "intermediate"
        },

        {
            title:
                "Need Based Education Support",
            category:
                "need",
            education:
                "graduation"
        }

    ];


    const filtered =
        results.filter(
            scholarship => {

                const educationMatch =
                    !education ||
                    scholarship.education ===
                        education;

                const categoryMatch =
                    !category ||
                    scholarship.category ===
                        category;

                return (
                    educationMatch &&
                    categoryMatch
                );

            }
        );


    const container =
        document.getElementById(
            "scholarshipResults"
        );


    if (!filtered.length) {

        container.innerHTML = `
            <div class="empty-state">
                <h3>
                    No matching examples found
                </h3>
                <p>
                    Try different filters.
                </p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        filtered
            .map(
                scholarship => `

                    <div class="scholarship-card">

                        <span class="scholarship-badge">
                            ${scholarship.category.toUpperCase()}
                        </span>

                        <h3>
                            ${scholarship.title}
                        </h3>

                        <p>
                            Example scholarship matching
                            your selected criteria.
                        </p>

                    </div>

                `
            )
            .join("");
}


/* =====================================================
   GOVERNMENT CAREERS
===================================================== */

const governmentData = {

    UPSC: {

        description:
            "Civil services and other central government opportunities.",

        eligibility:
            "Eligibility depends on the specific examination and notification.",

        process: [
            "Understand syllabus",
            "Build foundation",
            "Current affairs",
            "Mock tests",
            "Prelims",
            "Mains",
            "Interview"
        ]

    },

    SSC: {

        description:
            "SSC examinations offer multiple central government opportunities.",

        eligibility:
            "Eligibility varies by SSC examination and post.",

        process: [
            "Choose SSC exam",
            "Understand syllabus",
            "Quantitative aptitude",
            "Reasoning",
            "English",
            "General awareness",
            "Mock tests"
        ]

    },

    Banking: {

        description:
            "Banking examinations provide opportunities in public sector banking.",

        eligibility:
            "Eligibility varies according to the examination.",

        process: [
            "Quantitative aptitude",
            "Reasoning",
            "English",
            "General awareness",
            "Mock tests",
            "Prelims",
            "Mains"
        ]

    },

    Railways: {

        description:
            "Railway recruitment includes technical and non-technical roles.",

        eligibility:
            "Eligibility varies by recruitment notification.",

        process: [
            "Choose railway role",
            "Check eligibility",
            "Study syllabus",
            "Practice",
            "Computer-based test",
            "Further selection stages"
        ]

    },

    Defence: {

        description:
            "Defence careers include officer and technical pathways.",

        eligibility:
            "Eligibility varies by NDA, CDS, AFCAT and other entries.",

        process: [
            "Check eligibility",
            "Written preparation",
            "Physical preparation",
            "Written exam",
            "Selection process",
            "Medical"
        ]

    },

    PSU: {

        description:
            "Public sector opportunities are available across engineering and other domains.",

        eligibility:
            "Eligibility depends on the organization and recruitment route.",

        process: [
            "Choose PSU",
            "Check eligibility",
            "GATE / recruitment preparation",
            "Technical preparation",
            "Exam",
            "Interview"
        ]

    }

};


function showGovernment(name) {

    const data =
        governmentData[name];

    const container =
        document.getElementById(
            "governmentDetails"
        );


    container.innerHTML = `

        <div class="gov-details">

            <h3>
                ${name} Career Path
            </h3>

            <p>
                ${data.description}
            </p>

            <p>
                <strong>
                    Eligibility:
                </strong>

                ${data.eligibility}
            </p>

            <div class="gov-roadmap">

                ${data.process
                    .map(
                        step =>
                            `<span>${step}</span>`
                    )
                    .join("")}

            </div>

        </div>

    `;

}


/* =====================================================
   COLLEGE EXPLORER
===================================================== */

const colleges = [

    {
        name:
            "Engineering & Technology Program",
        location:
            "Bengaluru",
        course:
            "B.Tech",
        entrance:
            "Entrance Exam",
        fees:
            "Varies",
        outcome:
            "Engineering Careers"
    },

    {
        name:
            "Computer Science Program",
        location:
            "Hyderabad",
        course:
            "B.Tech CSE",
        entrance:
            "Entrance Exam",
        fees:
            "Varies",
        outcome:
            "Software Careers"
    },

    {
        name:
            "Electronics Program",
        location:
            "Chennai",
        course:
            "B.Tech ECE",
        entrance:
            "Entrance Exam",
        fees:
            "Varies",
        outcome:
            "Electronics / Software"
    }

];


function renderColleges(list) {

    const container =
        document.getElementById(
            "collegeResults"
        );


    container.innerHTML =
        list
            .map(
                college => `

                    <div class="college-card">

                        <h3>
                            ${college.name}
                        </h3>

                        <p>
                            📍 ${college.location}
                        </p>

                        <div class="college-meta">

                            <span>
                                ${college.course}
                            </span>

                            <span>
                                ${college.entrance}
                            </span>

                            <span>
                                Fees: ${college.fees}
                            </span>

                            <span>
                                ${college.outcome}
                            </span>

                        </div>

                    </div>

                `
            )
            .join("");
}


function searchColleges() {

    const search =
        document.getElementById(
            "collegeSearch"
        ).value
        .toLowerCase();


    const location =
        document.getElementById(
            "collegeLocation"
        ).value;


    const filtered =
        colleges.filter(
            college => {

                const text =
                    `${college.name} ${college.course}`
                        .toLowerCase();

                const matchesSearch =
                    !search ||
                    text.includes(search);

                const matchesLocation =
                    !location ||
                    college.location ===
                        location;

                return (
                    matchesSearch &&
                    matchesLocation
                );

            }
        );


    renderColleges(filtered);
}


/* =====================================================
   AI CAREER ASSISTANT
===================================================== */

function askAssistant(question) {

    document.getElementById(
        "chatInput"
    ).value = question;

    sendMessage();
}


function handleChatKey(event) {

    if (event.key === "Enter") {

        sendMessage();
    }
}


function sendMessage() {

    const input =
        document.getElementById(
            "chatInput"
        );

    const question =
        input.value.trim();


    if (!question) {
        return;
    }


    const messages =
        document.getElementById(
            "chatMessages"
        );


    messages.innerHTML += `

        <div class="message user-message">

            <span>👤</span>

            <p>
                ${escapeHTML(question)}
            </p>

        </div>

    `;


    const answer =
        generateCareerAnswer(question);


    setTimeout(
        () => {

            messages.innerHTML += `

                <div class="message assistant-message">

                    <span>✨</span>

                    <p>
                        ${answer}
                    </p>

                </div>

            `;

            messages.scrollTop =
                messages.scrollHeight;

        },
        400
    );


    input.value = "";

    messages.scrollTop =
        messages.scrollHeight;
}


function generateCareerAnswer(question) {

    const text =
        question.toLowerCase();


    if (
        text.includes("ece") &&
        text.includes("cloud")
    ) {

        return `
            Yes. ECE students can move into Cloud and DevOps.
            Start with Linux, networking, Git, Docker and a
            cloud platform such as AWS or Azure. Build a small
            deployment project and then learn Kubernetes.
        `;

    }


    if (
        text.includes("ece")
    ) {

        return `
            ECE gives you several options including VLSI,
            Embedded Systems, PCB Design, RF Engineering,
            Software Development, Cloud, DevOps and
            Government careers. Your best option depends on
            whether you prefer hardware, software, systems or
            public-sector careers.
        `;

    }


    if (
        text.includes("coding") &&
        (
            text.includes("don't") ||
            text.includes("do not") ||
            text.includes("without")
        )
    ) {

        return `
            You do not have to choose a coding-heavy career.
            Consider careers such as business, management,
            government jobs, PCB design, core electronics,
            project coordination, sales, operations or certain
            analytics roles. Your interests should guide the choice.
        `;

    }


    if (
        text.includes("vlsi")
    ) {

        return `
            For VLSI, begin with digital electronics,
            computer architecture and Verilog. Then learn
            SystemVerilog, RTL design and verification.
            Build small RTL projects and explore FPGA tools.
            For advanced study, M.Tech, MS or research can be
            useful options.
        `;

    }


    if (
        text.includes("software")
    ) {

        return `
            A good software-development path is:
            programming fundamentals → data structures →
            Git/GitHub → development fundamentals → projects →
            internship → interview preparation → job.
        `;

    }


    if (
        text.includes("devops")
    ) {

        return `
            A beginner DevOps roadmap is:
            Linux → Git/GitHub → networking → CI/CD →
            Docker → Kubernetes → cloud → monitoring.
            Build one project that demonstrates the complete flow.
        `;

    }


    return `
        Based on your question, start by identifying your
        education level, preferred subjects, interests and
        long-term goal. NextStep can then compare suitable
        career paths, required skills, projects and higher-study
        options. Try asking about a specific branch or career.
    `;
}


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent = text;

    return div.innerHTML;
}


/* =====================================================
   SAVED JOBS
===================================================== */

function toggleSave(button) {

    button.classList.toggle("saved");

    button.textContent =
        button.classList.contains("saved")
            ? "♥"
            : "♡";
}


/* =====================================================
   SCROLL HELPER
===================================================== */

function scrollToSection(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {

    document
        .getElementById("nav")
        .classList.toggle("active");
}


document
    .querySelectorAll(".nav a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    document
                        .getElementById("nav")
                        .classList.remove(
                            "active"
                        );

                }
            );

        }
    );


/* =====================================================
   MODAL CLOSE
===================================================== */

function closeCareerModal() {

    document
        .getElementById("careerModal")
        .classList.remove("show");
}


window.addEventListener(
    "click",
    event => {

        const profileModal =
            document.getElementById(
                "profileModal"
            );

        if (
            event.target ===
            profileModal
        ) {

            closeProfileModal();

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCareers();

        renderRoadmap();

        showGuidance(
            "after10",
            document.querySelector(
                ".guidance-tab"
            )
        );

        renderColleges(colleges);

        updateProfileUI();

        updateSavedCareerList();

        renderQuestion();

    }
);