const data = {
  name: "Alexandra Martinez",
  title: "Senior Financial Analyst",
  summary:
    "Detail-oriented finance professional with 6+ years of progressive experience in budgeting, forecasting, and financial modelling. Proven track record of driving process improvements, reducing costs by up to 15%, and delivering actionable insights to C-suite executives. Adept at cross-functional collaboration and leveraging advanced analytics to inform strategic decisions.",
  contact: {
    email: "alexandra.martinez@example.com",
    phone: "+1 (415) 555-7243",
    linkedin: "linkedin.com/in/alexandramartinez",
    address: "123 Market Street, Apt 45, San Francisco, CA 94103",
  },
  experience: [
    {
      title: "Senior Financial Analyst",
      company: "BrightWave Capital",
      location: "San Francisco, CA",
      start_date: "2021-06",
      end_date: "Present",
      responsibilities: [
        "Lead quarterly budgeting and forecasting cycles for a $200M revenue P&L",
        "Develop and maintain 5-year financial models to support long-term strategic planning",
        "Partner with Sales and Operations to analyze margin drivers and optimize pricing strategies",
        "Automate repetitive reporting tasks using Python and VBA, reducing month-end close by 3 days",
      ],
      achievements: [
        "Identified cost savings opportunities that lowered annual expenditures by $1.2M",
        "Designed a dynamic dashboard in Power BI that improved executive visibility into KPIs",
        "Mentored 4 junior analysts; two promoted to mid-level roles within 12 months",
      ],
    },
    {
      title: "Financial Analyst",
      company: "Pacific Trade Finance",
      location: "Oakland, CA",
      start_date: "2018-04",
      end_date: "2021-05",
      responsibilities: [
        "Prepared monthly variance analysis reports highlighting key drivers of performance",
        "Conducted scenario analysis to evaluate the impact of currency and interest rate fluctuations",
        "Managed debt covenants tracking and liaised with lenders during quarterly reviews",
        "Collaborated with IT to implement an ERP integration, improving data accuracy by 25%",
      ],
      achievements: [
        "Streamlined the forecasting process, reducing manual intervention by 40%",
        "Played key role in a $50M credit facility renewal by preparing lender presentation materials",
      ],
    },
    {
      title: "Finance Intern",
      company: "Global Bank Corp",
      location: "San Francisco, CA",
      start_date: "2017-06",
      end_date: "2017-12",
      responsibilities: [
        "Assisted with month-end journal entries and account reconciliations",
        "Supported senior team members in analyzing loan portfolio performance",
        "Compiled data for regulatory reports, ensuring compliance with Basel III standards",
      ],
      achievements: [
        "Developed an Excel macro that automated loan delinquency reporting, saving 10 hours/month",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Business Administration (MBA), Finance Concentration",
      institution: "University of California, Berkeley – Haas School of Business",
      location: "Berkeley, CA",
      start_date: "2016-09",
      end_date: "2018-05",
      details: [
        "GPA: 3.8/4.0",
        "President, Finance Club",
        "Thesis on the impact of FinTech disruption on regional banks",
      ],
    },
    {
      degree: "Bachelor of Science in Economics",
      institution: "University of Southern California",
      location: "Los Angeles, CA",
      start_date: "2012-09",
      end_date: "2016-05",
      details: [
        "GPA: 3.6/4.0",
        "Dean’s List (2013–2016)",
        "Research assistant on a project modelling consumer spending behavior",
      ],
    },
  ],
  skills: [
    "Financial Modeling & Valuation",
    "Budgeting & Forecasting",
    "Advanced Excel (PivotTables, VBA)",
    "Power BI & Tableau",
    "Python for Data Analysis",
    "ERP Systems (SAP, Oracle)",
    "Variance Analysis",
    "Strategic Planning",
    "Risk Management",
  ],
  certifications: [
    {
      name: "Chartered Financial Analyst (CFA) Level II Candidate",
      issuer: "CFA Institute",
      date_obtained: "2022-06",
    },
    {
      name: "Certified Financial Modeling & Valuation Analyst (FMVA)",
      issuer: "CFI",
      date_obtained: "2020-11",
    },
  ],
  languages: [
    {
      language: "English",
      proficiency: "Native",
    },
    {
      language: "Spanish",
      proficiency: "Professional Working Proficiency",
    },
  ],
};

export default function Template() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 p-6 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-lg text-gray-600">{data.title}</p>
      </header>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>{data.summary}</p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {data.experience.map((job, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow">
              <h3 className="font-bold">{job.title} – {job.company}</h3>
              <p className="text-sm text-gray-500">{job.location} | {job.start_date} – {job.end_date}</p>
              <ul className="list-disc list-inside mt-2 text-sm">
                {job.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
              </ul>
              <p className="font-semibold mt-2">Achievements:</p>
              <ul className="list-disc list-inside text-sm">
                {job.achievements.map((a, j) => <li key={j}>{a}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          {data.education.map((edu, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-sm text-gray-500">{edu.institution} | {edu.start_date} – {edu.end_date}</p>
              <ul className="list-disc list-inside text-sm mt-2">
                {edu.details.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          {data.certifications.map((c, i) => (
            <li key={i}>
              {c.name} – {c.issuer} ({c.date_obtained})
            </li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Languages</h2>
        <ul className="list-disc list-inside">
          {data.languages.map((l, i) => (
            <li key={i}>{l.language} – {l.proficiency}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <footer className="text-center border-t pt-4 text-sm text-gray-600">
        <p>{data.contact.email} | {data.contact.phone}</p>
        <p>{data.contact.linkedin}</p>
        <p>{data.contact.address}</p>
      </footer>
    </div>
  );
}
