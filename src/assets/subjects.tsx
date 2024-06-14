export type option = { value: string; label: string };
type Subjects = {
  HighSchool: option[];
  Undergraduate: option[];
  Graduate: option[];
};
const AllSubjects: Subjects = {
  HighSchool: [
    { value: "Mathematics", label: "Mathematics" },
    { value: "English", label: "English" },
    { value: "Science", label: "Science" },
    { value: "History", label: "History" },
    { value: "Geography", label: "Geography" },
    { value: "Physical Education", label: "Physical Education" },
    { value: "Foreign Language", label: "Foreign Language" },
    { value: "Art", label: "Art" },
    { value: "Music", label: "Music" },
    { value: "Computer Science", label: "Computer Science" },
    { value: "Economics", label: "Economics" },
    { value: "Civics", label: "Civics" },
    { value: "Health", label: "Health" },
    { value: "Literature", label: "Literature" },
    { value: "Psychology", label: "Psychology" },
    { value: "Sociology", label: "Sociology" },
    { value: "Business Studies", label: "Business Studies" },
    { value: "Environmental Science", label: "Environmental Science" },
  ],
  Undergraduate: [
    { value: "Accounting", label: "Accounting" },
    { value: "Anthropology", label: "Anthropology" },
    { value: "Architecture", label: "Architecture" },
    { value: "Biology", label: "Biology" },
    { value: "Business Administration", label: "Business Administration" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Communication Studies", label: "Communication Studies" },
    { value: "Computer Science", label: "Computer Science" },
    { value: "Criminal Justice", label: "Criminal Justice" },
    { value: "Economics", label: "Economics" },
    { value: "Education", label: "Education" },
    { value: "Engineering", label: "Engineering" },
    { value: "English Literature", label: "English Literature" },
    { value: "Environmental Science", label: "Environmental Science" },
    { value: "Finance", label: "Finance" },
    { value: "History", label: "History" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Journalism", label: "Journalism" },
    { value: "Law", label: "Law" },
    { value: "Marketing", label: "Marketing" },
    { value: "Mathematics", label: "Mathematics" },
    { value: "Medicine", label: "Medicine" },
    { value: "Music", label: "Music" },
    { value: "Nursing", label: "Nursing" },
    { value: "Philosophy", label: "Philosophy" },
    { value: "Physics", label: "Physics" },
    { value: "Political Science", label: "Political Science" },
    { value: "Psychology", label: "Psychology" },
    { value: "Sociology", label: "Sociology" },
    { value: "Theater", label: "Theater" },
    { value: "Visual Arts", label: "Visual Arts" },
  ],
  Graduate: [
    { value: "Advanced Accounting", label: "Advanced Accounting" },
    {
      value: "Anthropological Research",
      label: "Anthropological Research",
    },
    { value: "Architectural Design", label: "Architectural Design" },
    { value: "Biotechnology", label: "Biotechnology" },
    { value: "Business Analytics", label: "Business Analytics" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    { value: "Clinical Psychology", label: "Clinical Psychology" },
    { value: "Cognitive Science", label: "Cognitive Science" },
    { value: "Computer Engineering", label: "Computer Engineering" },
    { value: "Data Science", label: "Data Science" },
    { value: "Digital Media", label: "Digital Media" },
    { value: "Educational Leadership", label: "Educational Leadership" },
    { value: "Environmental Policy", label: "Environmental Policy" },
    { value: "Epidemiology", label: "Epidemiology" },
    {
      value: "Finance and Risk Management",
      label: "Finance and Risk Management",
    },
    { value: "Global Health", label: "Global Health" },
    { value: "International Relations", label: "International Relations" },
    { value: "Literary Criticism", label: "Literary Criticism" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Materials Science", label: "Materials Science" },
    { value: "Medical Research", label: "Medical Research" },
    { value: "Molecular Biology", label: "Molecular Biology" },
    { value: "Neuroscience", label: "Neuroscience" },
    { value: "Organizational Behavior", label: "Organizational Behavior" },
    { value: "Philosophical Ethics", label: "Philosophical Ethics" },
    { value: "Physical Chemistry", label: "Physical Chemistry" },
    { value: "Public Administration", label: "Public Administration" },
    { value: "Quantum Physics", label: "Quantum Physics" },
    { value: "Social Work", label: "Social Work" },
    { value: "Sustainable Development", label: "Sustainable Development" },
    { value: "Urban Planning", label: "Urban Planning" },
  ],
};

export default AllSubjects;
