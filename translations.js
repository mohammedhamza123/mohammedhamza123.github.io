// Translations Object
const translations = {
    ar: {
        nav: {
            home: "الرئيسية",
            about: "نبذة",
            education: "التعليم",
            experience: "الخبرات",
            skills: "المهارات",
            achievements: "الإنجازات",
            certificates: "الشهادات",
            contact: "التواصل"
        },
        hero: {
            name: "م.محمد حمزه",
            subtitle: "مطور Full Stack",
            description: "متخصص في بناء تطبيقات الويب والموبايل القابلة للتوسع باستخدام أحدث التقنيات والأدوات البرمجية",
            contactBtn: "تواصل معي",
            certificatesBtn: "عرض الشهادات"
        },
        about: {
            title: "نبذة عني",
            text: "مطور Full Stack متخصص في بناء تطبيقات الويب والموبايل القابلة للتوسع باستخدام أحدث التقنيات والأدوات البرمجية. لدي خبرة واسعة في تطوير الواجهات الخلفية (Backend) باستخدام FastAPI و PostgreSQL، وتطوير الواجهات الأمامية وتطبيقات الموبايل باستخدام Flutter و JavaScript. شغوف بتصميم الهياكل البرمجية النظيفة والأنظمة الآمنة والواجهات المستجيبة التي توفر تجربة مستخدم ممتازة. أمتلك مهارات قوية في حل المشكلات المعقدة مع خلفية أكاديمية قوية في تقنية المعلومات."
        },
        education: {
            title: "التعليم",
            degree: "بكالوريوس في تقنية المعلومات",
            university: "جامعة الزاوية"
        },
        experience: {
            title: "الخبرات العملية",
            position: "مطور Full Stack",
            company: "شركة أساس (Asas Company)",
            period: "2024 - الآن",
            description: "أعمل كمطور تطبيقات ضمن فريق محترف، حيث أساهم في تطوير حلول الموبايل والواجهات الخلفية القابلة للتوسع. أقوم ببناء وصيانة تطبيقات Flutter عالية الجودة، وتطوير واجهات برمجة التطبيقات (RESTful APIs) باستخدام FastAPI، وتصميم قواعد بيانات PostgreSQL محسّنة للأداء. أتعاون بنشاط مع الفريق باستخدام Git للتحكم بالإصدارات وأساهم في عمليات الاختبار والتصحيح وتحسين الأداء لضمان أنظمة إنتاج عالية الجودة والموثوقية."
        },
        skills: {
            title: "المهارات",
            programming: "لغات البرمجة",
            frameworks: "الأطر والتقنيات",
            databases: "قواعد البيانات",
            tools: "الأدوات",
            languages: "اللغات",
            arabic: "العربية",
            english: "الإنجليزية"
        },
        achievements: {
            title: "الإنجازات والمسابقات",
            icpc: {
                title: "مسابقة ICPC - Libyan CPC",
                description: "شاركت في مسابقة البرمجة التنافسية الدولية ICPC - النسخة الليبية 2024 وحصلت على المركز التاسع",
                rank: "الترتيب: 9"
            }
        },
        certificates: {
            title: "الشهادات",
            icpc: {
                title: "شهادة إنجاز - مسابقة ICPC",
                description: "مسابقة البرمجة التنافسية الدولية ICPC - النسخة الليبية 2024",
                issuer: "المركز التاسع - جامعة الزاوية (أكتوبر 2024)"
            },
            appreciation: {
                title: "شهادة شكر وتقدير",
                rank2: "الترتيب الثاني على مستوى قسم تقنيات الحاسوب - الفصل الدراسي خريف 2024-2025",
                faculty: "كلية تقنية المعلومات"
            },
            ntd: {
                "2025": "التعاون في فعاليات اليوم الوطني لتقنية المعلومات - مدينة الزاوية",
                "2024": "التعاون في فعاليات اليوم الوطني لتقنية المعلومات - مدينة الزاوية"
            },
            participation: {
                title: "شهادة مشاركة",
                firstaid: "دورة تدريبية في الإسعافات الأولية",
                redcrescent: "الهلال الأحمر الليبي - فرع الزاوية (2018)"
            },
            attendance: {
                title: "شهادة حضور",
                iot: "دورة تدريبية في إنترنت الأشياء (IoT) - 16 ساعة تدريبية",
                center: "مركز تنمية وتطوير الموارد البشرية"
            }
        },
        contact: {
            title: "التواصل",
            phone: "الهاتف",
            email: "البريد الإلكتروني",
            address: "العنوان",
            location: "ليبيا - الزاوية"
        },
        footer: {
            name: "محمد حمزة",
            rights: "جميع الحقوق محفوظة"
        },
        modal: {
            clickToZoom: "انقر للتكبير"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            skills: "Skills",
            achievements: "Achievements",
            certificates: "Certificates",
            contact: "Contact"
        },
        hero: {
            name: "M. Mohammed Hamza",
            subtitle: "Full Stack Developer",
            description: "Specialized in building scalable web and mobile applications using the latest technologies and programming tools",
            contactBtn: "Contact Me",
            certificatesBtn: "View Certificates"
        },
        about: {
            title: "About Me",
            text: "Full Stack Developer specialized in building scalable web and mobile applications using the latest technologies and programming tools. I have extensive experience in backend development using FastAPI and PostgreSQL, and frontend and mobile application development using Flutter and JavaScript. Passionate about designing clean software architectures, secure systems, and responsive interfaces that provide an excellent user experience. I possess strong problem-solving skills with a strong academic background in Information Technology."
        },
        education: {
            title: "Education",
            degree: "Bachelor's Degree in Information Technology",
            university: "University of Zawia"
        },
        experience: {
            title: "Work Experience",
            position: "Full Stack Developer",
            company: "Asas Company",
            period: "2024 - Present",
            description: "I work as an application developer within a professional team, contributing to the development of scalable mobile and backend solutions. I build and maintain high-quality Flutter applications, develop RESTful APIs using FastAPI, and design performance-optimized PostgreSQL databases. I actively collaborate with the team using Git for version control and contribute to testing, debugging, and performance improvement processes to ensure high-quality and reliable production systems."
        },
        skills: {
            title: "Skills",
            programming: "Programming Languages",
            frameworks: "Frameworks & Technologies",
            databases: "Databases",
            tools: "Tools",
            languages: "Languages",
            arabic: "Arabic",
            english: "English"
        },
        achievements: {
            title: "Achievements & Competitions",
            icpc: {
                title: "ICPC - Libyan CPC Competition",
                description: "Participated in the International Collegiate Programming Contest ICPC - Libyan edition 2024 and achieved 9th place",
                rank: "Rank: 9"
            }
        },
        certificates: {
            title: "Certificates",
            icpc: {
                title: "Achievement Certificate - ICPC Competition",
                description: "International Collegiate Programming Contest ICPC - Libyan edition 2024",
                issuer: "9th Place - University of Zawia (October 2024)"
            },
            appreciation: {
                title: "Certificate of Appreciation",
                rank2: "Second place at the Computer Technologies Department level - Fall semester 2024-2025",
                faculty: "Faculty of Information Technology"
            },
            ntd: {
                "2025": "Cooperation in National Technology Day events - Zawia City",
                "2024": "Cooperation in National Technology Day events - Zawia City"
            },
            participation: {
                title: "Certificate of Participation",
                firstaid: "First Aid Training Course",
                redcrescent: "Libyan Red Crescent - Zawia Branch (2018)"
            },
            attendance: {
                title: "Certificate of Attendance",
                iot: "Internet of Things (IoT) Training Course - 16 training hours",
                center: "Human Resources Development and Training Center"
            }
        },
        contact: {
            title: "Contact",
            phone: "Phone",
            email: "Email",
            address: "Address",
            location: "Libya - Zawia"
        },
        footer: {
            name: "Mohammed Hamza",
            rights: "All rights reserved"
        },
        modal: {
            clickToZoom: "Click to zoom"
        }
    }
};
