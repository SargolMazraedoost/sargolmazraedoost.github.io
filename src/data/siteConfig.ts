export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  paperUrl?: string;
  year?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  codeUrl?: string;
  bibtex?: string;
}

export const SITE = {
  title: "Sargol Mazraedoost",
  tagline: "Full-time Research Professor · AI-Driven Cheminformatics and Bioinformatics",
  description: "Sargol Mazraedoost, Ph.D. — research in artificial intelligence for drug discovery, cheminformatics, bioinformatics, and molecular modeling.",
  url: "https://sargolmazraedoost.github.io",
  author: "Sargol Mazraedoost",
  email: "sargol.mazraedoost7@gmail.com",
  github: "https://github.com/SargolMazraedoost",
  scholar: "https://scholar.google.com/citations?user=tosxQUIAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Sargol-Mazraedoost",
  linkedin: "https://www.linkedin.com/in/sargol-mazraedoost-95248b150",
  orcid: "https://orcid.org/0000-0001-6656-1968",
  reviewerProfile: "https://www.webofscience.com/wos/author/record/AAG-1225-2020",
  university: "https://www.pknu.ac.kr/eng",
  source: "https://sargolmazraedoost7.wixsite.com/website",
  bio: [
    "I’m a full-time research professor working on AI-driven cheminformatics and bioinformatics in Busan, South Korea. My research brings together machine learning, quantum chemistry, and molecular simulation to study molecules and their interactions.",
    "I received my Ph.D. in Chemical Convergence Engineering from Pukyong National University in August 2025. My work focuses on chromatographic retention time prediction, molecular representation learning, and computational approaches to improving binding affinity.",
  ],
};

