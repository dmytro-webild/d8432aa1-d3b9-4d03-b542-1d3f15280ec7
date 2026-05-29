import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Excellence Academy - Futuristic 3D Skills Training in Hyderabad',
  description: 'Transforming students into confident leaders with immersive 3D education, expert faculty, and a premium learning environment in Hyderabad, India.',
  keywords: ["Excellence Academy, Skills Training Hyderabad, Futuristic Education, 3D Learning, Spoken English, Computer Skills, Personality Development, Music Training, Hyderabad Academy, Premium Education"],
  openGraph: {
    "title": "Excellence Academy - Futuristic 3D Skills Training in Hyderabad",
    "description": "Transforming students into confident leaders with immersive 3D education, expert faculty, and a premium learning environment in Hyderabad, India.",
    "url": "https://excellenceacademy.com",
    "siteName": "Excellence Academy for Skills",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/asian-college-student-working-her-laptop-campus_231208-1873.jpg",
        "alt": "Futuristic academy environment"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Excellence Academy - Futuristic 3D Skills Training in Hyderabad",
    "description": "Transforming students into confident leaders with immersive 3D education, expert faculty, and a premium learning environment in Hyderabad, India.",
    "images": [
      "http://img.b2bpic.net/free-photo/asian-college-student-working-her-laptop-campus_231208-1873.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
