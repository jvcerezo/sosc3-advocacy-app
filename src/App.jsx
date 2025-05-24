import React, { useState, useEffect } from 'react';

// --- Icon components ---
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);
const DocumentTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);
const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V18.75m7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h14.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125z" />
  </svg>
);

// --- Chart Placeholders ---
const BarChartPlaceholder = ({ title, label1, label2, value1, value2, color1, color2 }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center shadow-sm h-full flex flex-col justify-between">
        <h5 className="font-semibold mb-4 text-gray-700">{title}</h5>
        <div className="flex-grow flex items-end justify-center space-x-8 p-4 min-h-[200px]">
            <div className="text-center">
                <div className="w-12 rounded-t-md transition-all duration-500" style={{ height: `${value1 * 1.5}px`, background: color1 }}></div>
                <p className="mt-2 text-xs font-medium">{label1}</p>
            </div>
            <div className="text-center">
                <div className="w-12 rounded-t-md transition-all duration-500" style={{ height: `${value2 * 1.5}px`, background: color2 }}></div>
                <p className="mt-2 text-xs font-medium">{label2}</p>
            </div>
        </div>
         <p className="mt-4 text-sm text-gray-600">Illustrates the significant disparity in reported online harassment, emphasizing the need for focused safety measures.</p>
    </div>
);
const PieChartPlaceholder = ({ title }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center shadow-sm h-full flex flex-col justify-between">
        <h5 className="font-semibold mb-4 text-gray-700">{title}</h5>
        <div className="flex-grow flex items-center justify-center p-4 min-h-[200px]">
           <svg className="w-36 h-36" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#A78BFA"/>
              <path d="M50 50 L50 5 A45 45 0 0 1 88.72 71.77 Z" fill="#F472B6"/>
              <circle cx="50" cy="50" r="20" fill="white"/>
           </svg>
        </div>
        <p className="mt-4 text-sm text-gray-600">Represents potential gaps in digital access or literacy, highlighting a key aspect of the digital divide affecting LGBTQ+ communities.</p>
    </div>
);

// --- Header Component ---
const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg rounded-b-lg">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight">Empowering Equity: A Gender & Sexuality Advocacy</h1>
      <p className="text-lg mt-2">Jet Timothy V. Cerezo</p>
      <p className="text-md">SOSC 3 - Final Project</p>
    </div>
  </header>
);