export const RESEARCH_INTERESTS = [
  "AI-driven drug discovery and molecular property prediction",
  "Cheminformatics, bioinformatics, and molecular representation learning",
  "Chromatographic retention prediction and QSRR/QSAR modeling",
  "Molecular docking, virtual screening, and binding affinity",
  "Molecular dynamics and protein–ligand interactions",
  "Density functional theory and quantum chemical modeling",
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "mazraedoost2025retention",
    title: "Prediction of Chromatographic Retention Time of a Small Molecule from SMILES Representation Using a Hybrid Transformer-LSTM Model",
    authors: ["Sargol Mazraedoost", "Hadi Sedigh Malekroodi", "Petar Žuvela", "Myunggi Yi", "J. Jay Liu"],
    venue: "Journal of Chemical Information and Modeling, 65(7), 3343–3356",
    year: 2025,
    doi: "10.1021/acs.jcim.5c00167",
    codeUrl: "https://github.com/SargolMazraedoost/RT-TR",
    bibtex: `@article{mazraedoost2025retention,
  title={Prediction of Chromatographic Retention Time of a Small Molecule from {SMILES} Representation Using a Hybrid Transformer-{LSTM} Model},
  author={Mazraedoost, Sargol and Sedigh Malekroodi, Hadi and Žuvela, Petar and Yi, Myunggi and Liu, J. Jay},
  journal={Journal of Chemical Information and Modeling},
  year={2025},
  volume={65},
  number={7},
  pages={3343--3356},
  doi={10.1021/acs.jcim.5c00167}
}`,
  },
  {
    id: "mazraedoost2025binding",
    title: "Integrative computational pipeline for identifying binding-enhancing mutations targeting the MBD2–p66α interaction: Implications for therapeutic applications",
    authors: ["Sargol Mazraedoost", "Hadi Sedigh Malekroodi", "Myunggi Yi", "J. Jay Liu", "Sung In Lim"],
    venue: "Bulletin of the Korean Chemical Society, 46(1), 57–68",
    year: 2025,
    doi: "10.1002/bkcs.12923",
    bibtex: `@article{mazraedoost2025binding,
  title={Integrative computational pipeline for identifying binding-enhancing mutations targeting the {MBD2}–p66α interaction: Implications for therapeutic applications},
  author={Mazraedoost, Sargol and Sedigh Malekroodi, Hadi and Yi, Myunggi and Liu, J. Jay and Lim, Sung In},
  journal={Bulletin of the Korean Chemical Society},
  year={2025},
  volume={46},
  number={1},
  pages={57--68},
  doi={10.1002/bkcs.12923}
}`,
  },
  {
    id: "mazraedoost2024crosscolumn",
    title: "Cross-column density functional theory–based quantitative structure-retention relationship model development powered by machine learning",
    authors: ["Sargol Mazraedoost", "Petar Žuvela", "Szymon Ulenberg", "Tomasz Bączek", "J. Jay Liu"],
    venue: "Analytical and Bioanalytical Chemistry, 416, 2951–2968",
    year: 2024,
    doi: "10.1007/s00216-024-05243-7",
    bibtex: `@article{mazraedoost2024crosscolumn,
  title={Cross-column density functional theory–based quantitative structure-retention relationship model development powered by machine learning},
  author={Mazraedoost, Sargol and Žuvela, Petar and Ulenberg, Szymon and Bączek, Tomasz and Liu, J. Jay},
  journal={Analytical and Bioanalytical Chemistry},
  year={2024},
  volume={416},
  pages={2951--2968},
  doi={10.1007/s00216-024-05243-7}
}`,
  },
  {
    id: "additional1",
    title: "Anticancer, antimicrobial and biomedical features of polyoxometalate as advanced materials: A review study",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Sargol Mazraedoost", "Wei-Hung Chiang", "Khadije Yousefi", "Omid Arjmand", "Yasmin Ghahramani", "Ahmad Gholami", "Navid Omidifar", "Nelson Pynadathu Rumjit", "Marjan Salari", "Asma Sadrmousavi-Dizaj"],
    venue: "Inorganic Chemistry Communications, 146, 110074",
    year: 2022,
    doi: "10.1016/j.inoche.2022.110074",
    bibtex: `@article{mazraedoost2022paper1,
  title={{Anticancer, antimicrobial and biomedical features of polyoxometalate as advanced materials: A review study}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Mazraedoost, Sargol and Chiang, Wei-Hung and Yousefi, Khadije and Arjmand, Omid and Ghahramani, Yasmin and Gholami, Ahmad and Omidifar, Navid and Pynadathu Rumjit, Nelson and Salari, Marjan and Sadrmousavi-Dizaj, Asma},
  journal={Inorganic Chemistry Communications},
  year={2022},
  volume={146},
  pages={110074},
  doi={10.1016/j.inoche.2022.110074}
}`,
  },
  {
    id: "additional2",
    title: "A review on health benefits of Malva sylvestris L. nutritional compounds for metabolites, antioxidants, and anti-inflammatory, anticancer, and antimicrobial applications",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Gity Behbudi", "Sargol Mazraedoost", "Navid Omidifar", "Ahmad Gholami", "Wei-Hung Chiang", "Aziz Babapoor", "Nelson Pynadathu Rumjit"],
    venue: "Evidence-Based Complementary and Alternative Medicine, 2021, 5548404",
    year: 2021,
    doi: "10.1155/2021/5548404",
    bibtex: `@article{mazraedoost2021paper2,
  title={{A review on health benefits of Malva sylvestris L. nutritional compounds for metabolites, antioxidants, and anti-inflammatory, anticancer, and antimicrobial applications}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Behbudi, Gity and Mazraedoost, Sargol and Omidifar, Navid and Gholami, Ahmad and Chiang, Wei-Hung and Babapoor, Aziz and Pynadathu Rumjit, Nelson},
  journal={Evidence-Based Complementary and Alternative Medicine},
  year={2021},
  volume={2021},
  pages={1--13},
  doi={10.1155/2021/5548404}
}`,
  },
  {
    id: "additional3",
    title: "Multifunctional gold nanorod for therapeutic applications and pharmaceutical delivery considering cellular metabolic responses, oxidative stress and cellular longevity",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Sargol Mazraedoost", "Khadije Yousefi", "Ahmad Gholami", "Gity Behbudi", "Seeram Ramakrishna", "Navid Omidifar", "Ali Alizadeh", "Wei-Hung Chiang"],
    venue: "Nanomaterials, 11(7), 1868",
    year: 2021,
    doi: "10.3390/nano11071868",
    bibtex: `@article{mazraedoost2021paper3,
  title={{Multifunctional gold nanorod for therapeutic applications and pharmaceutical delivery considering cellular metabolic responses, oxidative stress and cellular longevity}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Mazraedoost, Sargol and Yousefi, Khadije and Gholami, Ahmad and Behbudi, Gity and Ramakrishna, Seeram and Omidifar, Navid and Alizadeh, Ali and Chiang, Wei-Hung},
  journal={Nanomaterials},
  year={2021},
  volume={11},
  number={7},
  pages={1868},
  doi={10.3390/nano11071868}
}`,
  },
  {
    id: "additional4",
    title: "Precise blood glucose sensing by nitrogen-doped graphene quantum dots for tight control of diabetes",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Ahmad Gholami", "Sargol Mazraedoost", "Wei-Hung Chiang", "Omid Arjmand", "Navid Omidifar", "Aziz Babapoor"],
    venue: "Journal of Sensors, 2021, 5580203",
    year: 2021,
    doi: "10.1155/2021/5580203",
    bibtex: `@article{mazraedoost2021paper4,
  title={{Precise blood glucose sensing by nitrogen-doped graphene quantum dots for tight control of diabetes}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Gholami, Ahmad and Mazraedoost, Sargol and Chiang, Wei-Hung and Arjmand, Omid and Omidifar, Navid and Babapoor, Aziz},
  journal={Journal of Sensors},
  year={2021},
  volume={2021},
  number={1},
  pages={5580203},
  doi={10.1155/2021/5580203}
}`,
  },
  {
    id: "additional5",
    title: "Herbicide residues in agroecosystems: Fate, detection, and effect on non-target plants",
    authors: ["Mohammad Mehdizadeh", "Waseem Mushtaq", "Shahida Anusha Siddiqui", "Sawsen Ayadi", "Pervinder Kaur", "Stephen Yeboah", "Sargol Mazraedoost", "Duraid K.A.AL-Taey", "Koko Tampubolon"],
    venue: "Reviews in Agricultural Science, 9, 157–167",
    year: 2021,
    doi: "10.7831/ras.9.0_157",
    bibtex: `@article{mazraedoost2021paper5,
  title={{Herbicide residues in agroecosystems: Fate, detection, and effect on non-target plants}},
  author={Mehdizadeh, Mohammad and Mushtaq, Waseem and Anusha Siddiqui, Shahida and Ayadi, Sawsen and Kaur, Pervinder and Yeboah, Stephen and Mazraedoost, Sargol and K.A.AL-Taey, Duraid and Tampubolon, Koko},
  journal={Reviews in Agricultural Science},
  year={2021},
  volume={9},
  number={0},
  pages={157--167},
  doi={10.7831/ras.9.0_157}
}`,
  },
  {
    id: "additional6",
    title: "Recent biotechnological approaches for treatment of novel COVID-19: From bench to clinical trial",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Najmeh Parvin", "Ahmad Gholami", "Seeram Ramakrishna", "Navid Omidifar", "Mohsen Moghadami", "Wei-Hung Chiang", "Sargol Mazraedoost"],
    venue: "Drug Metabolism Reviews, 53(1), 141–170",
    year: 2021,
    doi: "10.1080/03602532.2020.1845201",
    bibtex: `@article{mazraedoost2021paper6,
  title={{Recent biotechnological approaches for treatment of novel COVID-19: From bench to clinical trial}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Parvin, Najmeh and Gholami, Ahmad and Ramakrishna, Seeram and Omidifar, Navid and Moghadami, Mohsen and Chiang, Wei-Hung and Mazraedoost, Sargol},
  journal={Drug Metabolism Reviews},
  year={2021},
  volume={53},
  number={1},
  pages={141--170},
  doi={10.1080/03602532.2020.1845201}
}`,
  },
  {
    id: "additional7",
    title: "3D nanostructures for tissue engineering, cancer therapy, and gene delivery",
    authors: ["Ahmad Gholami", "Seyyed Alireza Hashemi", "Khadije Yousefi", "Seyyed Mojtaba Mousavi", "Wei-Hung Chiang", "Seeram Ramakrishna", "Sargol Mazraedoost", "Ali Alizadeh", "Navid Omidifar", "Gity Behbudi", "Aziz Babapoor"],
    venue: "Journal of Nanomaterials, 2020, 1852946",
    year: 2020,
    doi: "10.1155/2020/1852946",
    bibtex: `@article{mazraedoost2020paper7,
  title={{3D nanostructures for tissue engineering, cancer therapy, and gene delivery}},
  author={Gholami, Ahmad and Hashemi, Seyyed Alireza and Yousefi, Khadije and Mousavi, Seyyed Mojtaba and Chiang, Wei-Hung and Ramakrishna, Seeram and Mazraedoost, Sargol and Alizadeh, Ali and Omidifar, Navid and Behbudi, Gity and Babapoor, Aziz},
  journal={Journal of Nanomaterials},
  year={2020},
  volume={2020},
  pages={1--24},
  doi={10.1155/2020/1852946}
}`,
  },
  {
    id: "additional8",
    title: "Recent progress in chemical composition, production, and pharmaceutical effects of kombucha beverage: A complementary and alternative medicine",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Maryam Zarei", "Ahmad Gholami", "Chin Wei Lai", "Wei Hung Chiang", "Navid Omidifar", "Sonia Bahrani", "Sargol Mazraedoost"],
    venue: "Evidence-Based Complementary and Alternative Medicine, 2020, 4397543",
    year: 2020,
    doi: "10.1155/2020/4397543",
    bibtex: `@article{mazraedoost2020paper8,
  title={{Recent progress in chemical composition, production, and pharmaceutical effects of kombucha beverage: A complementary and alternative medicine}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Zarei, Maryam and Gholami, Ahmad and Lai, Chin Wei and Chiang, Wei Hung and Omidifar, Navid and Bahrani, Sonia and Mazraedoost, Sargol},
  journal={Evidence-Based Complementary and Alternative Medicine},
  year={2020},
  volume={2020},
  number={1},
  pages={4397543},
  doi={10.1155/2020/4397543}
}`,
  },
  {
    id: "additional9",
    title: "Data on cytotoxic and antibacterial activity of synthesized Fe3O4 nanoparticles using Malva sylvestris",
    authors: ["Seyyed Mojtaba Mousavi", "Seyyed Alireza Hashemi", "Maryam Zarei", "Sonia Bahrani", "Amir Savardashtaki", "Hossein Esmaeili", "Chin Wei Lai", "Sargol Mazraedoost", "Mohsen Abassi", "Bahman Ramavandi"],
    venue: "Data in Brief, 28, 104929",
    year: 2020,
    doi: "10.1016/j.dib.2019.104929",
    bibtex: `@article{mazraedoost2020paper9,
  title={{Data on cytotoxic and antibacterial activity of synthesized Fe3O4 nanoparticles using Malva sylvestris}},
  author={Mousavi, Seyyed Mojtaba and Hashemi, Seyyed Alireza and Zarei, Maryam and Bahrani, Sonia and Savardashtaki, Amir and Esmaeili, Hossein and Lai, Chin Wei and Mazraedoost, Sargol and Abassi, Mohsen and Ramavandi, Bahman},
  journal={Data in Brief},
  year={2020},
  volume={28},
  pages={104929},
  doi={10.1016/j.dib.2019.104929}
}`,
  },
  {
    id: "additional10",
    title: "New insights into the selective inhibition of the β-carbonic anhydrases of pathogenic bacteria Burkholderia pseudomallei and Francisella tularensis: A proteochemometrics study",
    authors: ["Behnam Rasti", "Sargol Mazraedoost", "Hanieh Panahi", "Mojtaba Falahati", "Farnoosh Attar"],
    venue: "Molecular Diversity, 23(2), 263–273",
    year: 2019,
    doi: "10.1007/s11030-018-9869-5",
    bibtex: `@article{mazraedoost2019paper10,
  title={{New insights into the selective inhibition of the β-carbonic anhydrases of pathogenic bacteria Burkholderia pseudomallei and Francisella tularensis: A proteochemometrics study}},
  author={Rasti, Behnam and Mazraedoost, Sargol and Panahi, Hanieh and Falahati, Mojtaba and Attar, Farnoosh},
  journal={Molecular Diversity},
  year={2019},
  volume={23},
  number={2},
  pages={263--273},
  doi={10.1007/s11030-018-9869-5}
}`,
  },
];

