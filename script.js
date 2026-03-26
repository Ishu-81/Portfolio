// Team Members Data with comprehensive education and skills
const teamMembers = [
    {
        id: 1,
        name: "Vaddul Ramya",
        role: "Team Cooedinator",
        bio: "View",
        avatar: "VR",
        college: "BVRIT Hyderabad College of Engineering for Women",
        degree: "B.Tech CSE",
        graduationYear: "Expected 2028",
        gpa: "9.3/10",
        skills: {
            "Programming": ["Java", "Python", "C"],
            "Web": ["HTML", "CSS", "JavaScript"],
            "Database": ["MySQL"],
            "Tools": ["VS Code", "Google Colab"],
            "Soft Skills": ["Problem Solving", "Communication", "Collaboration"]
        },
        projects: [
            { name: "Stacking Plates (Tower of Hanoi Game)", tech: ["Python", "Pygame"], description: "Interactive game with animations, timer, sound, and levels." },
            { name: "To-Do List Application", tech: ["HTML", "CSS", "JavaScript"], description: "Web app with task priorities and due dates." }
        ],
        achievements: ["Active competitive programmer on LeetCode, CodeChef, HackerRank", "Bronze & Silver Badges on CodeChef"],
        certifications: ["Python Programming — Scaler Academy", "Python (Basic) — HackerRank", "Java OOPs Programming — CodeChef"],
    },
    {
        id: 2,
        name: "Alluri Ishwarya",
        role: "Team Member",
        bio: "View",
        avatar: "AAI",
        college: "BVRIT Hyderabad College of Engineering for Women",
        degree: "B.Tech CSE",
        graduationYear: "Expected 2028",
        gpa: "9.28/10",
        skills: {
            "Programming": ["Python", "C", "Java"],
            "Tools": ["HackerRank", "CodeChef", "LeetCode", "Codeforces"],
            "Soft Skills": ["Teamwork", "Problem Solving", "Contest Participation"]
        },
        projects: [
            { name: "Sudoku Game Project", tech: ["Python", "NumPy", "Tkinter"], description: "Interactive Sudoku game with backtracking algorithm." },
            { name: "Automated Attendance System for Rural Schools", tech: ["Python", "OpenCV"], description: "Facial recognition-based attendance system for SIH Hackathon." }
        ],
        achievements: ["Selected in Smart India Hackathon 2025"],
        certifications: ["CodeChef OOPS through Java", "CodeChef DataStructures", "Python Course — Scaler"],
    },
    {
        id: 3,
        name: "A. Gayathri",
        role: "Team Memeber",
        bio: "View",
        avatar: "AG",
        college: "BVRIT Hyderabad",
        degree: "B.Tech CSE",
        graduationYear: "Expected 2028",
        gpa: "9.2/10",
        skills: {
            "Programming": ["Python", "Java", "C", "HTML", "MySQL"],
            "Tools": ["VS Code", "Eclipse"],
            "Soft Skills": ["Problem Solving", "Collaboration"]
        },
        projects: [
            { name: "Student Management System", tech: ["Java Swing"], description: "GUI app to manage student records with OOP & file handling." },
            { name: "Scientific Calculator", tech: ["Python", "Tkinter"], description: "Multi-function calculator with trig, log, factorial functions." }
        ],
        achievements: ["160+ problems solved on LeetCode"],
        certifications: ["Python & Java for Beginners (Simplilearn/SkillUp)", "OOP through Java (CodeChef)", "SQL Using AI", "AI Tools Workshop — be10x"],
    },
    {
        id: 4,
        name: "Barigela Madhumitha",
        role: "Team Member",
        bio: "View",
        avatar: "BM",
        college: "BVRIT Hyderabad Women's College of Engineering",
        degree: "B.Tech CSE",
        graduationYear: "Expected 2028",
        gpa: "7.5/10",
        skills: {
            "Programming": ["C", "Python"],
            "Tools": ["Git", "GitHub"],
            "Soft Skills": ["Problem Solving", "Teamwork"]
        },
        projects: [
            { name: "Quick Pick Super Market Management System", tech: ["C", "Python"], description: "Manage product listings, billing, and inventory for Quick Pick Super Market." }
        ],
        achievements: ["Consistent academic performance"],
        certifications: ["Certified Python for Beginners — Scaler Academy", "Learn Python Basics — Simplilearn"],
        
    },
    {
        id: 5,
        name: "Akhila Anaparthi",
        role: "Team Memeber",
        bio: "View",
        avatar: "AA",
        college: "BVRIT Hyderabad College of Engineering for Women",
        degree: "B.Tech CSE",
        graduationYear: "Expected 2028",
        gpa: "TBD",
        skills: {
            "Programming": ["C", "Python", "Java"],
            "Tools": ["VS Code", "MySQL"],
            "Soft Skills": ["Communication", "Teamwork", "Problem Solving"]
        },
        projects: [
            { name: "Simple Calculator Project", tech: ["Python"], description: "Basic calculator with arithmetic operations." },
            { name: "UI/UX Workshop Project", tech: ["Figma", "HTML", "CSS"], description: "User interface design workshop project." }
        ],
        achievements: [],
        certifications: [],
        
    }
];

