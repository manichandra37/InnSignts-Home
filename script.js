// Force scroll to top on page load and refresh
(function() {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Remove hash from URL immediately
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }
    
    // Multiple event handlers for maximum compatibility
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
        if (window.location.hash) {
            history.replaceState(null, null, window.location.pathname);
        }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        window.scrollTo(0, 0);
        if (window.location.hash) {
            history.replaceState(null, null, window.location.pathname);
        }
    });
    
    // Force scroll after a short delay
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 100);
    
    // Force scroll after images load
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 500);
    
    // Force scroll after everything loads
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1000);
})();

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .cta-button, .feature-link, .pricing-link');
    
    // Add click event listeners for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            // Simple validation
            if (!name || !email || !phone) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                alert('Please enter a valid phone number');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Prepare data for Google Sheets
            const formData = {
                name: name,
                email: email,
                phone: phone
            };
            
            // Replace this URL with your Google Apps Script deployment URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5Gy6Yycl46fViJiDiYmoxyoD7bJtTxoGzsesyHKRP1qJzxo_CQYi4odiIZDbc9UO36Q/exec';
            
            // Send data to Google Sheets
            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                // Success message
                alert('Thank you! We\'ll get back to you soon.');
                
                // Clear form
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Thank you! We\'ll get back to you soon.');
                contactForm.reset();
            })
            .finally(() => {
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    const hotelAnimation = document.querySelector('.hotel-animation');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hotelAnimation) {
            hotelAnimation.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.feature-section, .pricing, .technology, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Add floating animation to hotel elements
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });

    // Add glow effect to hotel towers
    const hotelTowers = document.querySelectorAll('.hotel-tower');
    
    hotelTowers.forEach((tower, index) => {
        tower.style.animationDelay = `${index * 0.3}s`;
    });

    // Add chart animation on scroll
    const priceChart = document.querySelector('.price-chart');
    const chartLine = document.querySelector('.chart-line');
    const chartPoints = document.querySelectorAll('.point');
    
    if (priceChart) {
        const chartObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate chart line
                    if (chartLine) {
                        chartLine.style.animation = 'chartGrow 2s ease-out';
                    }
                    
                    // Animate chart points
                    chartPoints.forEach((point, index) => {
                        setTimeout(() => {
                            point.style.animation = 'pointPulse 2s ease-in-out infinite';
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        chartObserver.observe(priceChart);
    }

    // Add neural network animation on scroll
    const aiBrain = document.querySelector('.ai-brain');
    const neuralNodes = document.querySelectorAll('.node');
    
    if (aiBrain) {
        const brainObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    neuralNodes.forEach((node, index) => {
                        setTimeout(() => {
                            node.style.animation = 'nodeGlow 3s ease-in-out infinite';
                        }, index * 300);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        brainObserver.observe(aiBrain);
    }

    // Add smooth reveal animation to feature cards
    const featureObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        featureObserver.observe(card);
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }

    // Add scroll-triggered animations for pricing features
    const pricingFeatures = document.querySelectorAll('.pricing-features li');
    
    const featureListObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });

    pricingFeatures.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-20px)';
        feature.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        featureListObserver.observe(feature);
    });

    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    if (chatbotToggle && chatbotWindow && chatClose && chatInput && chatSend && chatMessages) {
        // Toggle chatbot window
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.add('active');
        });

        chatClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });

        // Send message function
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                chatInput.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    const botResponse = getBotResponse(message);
                    addMessage(botResponse, 'bot');
                }, 1000);
            }
        }

        // Add message to chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.innerHTML = `<p>${text}</p>`;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Simple bot responses
        function getBotResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
                return "Our pricing is flexible and based on your hotel size and needs. Would you like to schedule a consultation to discuss pricing options?";
            } else if (lowerMessage.includes('integration') || lowerMessage.includes('booking.com')) {
                return "Yes! InnSights integrates seamlessly with Booking.com, Expedia, and all major booking platforms. We handle the integration process for you.";
            } else if (lowerMessage.includes('implementation') || lowerMessage.includes('setup')) {
                return "Most hotels are up and running with InnSights within 2-3 weeks. Our team handles everything including data migration and staff training.";
            } else if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
                return "We provide 24/7 customer support, dedicated account managers, and comprehensive training for your entire team.";
            } else if (lowerMessage.includes('features') || lowerMessage.includes('what can')) {
                return "InnSights offers smart pricing, inventory management, staff scheduling, event intelligence, and much more. Everything you need to manage your hotel is in one place.";
            } else {
                return "Thank you for your message! I'd be happy to help you learn more about InnSights. You can also contact our sales team for a personalized demo.";
            }
        }

        // Send message on button click
        chatSend.addEventListener('click', sendMessage);

        // Send message on Enter key
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

