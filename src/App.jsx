import React, { useState, useEffect } from 'react';

// --- Icon components (simple SVGs for placeholders) ---
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


// --- Header Component ---
const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg rounded-b-lg">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold tracking-tight">Empowering Equity: A Gender & Sexuality Advocacy</h1>
      <p className="text-lg mt-2">Jet Timothy V. Cerezo - 202103014</p>
      <p className="text-md">SOSC 3 - Final Project</p>
    </div>
  </header>
);

// --- Navigation Component ---
const Navigation = ({ setActiveSection }) => {
  const navItems = [
    { id: 'advocacy', label: 'Advocacy Overview', icon: <HomeIcon /> },
    { id: 'writeup', label: 'Advocacy Write-Up', icon: <DocumentTextIcon /> },
    { id: 'sosc3', label: 'SOSC 3 Reflection', icon: <LightBulbIcon /> }, // Changed label and id
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
  <div className="bg-white p-6 rounded-xl shadow-xl mb-8 transition-all duration-300 hover:shadow-2xl">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-purple-500 flex items-center">
      <InfoIcon /> <span className="ml-2">{title}</span>
    </h2>
    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

// --- Advocacy Overview Section ---
const AdvocacyOverview = () => (
  <SectionCard title="Advocacy Overview: Info-Persuasive Material">
    <p className="mb-4">This info-persuasive material is a <strong>Gender and Sexuality advocacy</strong> that promotes societal equity and equality. It showcases an understanding of Exploring Gender and Sexuality by creating material that will persuade people to adhere to or believe a specific humanitarian advocacy.</p>
    <p className="mb-4">This project involves basic research and examination of evidence to make a compelling point. It serves as the <strong>ultimate outcome for SOSC 3</strong> and is due on the last week of the semester.</p>

    <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Project Guidelines:</h3>
    <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
      <li>This is an <strong>individual project</strong>.</li>
      <li>Everyone is encouraged to be as <strong>creative as possible</strong>.</li>
      <li>One must conduct <strong>simple research</strong> to support their advocacy.</li>
    </ul>

    <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Advocacy Requirements:</h3>
    <ul className="list-disc list-inside space-y-3 pl-4">
      <li>
        <strong>Data-Driven:</strong> The advocacy must be well-researched and not based on hearsay.
        <blockquote className="mt-2 p-3 bg-purple-50 border-l-4 border-purple-400 text-purple-700 rounded-md">
          <em>Example: "In this advocacy, we will present statistics on [specific issue, e.g., workplace discrimination against LGBTQ+ individuals in Region X] from sources like [e.g., a local NGO report or national statistics office]."</em>
        </blockquote>
      </li>
      <li>
        <strong>Advancement of Science and Technology:</strong> The advocacy should promote the advancement of Science and Technology in addressing socioeconomic issues related to gender and sexuality.
         <blockquote className="mt-2 p-3 bg-pink-50 border-l-4 border-pink-400 text-pink-700 rounded-md">
          <em>Example: "We will explore how technology (e.g., AI-powered tools for detecting bias in hiring, online platforms for safe reporting of harassment, telehealth services for LGBTQ+ specific healthcare) can be leveraged to mitigate these issues and promote inclusivity."</em>
        </blockquote>
      </li>
      <li>
        <strong>Catchy and Respectful Spiel:</strong> The advocacy spiel should be catchy; however, harsh or foul words must be avoided.
         <blockquote className="mt-2 p-3 bg-indigo-50 border-l-4 border-indigo-400 text-indigo-700 rounded-md">
          <em>Example: "Our slogan, '[Your Catchy Slogan Here, e.g., Equity in Every Identity: Understand, Accept, Act!]', aims to be memorable and inspiring."</em>
        </blockquote>
      </li>
      <li>
        <strong>Sensitivity:</strong> The advocacy must be sensitive to all genders, races, classes, and statuses.
        <blockquote className="mt-2 p-3 bg-green-50 border-l-4 border-green-400 text-green-700 rounded-md">
          <em>"This means using inclusive language, acknowledging diverse experiences, and ensuring that the proposed solutions benefit all marginalized groups within the gender and sexuality spectrum."</em>
        </blockquote>
      </li>
    </ul>
  </SectionCard>
);

// --- Advocacy Write-Up Section ---
const AdvocacyWriteUp = () => (
  <SectionCard title="Advocacy Write-Up (Max: 500 words)">
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">1. Introduction: What is the issue all about?</h3>
        <p className="italic text-gray-500 mb-2">Guidance: Clearly define the specific gender and sexuality issue your advocacy addresses. Explain its significance and impact.</p>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="font-medium text-gray-800">Your Introduction Here:</p>
          <p className="text-gray-600 mt-1">
            <em>(Example: "This advocacy confronts the pervasive societal inequities and discrimination faced by individuals based on their gender and sexuality, specifically focusing on [e.g., lack of access to mental health services for transgender youth, or workplace harassment based on sexual orientation]. It addresses the urgent need for greater understanding, acceptance, and systemic change to ensure that all people, regardless of their gender identity, gender expression, or sexual orientation, are treated with dignity and have equal opportunities to thrive. We will explore the multifaceted nature of this problem, supported by evidence demonstrating its detrimental effects on individuals and society...")</em>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Discussion: Review of Articles & Strengthening Arguments</h3>
        <p className="italic text-gray-500 mb-2">Guidance: Include a review of articles to strengthen your point. Mention legitimate sources and cite authors to avoid plagiarism. Summarize points and arguments for strong support.</p>
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="font-medium text-gray-800">Your Discussion Here:</p>
          <p className="text-gray-600 mt-1">
            <em>(Example: "To build a strong foundation for this advocacy, we draw upon key research and scholarly articles. For instance, a study by <strong>[Author's Last Name, Year]</strong> published in <strong>[Journal/Source Name]</strong> highlights that [key finding relevant to gender/sexuality equity, e.g., 'LGBTQ+ employees who experience discrimination are X% more likely to report lower job satisfaction and higher turnover rates']. Furthermore, <strong>[Another Author, Year]</strong> in <strong>[Another Source]</strong> discusses [another relevant point, e.g., 'the positive impact of inclusive educational curricula on reducing prejudice among students']. These sources underscore the importance of [summarized argument, e.g., implementing comprehensive non-discrimination policies in workplaces and educational institutions]. Our advocacy synthesizes these findings to call for [specific action or change, e.g., legislative reforms and community-led awareness campaigns]. We also consider how technology, such as [specific tech], can support these initiatives by [explain how, e.g., 'providing anonymous reporting channels or disseminating accurate information to combat misinformation'].")</em>
            <br/><br/>
            <em><strong>Remember to properly cite all sources using a consistent citation style (e.g., APA, MLA).</strong></em>
          </p>
        </div>
      </div>
    </div>
  </SectionCard>
);

// --- SOSC 3 Reflection Section --- Changed component name and content
const SOSC3Reflection = () => (
  <SectionCard title="SOSC 3 Reflection"> {/* Changed title */}
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">3. Your Learning Insights: Three Valuable Learnings from SOSC 3</h3> {/* Changed heading */}
        <p className="italic text-gray-500 mb-2">Guidance: Reflect on SOSC 3 and list three valuable learnings you acquired.</p> {/* Changed guidance */}
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="font-medium text-gray-800">Your Learning Insights Here:</p>
          <ol className="list-decimal list-inside space-y-2 mt-1 text-gray-600 pl-4">
            <li>
              <em>(Example Insight 1: "SOSC 3 profoundly highlighted the intricate and often invisible ways societal structures, particularly concerning gender and sexuality, intersect with broader social issues. I learned that understanding these intersections is crucial for developing effective and equitable advocacy.")</em> {/* Changed example */}
            </li>
            <li>
              <em>(Example Insight 2: "The course instilled in me the importance of critical thinking and evidence-based analysis when evaluating societal norms and inequalities, especially concerning complex social issues like gender equity. This is directly applicable to developing a data-driven advocacy that is not only persuasive but also responsible and effective in its approach.")</em>
            </li>
            <li>
              <em>(Example Insight 3: "I gained a deeper appreciation for interdisciplinary approaches in tackling societal challenges. Understanding and addressing issues of gender and sexuality requires drawing insights from sociology, psychology, history, and cultural studies. SOSC 3 provided a valuable framework for integrating these diverse perspectives to form a more holistic and impactful advocacy.")</em> {/* Changed example */}
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">4. Your Overall Rating: SOSC 3 Experience</h3> {/* Changed heading */}
        <p className="italic text-gray-500 mb-2">Guidance: Rate your overall experience in SOSC 3. Mention things/topics/activities you liked or liked less.</p> {/* Changed guidance */}
        <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
          <p className="font-medium text-gray-800">Your Overall Rating and Feedback Here:</p>
          <p className="text-gray-600 mt-1">
            <em>(Example: "Overall, my experience in SOSC 3 was highly enriching and thought-provoking. I would rate it <strong>[e.g., 4.5 out of 5 stars]</strong>.")</em> {/* Changed example */}
          </p>
          <p className="text-gray-600 mt-2">
            <em><strong>Things I liked:</strong> [e.g., "The engaging class discussions on contemporary social issues and theories of gender were particularly insightful. I also appreciated the focus on applying sociological concepts to real-world problems, which made the learning very relevant. The topic on [specific SOSC 3 topic] was very relevant to my advocacy."]</em>
          </p>
          <p className="text-gray-600 mt-2">
            <em><strong>Things I liked less / found challenging:</strong> [e.g., "While generally well-paced, some of the theoretical readings required significant effort to fully grasp. Perhaps incorporating more diverse case studies from various cultural contexts could further enrich these discussions. The group presentation on [specific topic] had some logistical challenges, though it was a good learning experience in collaborative analysis."]</em>
          </p>
        </div>
      </div>
    </div>
  </SectionCard>
);


// --- Footer Component ---
const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-6 mt-12 rounded-t-lg">
    <p>&copy; {new Date().getFullYear()} Jet Timothy V. Cerezo. All rights reserved.</p>
    <p>SOSC 3 - Gender & Sexuality Advocacy Project</p>
  </footer>
);

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('advocacy'); // Default section
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate a short loading time
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'advocacy':
        return <AdvocacyOverview />;
      case 'writeup':
        return <AdvocacyWriteUp />;
      case 'sosc3': // Changed case to match new id
        return <SOSC3Reflection />; // Changed component to render
      default:
        return <AdvocacyOverview />;
    }
  };
  
  // Tailwind CSS CDN for styling
  useEffect(() => {
    const tailwind = document.createElement('script');
    tailwind.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwind);
    // It's good practice to remove the script when the component unmounts,
    // though for a top-level App component this might not be strictly necessary
    // if the script is intended to be available globally for the app's lifetime.
    return () => {
      // Check if the script is still a child of head before trying to remove
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
