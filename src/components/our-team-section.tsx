import { motion } from "framer-motion";
import RajRayImage from "@/assets/RajRay.png";
import DevRoyImage from "@/assets/DevRoy.png";

const teamMembers = [
  {
    name: "Dr. Raj Ray",
    title: "Founder, CEO & CTO",
    description: "Dr. Raj Ray is an accomplished US-based high-tech executive with over 20 years of experience. He is an expert in leading advanced software/hardware R&D and innovation, managing engineering teams, and spearheading strategic tech-business initiatives. With senior leadership roles at tech giants like Intel and Motorola, and a prolific background in AI/ML, Blockchain, IoT, VLSI, and Web Technologies, he has built 7 ventures with 5 M&A's, and is a passionate advocate for digital innovation and transformation. He is also a trained vocalist, voice artist, and award-winning debater.",
    image: RajRayImage,
  },
  {
    name: "Dr. Dave Roy",
    title: "CSO & Co-Founder",
    description: "Dr. Dave Roy is an Associate Professor of Biology at Alcorn State University, USA, holding a BVSC & AH degree from CU, India, a doctoral degree in pathobiology from the University of Texas, and postdoctoral training at Mayo Clinic. His research focuses on metabolic alterations in gynecological cancers and preclinical drug studies. He actively publishes in peer-reviewed journals and is involved in national and international collaborative projects, currently funded by NSF EPSCoR and NIH-MS INBRE research grants. He is also a trained Sitarist and involved in music and media shows.",
    image: DevRoyImage,
  },
];

export const OurTeamSection = () => {
  return (
    <section id="our-team" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gradient-purple"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-primary"
              />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-lg text-primary mb-4">
                {member.title}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
