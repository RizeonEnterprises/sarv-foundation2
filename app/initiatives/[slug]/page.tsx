import { notFound } from "next/navigation";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const data = [
  {
    slug: "sakhi-saheli",
    title: "Sakhi Saheli",
    subtitle: "A Circle of Trust. A Journey of Self.",
    image: "/images/2025-SARV-I-02.webp",
    intro: [
      "In many communities, women are often expected to prioritize others before themselves — quietly setting aside their own dreams, emotions, and identity.",
      "Sakhi Saheli creates a safe, non-judgmental space where women can speak freely, share their stories, and rediscover who they are beyond societal roles.",
      "Through empathy, connection, and shared experiences, women begin to rebuild confidence, find their voice, and realize they are not alone.",
      "This initiative nurtures emotional strength and creates a strong support system where every woman feels valued and heard."
    ],
    quote:
      "When a woman shares her story, she doesn't just heal herself; she inspires others to find their voice.",
    activities: [
      { title: "Healing Circles", desc: "Safe spaces for emotional sharing and expression." },
      { title: "Skill Workshops", desc: "Creative and financial skills for growth." },
      { title: "Joyful Retreats", desc: "Reconnect with self and inner happiness." },
    ],
  },

  {
    slug: "sarv-shiksha",
    title: "Sarv Shiksha",
    subtitle: "Empowering every child through education.",
    image: "/images/2025-SARV-I-05.webp",
    intro: [
      "Education is the most powerful tool for breaking the cycle of poverty.",
      "Sarv Shiksha ensures that every child, regardless of background, has access to quality education.",
      "We provide resources, mentorship, and continuous support to help children grow academically and personally.",
      "By investing in education, we are building a brighter and more equitable future for all."
    ],
    activities: [
      { title: "Scholarships", desc: "Financial assistance for underprivileged students." },
      { title: "Learning Materials", desc: "Books, stationery, and digital tools." },
      { title: "Mentorship", desc: "After-school guidance and academic support." },
    ],
  },

  {
    slug: "saksham-shakti",
    title: "Saksham Shakti",
    subtitle: "Skill development for independence.",
    image: "/images/2025-SARV-I-03.webp",
    intro: [
      "Empowerment begins with self-reliance and opportunity.",
      "Saksham Shakti equips women with practical skills that enable financial independence.",
      "We focus on building confidence, capability, and long-term sustainability.",
      "Women trained under this initiative become self-sufficient and active contributors to their families and communities."
    ],
    activities: [
      { title: "Vocational Training", desc: "Hands-on training for job-ready skills." },
      { title: "Financial Literacy", desc: "Understanding savings and budgeting." },
      { title: "Entrepreneurship", desc: "Support for starting small businesses." },
    ],
  },

  {
    slug: "sarv-saanjh",
    title: "Sarv Saanjh",
    subtitle: "Serving meals with dignity.",
    image: "/images/2025-SARV-I-01.webp",
    intro: [
      "Hunger is not just a lack of food but a lack of dignity.",
      "Sarv Saanjh ensures that no one sleeps hungry by providing nutritious meals.",
      "We serve food with compassion, respect, and care to those in need.",
      "This initiative fosters a sense of community and belonging."
    ],
    activities: [
      { title: "Meal Distribution", desc: "Daily meals for underserved communities." },
      { title: "Outreach", desc: "Reaching vulnerable areas and slums." },
      { title: "Community Dining", desc: "Respectful and inclusive meal spaces." },
    ],
  },

  {
    slug: "sarv-sahayata",
    title: "Sarv Sahayata",
    subtitle: "Support in times of crisis.",
    image: "/images/2025-SARV-I-04.webp",
    intro: [
      "In times of crisis, timely help can change lives.",
      "Sarv Sahayata provides emergency relief and long-term rehabilitation support.",
      "We stand with communities during disasters and help them rebuild.",
      "Our focus is not just relief but restoring hope and stability."
    ],
    activities: [
      { title: "Emergency Relief", desc: "Food, clothing, and medical aid." },
      { title: "Rehabilitation", desc: "Helping families recover and rebuild." },
      { title: "Preparedness", desc: "Disaster awareness and training." },
    ],
  },

  {
    slug: "sarv-vatika",
    title: "Sarv Vatika",
    subtitle: "Nurturing nature for tomorrow.",
    image: "/images/2025-SARV-I-07.webp",
    intro: [
      "Environmental sustainability is essential for future generations.",
      "Sarv Vatika promotes eco-friendly practices and green living.",
      "We encourage communities to take responsibility for the environment.",
      "Together, we are building a cleaner and greener future."
    ],
    activities: [
      { title: "Tree Plantation", desc: "Community plantation drives." },
      { title: "Waste Management", desc: "Reducing plastic and promoting recycling." },
      { title: "Eco Awareness", desc: "Educating people about sustainability." },
    ],
  },

  {
    slug: "sarv-swasthya",
    title: "Sarv Swasthya",
    subtitle: "Health and hygiene for all.",
    image: "/images/2025-SARV-I-06.webp",
    intro: [
      "Good health is the foundation of a strong society.",
      "Sarv Swasthya provides access to healthcare and promotes hygiene awareness.",
      "We focus on preventive care and community well-being.",
      "Special attention is given to women and children’s health needs."
    ],
    activities: [
      { title: "Health Camps", desc: "Free medical checkups and consultations." },
      { title: "Hygiene Awareness", desc: "Promoting clean and healthy habits." },
      { title: "Maternal Care", desc: "Support for women’s health." },
    ],
  },
];

export default async function InitiativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = data.find((i) => i.slug === slug);

  if (!item) return notFound();

  return (
    <div className="pt-28 px-6 bg-[#f8f6f3] min-h-screen">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          {item.title}
        </h1>
        <p className="text-gray-500 text-lg">{item.subtitle}</p>
      </div>

      {/* TEXT LEFT + IMAGE RIGHT */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-20">

        <div className="space-y-5">
          {item.intro.map((p, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed border-l-4 border-black/20 pl-4">
              {p}
            </p>
          ))}
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[700px] h-[300px] rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
          </div>
        </div>
      </div>

      {/* QUOTE */}
      {item.quote && (
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FaQuoteLeft className="mx-auto text-2xl mb-4 text-gray-400" />
          <p className="italic text-lg text-gray-700">"{item.quote}"</p>
        </div>
      )}

      {/* MODERN CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {item.activities.map((a, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
            <p className="text-gray-600 text-sm">{a.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
