
export interface FilterOption {
    key: number;
    name: string;
  }
 export  interface ServiceOption {
    key: number;
    name: string;
    description: string;
  }

export const navItems: string[] = ['Home', 'About', 'Service','Support Us', 'Gallery', 'Contact'];


  
  export const filtering: FilterOption[] = [
    { key: 1, name: "consultation date" },
    { key: 2, name: "ConsultationTime" },
    { key: 3, name: "consultationLanguage" },
    { key: 4, name: "year of experience" }
  ];

  
  export const services: ServiceOption[] = [
    {
      key: 1,
      name: "Reliable Legal Service",
      description: "Naseh platform provides legal advice approved by lawyers registered with the Qatari Ministry of Justice",
    },
    {
      key: 2,
      name: "Quick Contract Review",
      description: "Efficient contract review services provided by licensed legal professionals to ensure compliance with Qatari law",
    },
    {
      key: 3,
      name: "Dispute Resolution",
      description: "Support and guidance in resolving disputes through legal consultation and mediation services in Qatar",
    },
    {
      key: 4,
      name: "Business Legal Advisory",
      description: "Comprehensive legal advice for businesses operating in Qatar, covering contracts, compliance, and regulations",
    },
  ];
  export const consultations: ServiceOption[] = [
    {
      key: 1,
      name: "Scheduled Consultations",
      description: "Nesh application is an integrated solution for providing legal services remotely through advanced technology.",
    },
    {
      key: 2,
      name: "Legal Advisory",
      description: "Get expert legal advice for business or personal matters with ease and convenience.",
    },
    {
      key: 3,
      name: "Case Management",
      description: "A streamlined solution for managing legal cases and documentation efficiently.",
    },
    {
      key: 4,
      name: "Remote Legal Support",
      description: "Access legal support remotely from certified professionals across the globe.",
    },
    {
      key: 5,
      name: "Document Preparation",
      description: "Simplify legal document preparation and filing with our professional tools.",
    },
    {
      key: 6,
      name: "Consultation Scheduler",
      description: "Easily schedule consultations with legal experts using our intuitive scheduling system.",
    },
  ];