export const PROJECTS: Project[] = [
  {
    title: "RT-TR: SMILES-based retention time prediction",
    description: "A hybrid Transformer–BiLSTM model that predicts chromatographic retention time directly from molecular SMILES. Reported performance: MAE 26.97 s, MAPE 3.35%, and R² 0.90. Featured on the front cover of JCIM.",
    tags: ["Deep Learning", "SMILES", "Cheminformatics"],
    githubUrl: "https://github.com/SargolMazraedoost/RT-TR",
    paperUrl: "https://doi.org/10.1021/acs.jcim.5c00167",
    year: "2025",
  },
  {
    title: "Binding affinity enhancement of MBD2–p66α",
    description: "An integrative computational pipeline combining mutation screening, molecular dynamics, and binding free energy calculations to identify stabilizing mutations at a protein–protein interface.",
    tags: ["Protein Design", "Molecular Dynamics", "Free Energy"],
    paperUrl: "https://doi.org/10.1002/bkcs.12923",
    year: "2025",
  },
  {
    title: "Cross-column QSRR modeling",
    description: "Machine learning models using DFT-derived molecular descriptors to predict retention times across reversed-phase HPLC columns and experimental conditions.",
    tags: ["DFT", "QSRR", "Machine Learning"],
    paperUrl: "https://doi.org/10.1007/s00216-024-05243-7",
    year: "2024",
  },
];

