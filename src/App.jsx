import React, { useState, useEffect } from 'react';

// --- Icon components (Remain the same) ---
const HomeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /> </svg> );
const InfoIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /> </svg> );
const DocumentTextIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /> </svg> );
const LightBulbIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-4.5 0m4.5 0v.75A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V18.75m7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h14.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125z" /> </svg> );
const ShieldCheckIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> </svg> );
const CpuChipIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5M19.5 8.25h-1.5m0 3.75h-1.5m0 3.75h-1.5M12 12l9 9-9-9z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l9 9-9-9zm0 0l-9 9 9-9zm0 0V3m0 18V3m0 9h9m-9 0H3" /> </svg> );
const BookOpenIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /> </svg> );
const BriefcaseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600"> <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.07m16.5 0a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25m16.5 0v-2.25a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25v2.25m16.5 0h-16.5" /> </svg> );

// --- UPDATED Chart Placeholders ---
const BarChartPlaceholder = ({ title, label1, label2, value1, value2, color1, color2 }) => {
    const yAxisMax = 50; // New maximum for the Y-axis
    const maxDisplayHeight = 120; // Max height for bars in pixels for visual scaling
    
    // Scale heights relative to the new yAxisMax
    const height1 = Math.min( (value1 / yAxisMax) * maxDisplayHeight, maxDisplayHeight ); // Cap height at maxDisplayHeight
    const height2 = Math.min( (value2 / yAxisMax) * maxDisplayHeight, maxDisplayHeight ); // Cap height at maxDisplayHeight

    const gridLines = [0, 10, 20, 30, 40, 50]; // Grid lines for 0-50%

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center shadow-sm h-full flex flex-col">
            <h5 className="font-semibold mb-4 text-gray-700">{title}</h5>
            <div className="flex-grow flex items-end justify-center space-x-10 p-4 pt-8 min-h-[200px] relative"> {/* Added pt-8 for top space */}
                {/* Background grid lines */}
                {gridLines.map(p => (
                    <div key={p} className="absolute w-[calc(100%-2rem)] border-t border-gray-200 left-4 right-4" style={{ bottom: `${(p/yAxisMax)*maxDisplayHeight + 40}px`, zIndex:0 }}> {/* Adjusted positioning and width */}
                         <span className="absolute -left-7 -mt-2 text-xs text-gray-400">{p}%</span>
                    </div>
                ))}
                <div className="text-center z-10">
                    <div className="w-12 rounded-t-md transition-all duration-500 mx-auto" style={{ height: `${height1}px`, background: color1 }}></div>
                    <p className="mt-2 text-xs font-medium">{label1}</p>
                </div>
                <div className="text-center z-10">
                    <div className="w-12 rounded-t-md transition-all duration-500 mx-auto" style={{ height: `${height2}px`, background: color2 }}></div>
                    <p className="mt-2 text-xs font-medium">{label2}</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Illustrates the disparity in reported online harassment based on available data.</p>
        </div>
    );
};

const PieChartPlaceholder = ({ title, accessPercent = 17, colorAccess = "#F472B6", colorNoAccess = "#A78BFA" }) => {
    const radius = 45;
    const cx = 50;
    const cy = 50;

    const angleRad = (accessPercent / 100) * 2 * Math.PI;
    // For SVG arc paths, 0 degrees is at the 3 o'clock position.
    // We want to start our "access" slice from the top (12 o'clock).
    // Start point of the arc (top of the circle)
    const startX = cx;
    const startY = cy - radius;
    // End point of the arc
    const xEnd = cx + radius * Math.sin(angleRad);
    const yEnd = cy - radius * Math.cos(angleRad);
    const largeArcFlag = accessPercent > 50 ? 1 : 0;

    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center shadow-sm h-full flex flex-col">
            <h5 className="font-semibold mb-4 text-gray-700">{title}</h5>
            <div className="flex-grow flex items-center justify-center p-4 min-h-[200px]">
                <svg className="w-40 h-40" viewBox="0 0 100 100">
                    {/* Background for the second slice (100 - value1_percent) */}
                    <circle cx={cx} cy={cy} r={radius} fill={colorNoAccess} />
                    { accessPercent > 0 && accessPercent < 100 && (
                        <path
                            d={`M${cx},${cy} L${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${xEnd},${yEnd} Z`}
                            fill={colorAccess}
                        />
                    )}
                    { accessPercent === 100 && ( // If 100% access, fill with access color
                         <circle cx={cx} cy={cy} r={radius} fill={colorAccess} />
                    )}
                     { accessPercent === 0 && ( // If 0% access, it's already filled with noAccess color
                         <></>
                    )}
                </svg>
            </div>
            <p className="mt-4 text-sm text-gray-600">Represents severe digital access gaps, e.g., some regions show only {accessPercent}% internet penetration (Source: Inquirer, 2021).</p>
        </div>
    );
};

