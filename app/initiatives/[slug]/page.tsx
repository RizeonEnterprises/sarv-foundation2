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
      "Women often suppress their voices, dreams, and emotions.",
      "Sakhi Saheli creates a safe space for sharing, healing, and rediscovery.",
    ],
    quote:
      "When a woman shares her story, she doesn't just heal herself; she gives permission to others.",
    activities: [
      { title: "Healing Circles", desc: "Safe emotional expression spaces." },
      { title: "Skill Workshops", desc: "Art & financial learning." },
      { title: "Joyful Retreats", desc: "Reconnect with joy." },
    ],
  },

  {
    slug: "sarv-shiksha",
    title: "Sarv Shiksha",
    subtitle: "Empowering every child through education.",
    image: "/images/2025-SARV-I-05.webp",
    intro: [
      "Education transforms lives.",
      "We ensure no child is left behind.",
    ],
    activities: [
      { title: "Scholarships", desc: "Financial support." },
      { title: "Learning Materials", desc: "Books & supplies." },
      { title: "After-School Support", desc: "Mentorship." },
    ],
  },

  {
    slug: "saksham-shakti",
    title: "Saksham Shakti",
    subtitle: "Skill development for independence.",
    image: "/images/2025-SARV-I-03.webp",
    intro: [
      "Empowerment begins with self-reliance.",
      "We train women for financial independence.",
    ],
    activities: [
      { title: "Vocational Training", desc: "Job-ready skills." },
      { title: "Financial Literacy", desc: "Money management." },
      { title: "Entrepreneurship", desc: "Business support." },
    ],
  },

  {
    slug: "sarv-saanjh",
    title: "Sarv Saanjh",
    subtitle: "Community kitchen initiative.",
    image: "/images/2025-SARV-I-01.webp",
    intro: [
      "No one should sleep hungry.",
      "We provide meals with dignity.",
    ],
    activities: [
      { title: "Meals", desc: "Daily distribution." },
      { title: "Outreach", desc: "Serving slums." },
      { title: "Community Dining", desc: "Respectful spaces." },
    ],
  },

  {
    slug: "sarv-sahayata",
    title: "Sarv Sahayata",
    subtitle: "Emergency relief support.",
    image: "/images/2025-SARV-I-04.webp",
    intro: [
      "Helping during crises.",
      "Relief + rehabilitation.",
    ],
    activities: [
      { title: "Relief", desc: "Food & medicine." },
      { title: "Rehabilitation", desc: "Recovery support." },
      { title: "Preparedness", desc: "Awareness training." },
    ],
  },

  {
    slug: "sarv-vatika",
    title: "Sarv Vatika",
    subtitle: "Environmental sustainability.",
    image: "/images/2025-SARV-I-07.webp",
    intro: [
      "Protecting nature is essential.",
      "We promote green living.",
    ],
    activities: [
      { title: "Tree Plantation", desc: "Green drives." },
      { title: "Waste Management", desc: "Reduce plastic." },
      { title: "Awareness", desc: "Eco education." },
    ],
  },

  {
    slug: "sarv-swasthya",
    title: "Sarv Swasthya",
    subtitle: "Health and hygiene awareness.",
    image: "/images/2025-SARV-I-06.webp",
    intro: [
      "Health is the foundation of life.",
      "We provide medical access.",
    ],
    activities: [
      { title: "Health Camps", desc: "Free checkups." },
      { title: "Hygiene", desc: "Clean living." },
      { title: "Maternal Care", desc: "Women support." },
    ],
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = data.find((i) => i.slug === slug);

  if (!item) return notFound();

  return (
    <div className="pt-28 px-6 bg-[#f8f6f3] min-h-screen">

      {/* HEADER TEXT */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {item.title}
        </h1>
        <p className="text-gray-600">{item.subtitle}</p>
      </div>

      {/* IMAGE + CONTENT */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-20">

        {/* IMAGE FIXED */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          {item.intro.map((p, i) => (
            <p key={i} className="text-gray-700 mb-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* QUOTE */}
      {item.quote && (
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FaQuoteLeft className="mx-auto text-3xl mb-4 text-gray-400" />
          <p className="italic text-xl text-gray-700">
            "{item.quote}"
          </p>
        </div>
      )}

      {/* ACTIVITIES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {item.activities.map((a, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
            <p className="text-gray-600 text-sm">{a.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}