export const EXPERIENCES = [
  {
    period: "Sep. 2026 — Present",
    role: "Full-time Research Professor (전임연구교수)",
    organization: "AI-Driven Cheminformatics and Bioinformatics",
    location: "Busan, South Korea",
  },
  {
    period: "Sep. 2025 — Aug. 2026",
    role: "Postdoctoral Research Fellow",
    organization: "AI-Driven Cheminformatics and Bioinformatics",
    location: "Busan, South Korea",
  },
];

export const EDUCATION = [
  {
    period: "Aug. 2021 — Aug. 2025",
    degree: "Ph.D. in Chemical Convergence Engineering",
    institution: "Pukyong National University, Busan, South Korea",
    details: "Intelligent Systems Laboratory, Department of Chemical Convergence Engineering. GPA: 4.43 / 4.50.",
    thesis: "Integrative Data-Driven and First-Principle Approaches for Chromatographic Retention Time Prediction and Binding Affinity Enhancement",
  },
  {
    period: "Jan. 2017 — Jan. 2019",
    degree: "M.Sc. in Microbiology",
    institution: "Islamic Azad University of Lahijan, Iran",
    details: "GPA: 3.94 / 4.00.",
    thesis: "Investigating the Chemical Interaction Space Governed by Bacterial Carbonic Anhydrases and Carbonic Anhydrase Inhibitors in Burkholderia pseudomallei and Francisella tularensis",
  },
  {
    period: "Sep. 2013 — Jan. 2017",
    degree: "B.Sc. in Cell and Molecular Biology (Microbiology)",
    institution: "Islamic Azad University of Lahijan, Iran",
    details: "",
    thesis: "",
  },
];

export const AWARDS = [
  "Outstanding International Student Award (자랑스러운 국립 부경대학교 외국인 유학생), Pukyong National University, August 20, 2025.",
  "Three presentation awards at the Korean Institute of Chemical Engineers (KIChE), 2022–2024, for research on machine learning and deep learning for chromatographic modeling.",
];
