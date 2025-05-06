// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Project data for modal
    const projectsData = [
        {
            id: 1,
            title: "Alertify",
            category: "IoT and ML",
            description: "Existing approaches to predicting and managing natural disasters often lack the necessary speed and accuracy, leading to delayed responses and ineffective planning. There is a critical need for a more efficient method that can provide timely warnings, enable proactive disaster planning, and help identify safe locations during emergencies. The public is often not promptly informed about impending disasters, resulting in communication delays and heightened risks. Additionally, the lack of well-defined evacuation routes further hampers the ability to ensure public safety during such events.",
            solution: "Machine learning models with high accuracy are being utilized for effective disaster prediction, enabling authorities to anticipate natural calamities more confidently. In disaster-prone areas, secure locations are identified and established to ensure public safety. Early warning systems are implemented to alert the public well in advance, allowing sufficient time for preparation and response. Additionally, well-planned evacuation routes are mapped out to facilitate smooth and safe movement during emergencies. To support these efforts, the environment is monitored regularly daily, ensuring up-to-date information is available for timely decision-making.",
            techStack: [
                { name: "Machine Learning" },
                { name: "Wireless Emergency Alerts (WEA)" },
                { name: "IoT-based sensors" }
            ],
            gallery: [
                { url: "Assets/rk.png", alt: "EdTech Platform Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Mobile App Interface" },
                { url: "https://api.placeholder.com/800/400", alt: "Patient Monitoring Screen" }
            ]
        },
        {
            id: 2,
            title: "Angio Sense",
            category: "MedTech",
            description: "AngioSense offers a safer, cost-effective alternative to traditional angiography, which is invasive, expensive, and poses health risks like radiation exposure and kidney damage. By enhancing accessibility and early cardiovascular disease detection, it overcomes limitations, ensuring a more efficient and patient-friendly diagnostic solution.",
            solution: "AngioSense combines PPG and Bio-Impedance technologies to detect blood flow issues and blockages. IoT sensors track SpO2, temperature, and pulse rate, sending data to the cloud for AI-driven analysis. Automated diagnostic reports are accessible via web and mobile apps, enabling real-time healthcare monitoring.",
            techStack: [
                { name: "Flutter" },
                { name: "AWS DynamoDB" },
                { name: "AWS SageMaker" },
                { name: "ESP32" },
                { name: "MAX30102" },
                { name: "AD620" }
            ],
            gallery: [
                { url: "https://api.placeholder.com/800/400", alt: "MedTech Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Diagnostic Interface" },
                { url: "https://api.placeholder.com/800/400", alt: "Analysis Results" }
            ]
        },
        {
            id: 3,
            title: "Avani",
            category: "Sustainability",
            description: "Urbanization rapidly reduces green spaces, leading to environmental issues such as heat islands, pollution, and biodiversity loss. City planners struggle to analyze and optimize green areas effectively. Our project, AVANI, provides a data-driven solution using GIS and machine learning to ensure sustainable urban planning.",
            solution: "AVANI collects real-time data on urban landscapes from various sub-zones of the project field using GIS and IoT-based sensors. Machine learning algorithms analyze this data to identify optimal zones for tree plantations and sustainable construction. The system outputs a 3D model that supports planners and architects in making informed decisions, ultimately improving urban greenery, reducing heat islands, and enhancing overall sustainability. Additionally, AVANI features automated report generation, providing detailed reports with actionable insights tailored for city planners.",
            techStack: [
                { name: "GIS Mapping" },
                { name: "IoT-based Sensors" },
                { name: "Machine Learning" },
                { name: "3D Visualization" },
                { name: "Cloud Platform" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 4,
            title: "Bhumicare",
            category: "Agriculture",
            description: "Due to a lack of real-time insights, traditional farming faces inefficient water and fertilizer usage, declining soil health, unpredictable weather, and financial losses. Farmers rely on guesswork, leading to resource wastage and reduced productivity. A smart, AI-driven solution is needed to make agriculture more efficient and sustainable.",
            solution: "Bhumicare is an AI-powered IoT solution that analyzes real-time soil data using smart sensors and provides AI-driven recommendations to farmers. It helps optimize water and fertilizer usage, prevent crop diseases, and improve soil health, ensuring higher yields, reduced costs, and sustainable farming practices.",
            techStack: [
                { name: "IoT Sensors" },
                { name: "AWS" },
                { name: "RandomForest Models" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 5,
            title: "Crime Vision",
            category: "Security",
            description: "The current surveillance system heavily relies on manual human monitoring, leading to various challenges and inefficiencies. Manual monitoring is not as efficient over extended durations, causing delayed responses to security threats. Human limitations require breaks, risking lapses in attention, particularly in crucial areas like police lockups. This reliance on human monitoring may lead to oversight, compromising security in such sensitive areas. Furthermore, human operators, such as police officers, who watch video feeds for extended periods, can experience fatigue, resulting in reduced attention and responsiveness.",
            solution: "The current surveillance system heavily relies on manual human monitoring, leading to various challenges and inefficiencies. Manual monitoring is not as efficient over extended durations, causing delayed responses to security threats. Human limitations require breaks, risking lapses in attention, particularly in crucial areas like police lockups. This reliance on human monitoring may lead to oversight, compromising security in such sensitive areas. Furthermore, human operators, such as police officers, who watch video feeds for extended periods, can experience fatigue, resulting in reduced attention and responsiveness.",
            techStack: [
                { name: "TensorFlow" },
                { name: "ElectronJS" },
                { name: "OpenCV" },
                { name: "Docker" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 6,
            title: "Eco Scrap",
            category: "Sustainability",
            description: "Unorganized waste management and scrap resale lead to unfair pricing, excessive waste, and environmental issues. Individuals undersell scrap, reusable items are discarded, and businesses face bulk sale challenges. Public waste accumulates due to inefficient complaint systems, worsening cleanliness, and sustainability concerns.",
            solution: "This project aims to digitize and optimize the scrap collection, resale, and waste management process by introducing a transparent, fair, and sustainable platform connecting users, scrap collectors, vendors, and authorities.",
            techStack: [
                { name: "Spring Boot" },
                { name: "Hibernate" },
                { name: "PostgreSQL" },
                { name: "Next.js" },
                { name: "Tailwind CSS" },
                { name: "AWS S3" },
                { name: "AWS SNS" },
                { name: "Razorpay" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 7,
            title: "Mavex",
            category: "MedTech",
            description: "Current healthcare systems often struggle with efficient remote monitoring and patient record management, especially in hospitals that manage a high volume of patients daily. There is a pressing need for a solution that enhances patient outcomes, reduces operational costs, and improves healthcare delivery by enabling remote monitoring of vital signs, early anomaly detection, streamlined medication management, accurate patient records, and menstrual health tracking.",
            solution: "MAVEX is an IoT-based remote health monitoring device designed specifically for bedridden patients and individuals in wheelchairs. It provides real-time collection and analysis of health data while enabling continuous supervision by medical professionals. The device includes features such as temperature measurement, fall detection, emergency ambulance calls, medication reminders, and an SOS system. It also supports saline level tracking, ECG and heart rate monitoring, SpO2 measurement, and a web-based health dashboard for hospital staff, offering comprehensive care and real-time patient management.",
            techStack: [
                { name: "Microcontrollers" },
                { name: "Sensors" },
                { name: "Cloud" },
                { name: "Flutter" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 8,
            title: "Neytri",
            category: "Agriculture",
            description: "Individuals with sensory disabilities face obstacles in effectively communicating with others, limiting their ability to engage fully in social interactions and daily activities.",
            solution: "Our platform translates sign language (for deaf users) to text and speech using KNN for gesture recognition and text-to-speech for audio output. It explores haptic feedback for deafblind users to perceive communication through vibrations. We have developed a new language and we named it as Hawk Code and we have a dedicated app for deafblind people.",
            techStack: [
                { name: "K-Nearest Neighbors (KNN)" },
                { name: "TensorFlow" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 9,
            title: "Prevenix",
            category: "Industrial",
            description: "Industrial equipment downtime due to unexpected failure. Inability to predict and prevent equipment failures before they occur. Inefficient use of resources and increased operational costs.",
            solution: "Prevenix provides a machine-learning solution for the predictive maintenance of industrial equipment. It enables proactive measures to prevent downtime and costly repairs. The system provides actionable insights and alerts to maintenance teams for timely intervention. This reduces maintenance costs, enhances productivity, and increases business profitability.",
            techStack: [
                { name: "IoT Sensors" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 10,
            title: "Rakshati",
            category: "Security",
            description: "Vehicular accidents cause preventable fatalities due to delayed emergency response, lack of nearby assistance, and unaffordable safety solutions. Rakshati addresses these challenges with an innovative, accessible, and life-saving device.",
            solution: "Rakshati is a cost-effective, life-saving device that detects accidents, shares precise location details, and alerts emergency services and nearby individuals. It ensures rapid response and rescue efforts, addressing delays in emergency care and reducing preventable fatalities.",
            techStack: [
                { name: "Sensors" },
                { name: "GPS Tracking" },
                { name: "Wireless Communication" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 11,
            title: "RESQUBE",
            category: "Security",
            description: "The effectiveness of rescue operations is hindered by the challenging integration of technology with essential gear, impacting swift and precise location detection.",
            solution: "Resqube automates avalanche rescue with Lorawan technology for swift, precise communication. Lorawan promptly notifies responders, ensuring efficiency in rescues. RESQUBE prioritizes rapid response, aligning with the urgent mission of saving lives in critical situations.",
            techStack: [
                { name: "Lorawan Technology" },
                { name: "Sensors" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        },
        {
            id: 12,
            title: "ThreatSentry",
            category: "Security",
            description: "The project addresses the need for a comprehensive cybersecurity solution by integrating Intrusion Detection (IDS) and Intrusion Prevention (IPS) systems with a custom Sysmon script. This solution enhances threat detection, real-time monitoring, and incident response, utilizing Wazuh, TheHive, and Cassandra for scalable security management.",
            solution: "The solution combines IDS/IPS systems with a custom Sysmon script for enhanced threat detection and monitoring. It integrates Wazuh for centralized log management, TheHive for incident response, and Cassandra for scalable data storage, creating a robust and efficient cybersecurity framework.",
            techStack: [
                { name: "Sysmon" },
                { name: "Wazuh" },
                { name: "TheHive" },
                { name: "Cassandra" }
            ],
            gallery: [
                { url: "", alt: "Farm Monitoring Dashboard" },
                { url: "https://api.placeholder.com/800/400", alt: "Soil Sensor Network" },
                { url: "https://api.placeholder.com/800/400", alt: "Irrigation Control Panel" }
            ]
        }




    ];



    // Legal modals
    const privacyPolicyModal = document.getElementById('privacy-policy-modal');
    const termsConditionsModal = document.getElementById('terms-conditions-modal');

    // Get the buttons that open the legal modals
    const privacyPolicyLink = document.getElementById('privacy-policy-link');
    const termsConditionsLink = document.getElementById('terms-conditions-link');

    // Get all close buttons for legal modals
    const legalCloseButtons = document.querySelectorAll('.legal-modal .close-modal');

    // Function to open legal modal
    function openLegalModal(modal) {
        if (!modal) return;

        // First ensure any display:none is removed
        modal.style.display = '';
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';

        // Force browser to recognize the change before adding show class
        void modal.offsetWidth;

        // Add show class
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling of background
    }

    // Function to close legal modal
    function closeLegalModal(modal) {
        if (!modal) return;

        modal.classList.remove('show');

        // Wait for transition to finish before hiding
        setTimeout(() => {
            modal.style.visibility = '';
            modal.style.opacity = '';
            document.body.style.overflow = ''; // Restore scrolling
        }, 300);
    }

    // Event listeners for opening legal modals
    if (privacyPolicyLink) {
        privacyPolicyLink.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Privacy Policy link clicked"); // Add this for debugging
            openLegalModal(privacyPolicyModal);
        });
    }

    if (termsConditionsLink) {
        termsConditionsLink.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("Terms & Conditions link clicked"); // Add this for debugging
            openLegalModal(termsConditionsModal);
        });
    }

    // Event listeners for legal close buttons
    legalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.legal-modal');
            closeLegalModal(modal);
        });
    });

    // Close legal modal when clicking outside content
    document.querySelectorAll('.legal-modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeLegalModal(this);
            }
        });
    });

    // Project modal elements
    const projectModal = document.getElementById('project-modal');
    const projectCloseModal = document.querySelector('#project-modal .close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project');

    // Project details elements
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectCategory = document.getElementById('modal-project-category');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectSolution = document.getElementById('modal-project-solution');
    const modalProjectTechStack = document.getElementById('modal-project-tech-stack');
    const modalProjectGallery = document.getElementById('modal-project-gallery');
    const galleryPrevBtn = document.querySelector('.gallery-prev');
    const galleryNextBtn = document.querySelector('.gallery-next');

    let currentGalleryIndex = 0;
    let currentGalleryImages = [];

    // Function to open project modal
    function openProjectModal() {
        if (!projectModal) return;

        projectModal.style.display = '';
        projectModal.style.visibility = 'visible';
        projectModal.style.opacity = '1';

        void projectModal.offsetWidth;

        projectModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Function to close project modal
    function closeProjectModal() {
        if (!projectModal) return;

        projectModal.classList.remove('show');

        setTimeout(() => {
            projectModal.style.visibility = '';
            projectModal.style.opacity = '';
            document.body.style.overflow = '';
        }, 300);
    }

    // Open project modal when clicking "View Project"
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Get project ID from the parent card
            const projectCard = this.closest('.project-card');
            const projectId = parseInt(projectCard.getAttribute('data-project-id'));

            // Find the project data
            const project = projectsData.find(p => p.id === projectId);

            if (project) {
                // Populate modal with project data
                modalProjectTitle.textContent = project.title;
                modalProjectCategory.textContent = project.category;
                modalProjectDescription.textContent = project.description;
                modalProjectSolution.textContent = project.solution;

                // Populate tech stack
                modalProjectTechStack.innerHTML = '';
                project.techStack.forEach(tech => {
                    const techItem = document.createElement('div');
                    techItem.className = 'tech-stack-item';
                    techItem.innerHTML = `<span>${tech.name}</span>`;
                    modalProjectTechStack.appendChild(techItem);
                });

                // Populate gallery
                modalProjectGallery.innerHTML = '';
                currentGalleryImages = project.gallery;
                currentGalleryIndex = 0;

                if (project.gallery.length > 0) {
                    // Create gallery images
                    project.gallery.forEach((image, index) => {
                        const img = document.createElement('img');
                        img.src = image.url;
                        img.alt = image.alt;
                        img.className = 'gallery-image';
                        img.style.display = index === 0 ? 'block' : 'none';
                        modalProjectGallery.appendChild(img);
                    });
                }

                openProjectModal();
                console.log('Project modal opened for project:', project.title);
            }
        });
    });

    // Close project modal when clicking the X
    if (projectCloseModal) {
        projectCloseModal.addEventListener('click', function () {
            closeProjectModal();
        });
    }

    // Close project modal when clicking outside the content
    if (projectModal) {
        projectModal.addEventListener('click', function (e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Handle gallery navigation
    function navigateGallery(direction) {
        const galleryImages = modalProjectGallery.querySelectorAll('.gallery-image');

        if (galleryImages.length <= 1) return;

        // Hide current image
        galleryImages[currentGalleryIndex].style.display = 'none';

        // Update index
        if (direction === 'next') {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        } else {
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        }

        // Show new image
        galleryImages[currentGalleryIndex].style.display = 'block';
    }

    // Gallery controls
    if (galleryPrevBtn) {
        galleryPrevBtn.addEventListener('click', () => navigateGallery('prev'));
    }

    if (galleryNextBtn) {
        galleryNextBtn.addEventListener('click', () => navigateGallery('next'));
    }

    // Close all modals with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLegalModal(privacyPolicyModal);
            closeLegalModal(termsConditionsModal);
            closeProjectModal();
        } else if (e.key === 'ArrowLeft' && projectModal && projectModal.classList.contains('show')) {
            navigateGallery('prev');
        } else if (e.key === 'ArrowRight' && projectModal && projectModal.classList.contains('show')) {
            navigateGallery('next');
        }
    });

    // The rest of your code (scrolling, form handling, etc.) remains unchanged

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Format the message for WhatsApp
            // const whatsappMessage = `Hello, I am ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

            const whatsappMessage = `
*Contact Form Submission*
------------------------
*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}
------------------------
            `.trim();


            // WhatsApp API link
            const whatsappURL = `https://wa.me/919556889369?text=${encodeURIComponent(whatsappMessage)}`;

            // Open WhatsApp chat in new tab
            window.open(whatsappURL, '_blank');

            // Optional: Reset form
            contactForm.reset();
        });
    }


    // Add fade-in effect for elements as they enter the viewport
    const fadeElements = document.querySelectorAll('.project-card, .team-card, .event-tag');

    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class that triggers the animation
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                // Stop observing the element after it has appeared
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    // Set initial styles and start observing elements
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });

    // Highlight active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav ul li a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Initialize active nav link on page load
    updateActiveNavLink();

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);

    // Handle header background on scroll
    const header = document.querySelector('header');

    function updateHeaderBackground() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    }

    // Initialize header background on page load
    updateHeaderBackground();

    // Update header background on scroll
    window.addEventListener('scroll', updateHeaderBackground);

    // responsive navbar toggle
    const ham = document.querySelector('#menu-icon');
    const nav = document.querySelector('nav ul');
    const closeNav = document.querySelector('#menu-icon-close');

    nav.style.animation = '';
    nav.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';

    ham.style.transition = 'opacity 0.3s ease-in-out';
    closeNav.style.transition = 'opacity 0.3s ease-in-out';

    ham.addEventListener('click', () => {
        nav.style.animation = '';
        nav.style.display = 'block';
        nav.style.animation = 'fadein 0.3s forwards, slideinfromright 0.3s forwards';
        ham.style.opacity = '0';
        setTimeout(() => {
            ham.style.display = 'none';
            closeNav.style.display = 'block';
            closeNav.style.opacity = '0';
            void closeNav.offsetWidth;
            closeNav.style.opacity = '1';
        }, 300);
    });

    closeNav.addEventListener('click', () => {
        nav.style.animation = '';
        nav.style.animation = 'fadeout 0.3s forwards, slideouttoright 0.3s forwards';
        closeNav.style.opacity = '0';
        setTimeout(() => {
            closeNav.style.display = 'none';
            ham.style.display = 'block';
            ham.style.opacity = '0';
            void ham.offsetWidth;
            ham.style.opacity = '1';
        }, 300);
        setTimeout(() => {
            nav.style.display = 'none';
        }, 300);
    });

});