// DOM Elements
const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const teamGrid = document.getElementById('teamGrid');
const modal = document.getElementById('memberModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderTeamMembers();
    initializeModal();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Render team members
function renderTeamMembers() {
    teamGrid.innerHTML = '';
    
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member loading';
        memberCard.innerHTML = `
            <div class="member-avatar">
                <span>${member.avatar}</span>
            </div>
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <p class="member-bio">${member.bio}</p>
            </div>
        `;
        
        memberCard.addEventListener('click', () => openMemberModal(member));
        teamGrid.appendChild(memberCard);
        
        // Trigger loading animation
        setTimeout(() => {
            memberCard.classList.add('loaded');
        }, 100 * member.id);
    });
}

// Modal functionality
function initializeModal() {
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openMemberModal(member) {
    const skillsHTML = Object.entries(member.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h4>${category}</h4>
            <div class="skill-tags">
                ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    const projectsHTML = (member.projects || []).map(project => {
        if (typeof project === 'string') {
            return `<li><strong>${project}</strong></li>`;
        } else {
            return `<li><strong>${project.name}</strong> - ${project.description || ''}</li>`;
        }
    }).join('');

    const achievementsHTML = (member.achievements || []).map(achievement => 
        `<li><i class="fas fa-trophy"></i> ${achievement}</li>`
    ).join('');

    const certificationsHTML = (member.certifications || []).map(certification => 
        `<li><i class="fas fa-certificate"></i> ${certification}</li>`
    ).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-avatar">
                <span style="font-size: 4rem;">${member.avatar}</span>
            </div>
            <h2>${member.name}</h2>
            <p class="modal-role">${member.role}</p>
        </div>
        
        <div class="modal-tabs">
            <button class="tab-btn active" data-tab="overview">Overview</button>
            <button class="tab-btn" data-tab="education">Education</button>
            <button class="tab-btn" data-tab="skills">Skills</button>
        </div>

        <div class="modal-content">
            <div class="tab-content active" id="overview">
                <div class="detail-section">
                    <h3><i class="fas fa-graduation-cap"></i> Education</h3>
                    <p><strong>${member.degree}</strong></p>
                    <p>${member.college} • Class of ${member.graduationYear}</p>
                    <p>GPA: ${member.gpa}</p>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-project-diagram"></i> Projects</h3>
                    <ul class="project-list">
                        ${projectsHTML}
                    </ul>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-trophy"></i> Achievements</h3>
                    <ul class="achievement-list">
                        ${achievementsHTML}
                    </ul>
                </div>
            </div>

            <div class="tab-content" id="education">
                <div class="detail-section">
                    <h3><i class="fas fa-graduation-cap"></i> Academic Details</h3>
                    <p><strong>${member.degree}</strong></p>
                    <p>${member.college} • Class of ${member.graduationYear}</p>
                    <p>GPA: ${member.gpa}</p>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-certificate"></i> Certifications</h3>
                    <ul class="cert-list">
                        ${certificationsHTML}
                    </ul>
                </div>
                <div class="detail-section">
                    <h3><i class="fas fa-trophy"></i> Achievements</h3>
                    <ul class="achievement-list">
                        ${achievementsHTML}
                    </ul>
                </div>
            </div>

            <div class="tab-content" id="skills">
                <div class="skills-grid">
                    ${skillsHTML}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize tab functionality
    initializeTabs();
}

function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.identity-card, .team-member').forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation for team members
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            navigateMember(-1);
        } else if (e.key === 'ArrowRight') {
            navigateMember(1);
        }
    }
});

function navigateMember(direction) {
    const currentMember = modalBody.querySelector('.modal-header h2').textContent;
    const currentIndex = teamMembers.findIndex(member => member.name === currentMember);
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = teamMembers.length - 1;
    if (newIndex >= teamMembers.length) newIndex = 0;
    
    openMemberModal(teamMembers[newIndex]);
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-related functions here
}, 10)); 