// --- Navigation Component ---
const Navigation = ({ setActiveSection }) => {
  const navItems = [
    { id: 'advocacy', label: 'My Advocacy', icon: <HomeIcon /> },
    { id: 'writeup', label: 'Advocacy Write-Up', icon: <DocumentTextIcon /> },
    { id: 'sosc3', label: 'SOSC 3 Reflection', icon: <LightBulbIcon /> },
  ];
  return (
    <nav className="bg-white p-4 shadow-md rounded-lg my-6">
      <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        {navItems.map(item => (
          <li key={item.id} className="mb-2 sm:mb-0">
            <button
              onClick={() => setActiveSection(item.id)}
              className="flex items-center px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {item.icon}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// --- Section Card Component ---
const SectionCard = ({ title, children }) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl mb-8 transition-all duration-300 hover:shadow-2xl">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-purple-500 flex items-center">
      <InfoIcon /> <span className="ml-2">{title}</span>
    </h2>
    <div className="max-w-none text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Advocacy Overview Section ---
const AdvocacyOverview = () => (
  <SectionCard title="My Advocacy: Tech for All Genders">
    <h3 className="text-purple-600 text-2xl font-bold mb-3 tracking-tight">
      Bridging the Digital Divide & Championing Online Safety for LGBTQ+ Filipinos
    </h3>
    <p className="text-xl italic text-gray-600 mb-6 font-medium">
      <strong>My Spiel:</strong> "Digital World, Equal Rights: Connect, Protect, Empower."
    </p>
    <blockquote className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-md shadow-sm">
      <p className="text-base md:text-lg text-purple-800">
        This advocacy champions <strong>digital equity and online safety</strong> for LGBTQ+ Filipinos. My goal is to persuade policymakers, tech companies, educators, and the public to recognize and actively address the unique challenges LGBTQ+ Filipinos face online, promoting true societal equity.
      </p>
    </blockquote>
    <h4 className="text-gray-800 text-xl font-semibold mt-10 mb-4">The Challenge: A Digital Double Jeopardy</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
      Technology is central to modern life. Yet, for many LGBTQ+ Filipinos, the digital landscape presents a 'double jeopardy':
    </p>
    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-6">
      <li><strong>The Digital Divide:</strong> Limited access to devices and internet restricts opportunities.</li>
      <li><strong>Online Dangers:</strong> High rates of online harassment, hate speech, and bullying impact mental health and silence voices.</li>
    </ul>
    <h4 className="text-gray-800 text-xl font-semibold mt-10 mb-4">My Data-Driven Approach</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
      To build a strong case, I believe in using evidence. My approach involves examining research and presenting data visually to highlight the disparities:
    </p>
    <div className="grid md:grid-cols-2 gap-8 my-8">
       <BarChartPlaceholder
            title="Fig 1: Online Harassment Rates (Illustrative)"
            label1="LGBTQ+"
            label2="Non-LGBTQ+"
            value1={100} value2={40}
            color1="#A78BFA" color2="#F472B6"
        />
        <PieChartPlaceholder title="Fig 2: Digital Access Disparity (Illustrative)" />
    </div>
     <p className="text-gray-700 leading-relaxed mb-4">
        By drawing upon sources like The Trevor Project, Foundation for Media Alternatives (FMA), and advocating for more SOGIE-disaggregated local data from agencies like the Philippine Statistics Authority (PSA), I aim to create a compelling, evidence-based argument for change.
     </p>
    <h4 className="text-gray-800 text-xl font-semibold mt-10 mb-4">Harnessing Science & Technology for Advancement</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
      Technology is key. I advocate for:
    </p>
    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-6">
      <li><strong>Smarter Safety Tools:</strong> AI moderation trained for Filipino contexts.</li>
      <li><strong>Accessible Support Platforms:</strong> Secure reporting and support systems.</li>
      <li><strong>Targeted Digital Literacy:</strong> Programs focusing on LGBTQ+ online safety, in collaboration with DICT.</li>
      <li><strong>Inclusive Tech Design:</strong> Building safety and inclusivity into platforms from the start.</li>
    </ul>
  </SectionCard>
);

// --- Advocacy Write-Up Section ---
const AdvocacyWriteUp = () => (
  <SectionCard title="My Advocacy Write-Up">
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">1. Introduction: Digital Equity as a Human Right</h3>
        <div className="p-4 border border-gray-200 rounded-md bg-white">
          <p className="text-gray-700 leading-relaxed">
            In our increasingly connected world, the digital sphere has become inseparable from daily life – a space for education, work, community, and expression. However, this digital world is not experienced equally. My advocacy, <strong>"Tech for All Genders,"</strong> confronts the critical challenges faced by LGBTQ+ Filipinos online. It addresses the 'digital double jeopardy': the <strong>Digital Divide</strong>, where access and literacy can be significant barriers, and the pervasive issue of <strong>Online Safety</strong>, where LGBTQ+ individuals endure disproportionately high levels of harassment, hate speech, and discrimination.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            These are not just 'online' problems; they have profound real-world consequences, impacting mental health, limiting economic and educational opportunities, and hindering full participation in society. This advocacy argues for a proactive approach, leveraging Science and Technology to build an inclusive and secure digital Philippines for every gender identity and sexual orientation. Achieving digital equity isn't just a tech issue; it's a fundamental human rights issue.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Discussion: Evidence and S&T Solutions</h3>
        <div className="p-4 border border-gray-200 rounded-md bg-white">
          <p className="text-gray-700 leading-relaxed">
            My advocacy is built upon evidence demonstrating the urgency of this issue. As illustrated in the <strong className="text-purple-600">Advocacy Overview (Fig 1)</strong>, the disparity in online harassment rates is stark. International studies, like The Trevor Project's 2024 Global Report, show LGBTQ+ youth experience significantly higher cyberbullying rates. Local insights from groups like the Foundation for Media Alternatives (FMA, 2024) confirm online hostility as a severe problem, often leading to self-censorship and psychological distress.
          </p>
           <p className="text-gray-700 leading-relaxed mt-4">
            Simultaneously, the digital divide persists, as hinted at in <strong className="text-purple-600">Fig 2</strong>. Data from the Philippine Statistics Authority (PSA, 2023), when viewed through an intersectional SOGIE lens, suggests that marginalized LGBTQ+ individuals, particularly in rural areas, lack equitable access.
           </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This evidence demands action. My advocacy proposes leveraging Science and Technology as essential tools. This means developing AI moderation trained for local contexts (FMA, 2024), creating secure support platforms like the #SafeSpacesPH initiative, rolling out SOGIE-inclusive digital literacy programs with DICT, and pushing tech companies towards inclusive design (Choudhury & Kiciman, 2017). By integrating these S&T solutions with policy advocacy (like strengthening the Safe Spaces Act's online provisions) and community efforts, we can build a truly equitable digital Philippines.
          </p>
           <p className="text-gray-600 mt-6 text-sm italic">
            <strong>References:</strong><br/>
            Choudhury, M. D., & Kiciman, E. (2017). The Role of Social Media in Augmenting Political Protests. *Microsoft Research*.<br/>
            Foundation for Media Alternatives. (2024). *Digital Rights in the Philippines Report*. FMA.<br/>
            Philippine Statistics Authority. (2023). *Annual Poverty Indicators Survey*. PSA.<br/>
            The Trevor Project. (2024). *Global Report on LGBTQ Youth Mental Health*. The Trevor Project.
          </p>
        </div>
      </div>
    </div>
  </SectionCard>
);

// --- *** UPDATED SOSC 3 Reflection Section *** ---
const SOSC3Reflection = () => (
  <SectionCard title="SOSC 3 Reflection">
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">My Learning Insights from SOSC 3</h3>
         <div className="p-4 border border-gray-200 rounded-md bg-white">
          <ol className="list-decimal list-inside space-y-4 mt-1 text-gray-700 pl-4">
            <li>
              <strong>Embracing My SOGIESC & Understanding the Community:</strong> SOSC 3 provided a vital, affirming space for self-reflection. It gave me the language and framework to better understand and embrace my own SOGIESC, and I am immensely proud of this personal journey. More broadly, it unveiled the vast, vibrant, and complex world of the LGBTQ+ community, grounding my understanding in both shared struggles and diverse lived experiences.
            </li>
            <li>
              <strong>Recognizing Systemic Hurdles & Fueling Advocacy:</strong> The course starkly highlighted the systemic discrimination, prejudice, and hate that the LGBTQ+ community faces daily in the Philippines. Understanding the depth and breadth of these challenges – from microaggressions to major human rights issues – didn't dishearten me; instead, it ignited a powerful sense of responsibility to use my voice, knowledge, and privilege to advocate for equality and raise awareness.
            </li>
            <li>
              <strong>Connecting Social Justice to the Digital Age:</strong> SOSC 3 equipped me to see how social structures and power dynamics extend into our digital lives. I now understand how online platforms can both empower and endanger LGBTQ+ individuals. This critical insight directly shaped my advocacy project, allowing me to bridge the gap between social justice for gender and sexuality and the pressing need for technological advancement and online safety.
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">My Overall Rating: SOSC 3 Experience</h3>
        <div className="p-4 border border-gray-200 rounded-md bg-white">
          <p className="text-gray-700 leading-relaxed font-bold text-lg text-purple-600">
            My overall experience in SOSC 3 was exceptional. I wholeheartedly rate it a 5 out of 5.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>What I Liked Most:</strong> The classroom environment was truly special. Our instructor fostered an atmosphere of 'courageous conversations,' where we weren't afraid to tackle even the most sensitive and uncomfortable issues surrounding gender and sexuality. This unwavering commitment to open, respectful dialogue was essential for deep, genuine learning. I also deeply appreciated how we constantly connected complex theories to real-world events and the specific context of the Philippines – it made every lesson feel urgent and relevant. The discussions on intersectionality and local activism were particularly impactful.
          </p>
           <p className="text-gray-700 leading-relaxed mt-4">
            This course didn't just teach me facts; it provided me with a new lens through which to view the world and strengthened my commitment to advocating for a more just and equitable society for all, both online and offline.
          </p>
        </div>
      </div>
    </div>
  </SectionCard>
);
// --- *** END UPDATED SOSC 3 Reflection Section *** ---

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-6 mt-12 rounded-t-lg">
    <p>&copy; {new Date().getFullYear()} Jet Timothy V. Cerezo. All rights reserved.</p>
    <p>SOSC 3 - Gender & Sexuality Advocacy Project</p>
  </footer>
);

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('advocacy');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'advocacy':
        return <AdvocacyOverview />;
      case 'writeup':
        return <AdvocacyWriteUp />;
      case 'sosc3':
        return <SOSC3Reflection />;
      default:
        return <AdvocacyOverview />;
    }
  };
  
  useEffect(() => {
    const tailwind = document.createElement('script');
    tailwind.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwind);
    return () => {
      if (tailwind.parentNode === document.head) {
        document.head.removeChild(tailwind);
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex flex-col items-center justify-center p-4 font-sans">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-purple-700 font-semibold">Loading Advocacy Platform...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex flex-col font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Navigation setActiveSection={setActiveSection} />
        <div className="mt-6">
          {renderSection()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;