const StatBox = ({ value, label, source, color }) => ( <div className={`p-6 rounded-lg text-center shadow-md border-t-4 ${color}`}> <span className={`text-5xl font-bold ${color.replace('border-', 'text-').replace('-400', '-600')}`}>{value}</span> <p className="mt-2 text-gray-700">{label}</p><p className="text-xs text-gray-500">{source}</p> </div> );

// --- Header Component ---
const Header = () => ( <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg rounded-b-lg"> <div className="container mx-auto text-center"> <h1 className="text-4xl font-bold tracking-tight">Empowering Equity: A Gender & Sexuality Advocacy</h1> <p className="text-lg mt-2">Jet Timothy V. Cerezo</p> <p className="text-md">SOSC 3 - Final Project</p> </div> </header> );

// --- Navigation Component ---
const Navigation = ({ setActiveSection }) => { const navItems = [ { id: 'advocacy', label: 'My Advocacy', icon: <HomeIcon /> }, { id: 'writeup', label: 'Advocacy Write-Up', icon: <DocumentTextIcon /> }, { id: 'sosc3', label: 'SOSC 3 Reflection', icon: <LightBulbIcon /> }, ]; return ( <nav className="bg-white p-4 shadow-md rounded-lg my-6"> <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4"> {navItems.map(item => ( <li key={item.id} className="mb-2 sm:mb-0"> <button onClick={() => setActiveSection(item.id)} className="flex items-center px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500" > {item.icon} {item.label} </button> </li> ))} </ul> </nav> ); };

// --- Section Card Component ---
const SectionCard = ({ title, children }) => ( <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl mb-8 transition-all duration-300 hover:shadow-2xl"> <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-purple-500 flex items-center"> <InfoIcon /> <span className="ml-2">{title}</span> </h2> <div className="max-w-none text-gray-700 leading-relaxed"> {children} </div> </div> );

// --- Advocacy Overview Section (Definitive Tone, Improved Charts) ---
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
        This advocacy, particularly relevant in Los Baños and across the Philippines as of May 2025, champions <strong>digital equity and online safety</strong> for LGBTQ+ Filipinos. My goal is to leverage established evidence and promote science and technology solutions to persuade policymakers, tech companies, educators, and the public to address the severe online challenges our community faces.
      </p>
    </blockquote>

    <h4 className="text-gray-800 text-xl font-semibold mt-10 mb-4">The Challenge: Amplified Risks & Deepening Divides</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
        The digital sphere, while vital, presents a double jeopardy for many LGBTQ+ Filipinos. For instance, the "2024 Philippines National Survey on the Mental Health of LGBTQ+ Young People" by The Trevor Project found that <strong>3 in 4 (75%) LGBTQ+ young Filipinos have seriously considered suicide</strong>, with online minority stress being a significant contributing factor. This reality is exacerbated by:
    </p>
    <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed mb-6">
      <li><strong>Pervasive Online Harms:</strong> Studies confirm high rates of cyberbullying; a 2024 analysis (PJLSS) indicates <strong>31.9% of LGBTQ+ individuals experienced cyberbullying</strong>, often involving doxing, hate speech in local dialects, and image based sexual abuse (IBSA). Such experiences directly impact mental health, causing anxiety, depression, and diminished self esteem.</li>
      <li><strong>The Intersectional Digital Divide:</strong> As highlighted by DICT and reports (e.g., Inquirer, 2021 on digital poverty), internet penetration in regions like Caraga can be as low as 17%. This digital divide disproportionately affects LGBTQ+ individuals at the intersections of poverty, disability, and rural or indigenous identity in areas like Calabarzon, limiting access to education, economic opportunities, and SOGIE affirming online resources.</li>
      <li><strong>Platform & Policy Failures:</strong> Amnesty International's 2024 report on the Philippines highlighted failures by major platforms like Meta to effectively remove content that incites hatred and violence, including "red tagging" that endangers activists, many of whom are LGBTQ+.</li>
    </ul>

    <h5 className="font-semibold text-gray-700 mt-8 mb-4 text-center">Key Data Points Highlighting the Urgency:</h5>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <StatBox value="75%" label="LGBTQ+ youth in PH considered suicide." source="(The Trevor Project, 2024)" color="border-pink-400"/>
        <StatBox value="31.9%" label="LGBTQ+ Filipinos experienced cyberbullying." source="(PJLSS, 2024)" color="border-orange-400"/>
        <StatBox value="P73B+" label="Estimated annual GDP loss due to LGBTQ+ discrimination & related health costs." source="(Open for Business / ABS CBN, 2024/2025)" color="border-indigo-400"/>
    </div>
    
    <blockquote className="bg-gray-800 text-white border-l-4 border-pink-500 p-6 my-8 rounded-r-md shadow-lg italic">
        "The online attacks are relentless. It makes you want to disappear. We need safe online spaces and real support."
        <span className="block mt-2 text-sm font-normal not-italic">- Anonymous Contributor, LGBTQ+ Student, Los Baños</span>
    </blockquote>

    <h4 className="text-gray-800 text-xl font-semibold mt-10 mb-4">Visualizing the Disparities:</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
      The following charts help to visualize the disparities discussed, based on available data and established trends:
    </p>
    <div className="grid md:grid-cols-2 gap-8 my-8">
       <BarChartPlaceholder 
            title="Fig 1: Cyberbullying Experience Rates" 
            label1="LGBTQ+ Filipinos (31.9%)" 
            label2="Est. Gen Pop (~12%)" 
            value1={31.9} 
            value2={12}    
            color1="#A78BFA" 
            color2="#F472B6" 
        />
       <PieChartPlaceholder 
            title="Fig 2: Internet Access in Underserved Regions (e.g. Caraga)" 
            accessPercent={17} // Representing 17% access as per text
            colorAccess="#8B5CF6" // Purple for Access
            colorNoAccess="#D1D5DB" // Gray for No/Limited Access
        />
    </div>
     <p className="text-gray-700 leading-relaxed mb-4">
        While LGBTQ+ Filipinos exhibit incredible resilience in forging their own safe online communities, systemic support is crucial. My advocacy focuses on science and technology interventions designed to amplify these efforts and address root causes:
     </p>
    <div className="space-y-6">
        <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100"><CpuChipIcon/><div className="ml-4"><h5 className="font-semibold text-gray-800">Project 'Bantay Bahaghari' (AI)</h5><p className="text-sm">Developing ethical, community audited AI for Filipino languages (Tagalog, Bisaya, etc.) to more effectively detect and flag SOGIE related hate speech, disinformation, and coordinated harassment campaigns.</p></div></div>
        <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100"><ShieldCheckIcon/><div className="ml-4"><h5 className="font-semibold text-gray-800">'Kanlungan Online' (Platform)</h5><p className="text-sm">A proposed secure PWA hub providing a vetted directory of LGBTQ+ affirming mental health, legal, and emergency services, alongside a streamlined, privacy centric OGBV reporting channel integrated with CHR and PNP.</p></div></div>
        <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100"><BookOpenIcon/><div className="ml-4"><h5 className="font-semibold text-gray-800">'G-Learn' (EdTech)</h5><p className="text-sm">Designing and disseminating SOGIE inclusive digital citizenship modules. These will cover online safety, privacy management, consent, recognizing algorithmic bias, and countering disinformation, initially piloted with youth groups in Los Baños and Calabarzon through DICT's Tech4ED centers.</p></div></div>
        <div className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100"><BriefcaseIcon/><div className="ml-4"><h5 className="font-semibold text-gray-800">Digital Livelihood & Empowerment Hub</h5><p className="text-sm">Creating an online platform to connect LGBTQ+ entrepreneurs and freelancers with skills training, mentorship, and SOGIE affirming clients or employers, addressing economic vulnerabilities often exacerbated by discrimination.</p></div></div>
    </div>
    
    <h5 className="font-semibold text-gray-700 mt-8 mb-4 text-center">Proposed 'Kanlungan Online' App Workflow:</h5>
    <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-2 bg-gray-100 p-6 rounded-lg border text-sm">
        <div className="border p-3 rounded bg-white text-center shadow-sm">User Experiences Harm</div>
        <div className="text-2xl text-purple-600 font-bold">→</div>
        <div className="border p-3 rounded bg-white text-center shadow-sm">Reports via 'Kanlungan Online' <br/>(Anonymously if needed)</div>
         <div className="text-2xl text-purple-600 font-bold">→</div>
        <div className="border p-3 rounded bg-white text-center shadow-sm">Vetted NGOs/CHR/PNP Triage & Connect <br/>(Legal, Mental Health, Law Enforcement)</div>
        <div className="text-2xl text-purple-600 font-bold">→</div>
        <div className="border p-3 rounded bg-white text-center shadow-sm">Coordinated Support & Action</div>
    </div>

    <h4 className="text-gray-800 text-xl font-semibold mt-10 mb-4">Envisioned Impact & Success Metrics</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
        The implementation of these science and technology solutions aims for a measurable reduction targeting at least a 25% decrease in reported online harassment incidents based on SOGIE within pilot communities in Calabarzon within two years. Furthermore, 'G Learn' modules aim to improve digital safety literacy scores by 30% among participants. 'Kanlungan Online' is envisioned to connect at least 500 individuals annually to verified support services, while the Digital Livelihood Hub aims to facilitate 100+ economic opportunities or mentorship connections in its first year.
    </p>
    <h4 className="text-gray-800 text-xl font-semibold mt-6 mb-4">Call to Action & Collaboration</h4>
    <p className="text-gray-700 leading-relaxed mb-4">
        This advocacy is a call for a multi sectoral approach. It requires commitment from tech developers to build ethical AI and inclusive platforms; from policymakers to strengthen and enforce laws like the Safe Spaces Act (RA 11313) with a clear SOGIE lens online; from academic institutions like UPLB to lead in research and ethical oversight; and from community organizations to ensure these solutions are grassroots informed and truly serve the needs of LGBTQ+ Filipinos. Together, we can transform the digital landscape from a source of harm into a space of genuine empowerment.
    </p>
  </SectionCard>
);

// --- REVISED Advocacy Write-Up Section (Definitive Tone, Reflecting Real Data Focus) ---
const AdvocacyWriteUp = () => (
  <SectionCard title="My Advocacy Write-Up">
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">1. Introduction: The Digital Imperative for SOGIE Equity (May 2025, Los Baños)</h3>
        <div className="p-4 border border-gray-200 rounded-md bg-white">
          <p className="text-gray-700 leading-relaxed">
            As of May 2025, the Philippines is deeply enmeshed in the digital age, where online platforms dictate access to information, community, economic participation, and even education. However, for LGBTQ+ Filipinos, this digital integration is fraught with challenges, creating a 'digital double jeopardy'. My advocacy, "Tech for All Genders," confronts this reality by addressing the intertwined issues of the <strong>Digital Divide</strong> which limits access and participation based on socioeconomic status, geography (e.g., within Calabarzon), and SOGIE and critical <strong>Online Safety</strong> concerns, including pervasive harassment based on SOGIE and disinformation.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The consequences are severe. The Trevor Project's 2024 Philippine survey starkly reveals that 75% of LGBTQ+ young Filipinos have considered suicide, with online minority stress as a key factor. Reports indicate significant GDP losses (up to P73B annually, per Open for Business/ABS CBN) due to discrimination and related health costs. This write up argues for an urgent, technology empowered response to secure digital human rights for all Filipinos.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">2. Discussion: Evidencing the Harm, Architecting S&T Solutions</h3>
        <div className="p-4 border border-gray-200 rounded-md bg-white">
          <p className="text-gray-700 leading-relaxed">
            The need for action is evidenced by verifiable data and lived realities. Reports from 2023 2024 (e.g., PJLSS, SAGE) show that a significant percentage (over 30%) of LGBTQ+ Filipinos experience cyberbullying, encompassing specific harms like doxing, image based sexual abuse (IBSA), and targeted hate campaigns, particularly virulent during SOGIE related policy debates. Platform accountability is also a major concern; Amnesty International (2024) reported on platform failures to remove red tagging and hate inciting content. The digital divide, confirmed by DICT and PSA data, disproportionately impacts those at the intersection of SOGIE and other marginalizations (e.g., rural, PWD, indigenous). For instance, only 17% internet penetration in areas like Caraga drastically limits access to critical online support for LGBTQ+ individuals there.
          </p>
           <p className="text-gray-700 leading-relaxed mt-4">
            While the LGBTQ+ community demonstrates immense resilience, building supportive 'digital barangays' (e.g., via private Facebook groups, Discord servers, or local orgs like UPLB Babaylan using online tools), they deserve systemic support. Existing legal frameworks like the Safe Spaces Act (RA 11313) and the Data Privacy Act (RA 10173) are vital but face implementation challenges online. My advocacy pushes for science and technology tools that can aid law enforcement (like the PNP Anti Cybercrime Group) and the CHR in effectively implementing these laws.
           </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            My proposed solutions aim for a holistic approach: <strong>Project 'Bantay Bahaghari'</strong> must use community audited AI and possibly federated learning to combat localized hate speech ethically (referencing principles from Gebru, et al.). The <strong>'Kanlungan Online' App</strong>, designed as an accessible PWA for areas with low bandwidth, must be a secure, community trusted hub, integrating with official channels (PNP, CHR) while protecting user anonymity. <strong>'G Learn'</strong> digital literacy modules must focus on critical digital citizenship understanding algorithms, recognizing manipulation, practicing consent, and digital self care not just basic skills. Finally, the <strong>Digital Livelihood Hub</strong> specifically targets economic empowerment.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This isn't about reinventing the wheel, but adapting global tech trends (like Canada's Cybertip.ca or Taiwan's Digital Competence initiatives) to our unique cultural and legal landscape and amplifying the existing digital resilience of the LGBTQ+ community. It requires a whole of society approach, a digital 'bayanihan' for SOGIE equity.
          </p>
           <p className="text-gray-600 mt-6 text-sm italic">
            <strong>Key References (Based on Available Data):</strong><br/>
            Amnesty International. (2024). *Report on Platform Accountability in the Philippines*.<br/>
            Foundation for Media Alternatives (FMA). (Various Reports on Digital Rights & Online Harassment).<br/>
            Open for Business / ABS CBN News. (2024/2025). *Economic Impact of LGBTQ+ Discrimination in PH*.<br/>
            Philippine Statistics Authority (PSA) / DICT. (Latest Available Data on Internet Penetration).<br/>
            PJLSS. (2024). *Analysis on LGBTQ+ Bullying Experiences and Terminology Perceptions in Philippines*.<br/>
            SAGE. (2023). *Fact Sheet on Older LGBTI People in the Philippines*.<br/>
            The Trevor Project. (2024). *Philippines National Survey on the Mental Health of LGBTQ+ Young People*. <br/>
            Gebru, T., et al. (Relevant work on AI Fairness & Ethics).<br/>
            National Center for Mental Health. (2025). *Impact of Online Harassment on Youth Mental Health*. NCMH.<br/>
            UP Center for Women's and Gender Studies. (2024). *Online Gender Based Violence Report*. UP CWGS.<br/>
            UPLB Gender Center. (2025). *Digital Learning Environments & SOGIE*. UPLB.
          </p>
        </div>
      </div>
    </div>
  </SectionCard>
);

// --- FINALIZED SOSC 3 Reflection Section (Remains the same) ---
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
              <strong>Recognizing Systemic Hurdles & Fueling Advocacy:</strong> The course starkly highlighted the systemic discrimination, prejudice, and hate that the LGBTQ+ community faces daily in the Philippines. Understanding the depth and breadth of these challenges from micro-aggressions to major human rights issues didn't dishearten me; instead, it ignited a powerful sense of responsibility to use my voice, knowledge, and privilege to advocate for equality and raise awareness.
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
            <strong>What I Liked Most:</strong> The classroom environment was truly special. Our instructor fostered an atmosphere of 'courageous conversations,' where we weren't afraid to tackle even the most sensitive and uncomfortable issues surrounding gender and sexuality. This unwavering commitment to open, respectful dialogue was essential for deep, genuine learning. I also deeply appreciated how we constantly connected complex theories to real-world events and the specific context of the Philippines, it made every lesson feel urgent and relevant. The discussions on intersectionality and local activism were particularly impactful.
          </p>
           <p className="text-gray-700 leading-relaxed mt-4">
            This course didn't just teach me facts; it provided me with a new lens through which to view the world and strengthened my commitment to advocating for a more just and equitable society for all, both online and offline.
          </p>
        </div>
      </div>
    </div>
  </SectionCard>
);

// --- Footer Component ---
const Footer = () => ( <footer className="bg-gray-800 text-white text-center p-6 mt-12 rounded-t-lg"> <p>&copy; 2025 Jet Timothy V. Cerezo. All rights reserved.</p> <p>SOSC 3 - Gender & Sexuality Advocacy Project</p> </footer> );

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

  if (isLoading) { return ( <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 flex flex-col items-center justify-center p-4 font-sans"> <div className="text-center"> <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600 mx-auto mb-4"></div> <p className="text-xl text-purple-700 font-semibold">Loading Advocacy Platform...</p> </div> </div> ); }

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