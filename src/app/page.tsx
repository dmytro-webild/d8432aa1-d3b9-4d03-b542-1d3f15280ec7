"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  variable: "--font-archivo",  subsets: ["latin"]
});

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmall"
      background="noise"
      cardStyle="subtle-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav" className={archivo.variable}>
        <NavbarStyleCentered
          brandName="Excellence Academy for Skills"
          navItems={[
            { name: "Home", id: "#hero" },
            { name: "Courses", id: "#courses" },
            { name: "Features", id: "#features" },
            { name: "Statistics", id: "#statistics" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "Gallery", id: "#gallery" },
            { name: "Contact", id: "#contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero" className={archivo.variable}>
        <HeroBillboardScroll
          title="Excellence Academy for Skills"
          description="Transforming Students into Confident Leaders"
          background={{
            variant: "animated-grid"
          }}
          buttons={[
            { text: "Join Now", href: "#contact" },
            { text: "Book Free Demo", href: "#contact" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/asian-college-student-working-her-laptop-campus_231208-1873.jpg"
          imageAlt="Futuristic academy environment with floating educational objects"
          ariaLabel="Hero section showcasing Excellence Academy for Skills"
          tagAnimation="none"
          buttonAnimation="none"
        />
      </div>

      <div id="courses" data-section="courses" className={archivo.variable}>
        <ProductCardTwo
          title="Our Premium Skill Enhancement Courses"
          description="Unlock your potential with our meticulously crafted programs, featuring immersive 3D learning experiences and expert guidance. Each course is designed to foster growth and leadership."
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          products={[
            { id: "spoken-english", brand: "Excellence Academy", name: "Spoken English", price: "Inquire Now", rating: 5, reviewCount: "Learn More", imageSrc: "http://img.b2bpic.net/free-photo/smartwatch-screen_53876-89049.jpg", imageAlt: "Holographic icon for Spoken English course" },
            { id: "tuition-classes", brand: "Excellence Academy", name: "Tuition Classes", price: "Inquire Now", rating: 5, reviewCount: "Learn More", imageSrc: "http://img.b2bpic.net/free-photo/light-bulb-right-side-with-white-background_187299-39888.jpg", imageAlt: "Holographic icon for Tuition Classes" },
            { id: "music-training", brand: "Excellence Academy", name: "Music Training", price: "Inquire Now", rating: 5, reviewCount: "Learn More", imageSrc: "http://img.b2bpic.net/free-photo/diagonal-view-dark-modern-cassette-tape_23-2148289092.jpg", imageAlt: "Holographic icon for Music Training" },
            { id: "computer-skills", brand: "Excellence Academy", name: "Computer Skills", price: "Inquire Now", rating: 5, reviewCount: "Learn More", imageSrc: "http://img.b2bpic.net/free-vector/gradient-power-outage-labels_23-2149263629.jpg", imageAlt: "Holographic icon for Computer Skills" },
            { id: "personality-development", brand: "Excellence Academy", name: "Personality Development", price: "Inquire Now", rating: 5, reviewCount: "Learn More", imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-man-doing-kettlebells_183364-118241.jpg", imageAlt: "Holographic icon for Personality Development" },
            { id: "communication-skills", brand: "Excellence Academy", name: "Communication Skills", price: "Inquire Now", rating: 5, reviewCount: "Learn More", imageSrc: "http://img.b2bpic.net/free-vector/purple-speech-balloon-design-element-vector_53876-168945.jpg", imageAlt: "Holographic icon for Communication Skills" }
          ]}
          ariaLabel="Courses section with premium skill enhancement programs"
        />
      </div>

      <div id="features" data-section="features" className={archivo.variable}>
        <FeatureCardSixteen
          title="Why Excellence Academy is Your Best Choice"
          description="Experience an unparalleled educational journey with our commitment to excellence, innovation, and student success."
          positiveCard={{
            items: [
              "Expert Faculty: Learn from industry leaders with proven track records.",              "Friendly Environment: A supportive and collaborative learning atmosphere.",              "Online & Offline Classes: Flexible options to fit your schedule.",              "Personalized Attention: Tailored guidance for individual growth.",              "Skill Development: Enhance practical skills for real-world success.",              "Career Growth: Pathways to accelerate your professional journey."
            ]
          }}
          negativeCard={{
            items: []
          }}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Features section highlighting academy benefits"
        />
      </div>

      <div id="statistics" data-section="statistics" className={archivo.variable}>
        <MetricCardEleven
          title="Driving Success Through Numbers"
          description="Our commitment to student achievement and educational quality is reflected in our outstanding results."
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          metrics={[
            { id: "students", value: "500+", title: "Students Enrolled", description: "Empowering the next generation of leaders.", imageSrc: "http://img.b2bpic.net/free-photo/cinematic-style-mall_23-2151551149.jpg", imageAlt: "Holographic visual of 500+ students" },
            { id: "reviews", value: "5-Star", title: "Reviews", description: "Consistent excellence in education.", imageSrc: "http://img.b2bpic.net/free-photo/star-shaped-specks-light_23-2147798841.jpg", imageAlt: "Holographic visual of 5-star reviews" },
            { id: "improvement", value: "100%", title: "Skill Improvement", description: "Guaranteed growth and mastery of skills.", imageSrc: "http://img.b2bpic.net/free-photo/graduation-high-school-university-concept_185193-110755.jpg", imageAlt: "Holographic visual of 100% skill improvement" },
            { id: "trainers", value: "Experienced", title: "Trainers", description: "Learn from the best in the industry.", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-holographic-layering_23-2150491107.jpg", imageAlt: "Holographic visual of experienced trainers" }
          ]}
          ariaLabel="Statistics section showing academy achievements"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className={archivo.variable}>
        <TestimonialCardOne
          title="What Our Students Say"
          description="Hear from our confident leaders and their parents about their transformative experiences at Excellence Academy."
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            { id: "1", name: "Sarah Johnson", role: "Student", company: "Excellence Academy", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-suit-cross-arms-chest-looking-like-real-professional-smili_1258-122403.jpg", imageAlt: "Sarah Johnson avatar" },
            { id: "2", name: "Rohan Sharma", role: "Parent", company: "Excellence Academy", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/three-dimensional-representation-krishna-hindu-deity-avatar_23-2151200153.jpg", imageAlt: "Rohan Sharma avatar" },
            { id: "3", name: "Priya Singh", role: "Student", company: "Excellence Academy", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/business-woman-posing-street_23-2148213587.jpg", imageAlt: "Priya Singh avatar" },
            { id: "4", name: "Aditya Kumar", role: "Student", company: "Excellence Academy", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/african-american-man-with-face-painting_23-2148932844.jpg", imageAlt: "Aditya Kumar avatar" },
            { id: "5", name: "Anjali Verma", role: "Parent", company: "Excellence Academy", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-asian-woman-with-professional-make-up-close-up_23-2148932886.jpg", imageAlt: "Anjali Verma avatar" }
          ]}
          ariaLabel="Testimonials section with student and parent reviews"
        />
      </div>

      <div id="gallery" data-section="gallery" className={archivo.variable}>
        <BlogCardTwo
          title="Immersive Learning: Our Academy in Action"
          description="Step into our futuristic classrooms, state-of-the-art computer labs, and vibrant music studios. Witness moments of learning, collaboration, and success."
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          blogs={[
            { id: "1", category: "Classrooms", title: "State-of-the-Art Classrooms", excerpt: "Experience learning in our technologically advanced, interactive classrooms designed for optimal engagement.", imageSrc: "http://img.b2bpic.net/free-photo/view-futuristic-high-tech-classroom-students_23-2150906202.jpg", imageAlt: "Futuristic academy classroom", authorName: "Excellence Academy Team", authorAvatar: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-suit-cross-arms-chest-looking-like-real-professional-smili_1258-122403.jpg", date: "2024-07-26" },
            { id: "2", category: "Learning", title: "Students Engaging in Learning", excerpt: "See our students thrive as they collaborate and discover new concepts using innovative learning tools.", imageSrc: "http://img.b2bpic.net/free-photo/futuristic-brain-interface_23-2152011753.jpg", imageAlt: "Students learning in a futuristic setting", authorName: "Excellence Academy Team", authorAvatar: "http://img.b2bpic.net/free-photo/three-dimensional-representation-krishna-hindu-deity-avatar_23-2151200153.jpg", date: "2024-07-26" },
            { id: "3", category: "English Training", title: "Dynamic Spoken English Training", excerpt: "Our immersive English training sessions empower students with confidence and fluency for global communication.", imageSrc: "http://img.b2bpic.net/free-photo/two-cartoon-students-studying-desk-with-laptop-book_23-2151979252.jpg", imageAlt: "Spoken English training session", authorName: "Excellence Academy Team", authorAvatar: "http://img.b2bpic.net/free-photo/business-woman-posing-street_23-2148213587.jpg", date: "2024-07-26" },
            { id: "4", category: "Computer Labs", title: "Cutting-Edge Computer Labs", excerpt: "Explore our modern computer labs equipped with the latest technology for hands-on skill development and innovation.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man-making-thumb-up-gesture-showing-digital-tablet_23-2148098189.jpg", imageAlt: "Advanced computer lab", authorName: "Excellence Academy Team", authorAvatar: "http://img.b2bpic.net/free-photo/african-american-man-with-face-painting_23-2148932844.jpg", date: "2024-07-26" },
            { id: "5", category: "Music Practice", title: "Vibrant Music Practice Studios", excerpt: "Unleash your musical talent in our acoustically perfected studios, fostering creativity and artistic expression.", imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349278.jpg", imageAlt: "Music practice studio", authorName: "Excellence Academy Team", authorAvatar: "http://img.b2bpic.net/free-photo/portrait-young-asian-woman-with-professional-make-up-close-up_23-2148932886.jpg", date: "2024-07-26" },
            { id: "6", category: "Success", title: "Moments of Achievement & Success", excerpt: "Celebrate milestones and see the pride of accomplishment in our students' successful journeys.", imageSrc: "http://img.b2bpic.net/free-photo/young-female-wearing-vr-headset-with-cup-dark-floor-video-gaming-vision-game-play_179666-42792.jpg", imageAlt: "Students celebrating success", authorName: "Excellence Academy Team", authorAvatar: "http://img.b2bpic.net/free-photo/portrait-confident-businesswoman-suit-cross-arms-chest-looking-like-real-professional-smili_1258-122403.jpg", date: "2024-07-26" }
          ]}
          ariaLabel="Gallery section showcasing academy life and facilities"
        />
      </div>

      <div id="contact" data-section="contact" className={archivo.variable}>
        <ContactText
          text="Ready to embark on a transformative educational journey? Contact Excellence Academy for Skills today and step into your future. We are located in Hyderabad, Telangana."
          background={{
            variant: "radial-gradient"
          }}
          buttons={[
            { text: "Call Now: 63020 75781", href: "tel:+916302075781" },
            { text: "WhatsApp Us", href: "https://wa.me/916302075781" },
            { text: "Open in Google Maps", href: "https://www.google.com/maps/search/Excellence+Academy+for+Skills+Hyderabad+Telangana" }
          ]}
          useInvertedBackground={false}
          animationType="entrance-slide"
          ariaLabel="Contact section for inquiries and location"
        />
      </div>

      <div id="footer" data-section="footer" className={archivo.variable}>
        <FooterLogoEmphasis
          logoText="Excellence Academy for Skills"
          logoSrc="http://img.b2bpic.net/free-vector/luxury-logo-collection_1195-206.jpg"
          logoAlt="Excellence Academy Logo"
          columns={[
            { items: [{ label: "Home", href: "#hero" }, { label: "Courses", href: "#courses" }, { label: "Features", href: "#features" }, { label: "Testimonials", href: "#testimonials" }, { label: "Gallery", href: "#gallery" }] },
            { items: [{ label: "About Us", href: "#" }, { label: "Our Team", href: "#" }, { label: "Career", href: "#" }, { label: "FAQ", href: "#" }, { label: "Blog", href: "#" }] },
            { items: [{ label: "Contact Us", href: "#contact" }, { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
          ]}
          ariaLabel="Site footer with navigation and academy information"
        />
      </div>
    </ThemeProvider>
  );
}
