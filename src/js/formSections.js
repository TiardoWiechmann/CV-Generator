export function createFormSections(cv, handleChange) {
    const general = {
        heading: "General Information",
        inputs: [
        {
            id: "name",
            label: "Name: ",
            type: "text",
            placeholder: "Tom Taylor",
            value: cv.personal.name,
            onChange: (e) => {
            handleChange("personal", "name", e.target.value);
            },
        },
        {
            id: "email",
            label: "Email: ",
            type: "email",
            placeholder: "tom@taylor.gmail.com",
            value: cv.personal.email,
            onChange: (e) => {
            handleChange("personal", "email", e.target.value);
            },
        },
        {
            id: "phone",
            label: "Phone: ",
            type: "tel",
            placeholder: "0123456789",
            value: cv.personal.phone,
            onChange: (e) => {
            handleChange("personal", "phone", e.target.value);
            },
        },
        {
            id: "image",
            label: "Image: ",
            type: "file",
            accept: "image/*"
        },
        ],
    };
  
    const education = {
        heading : "Educational Experience",
        inputs : [
        {
            id: "school-name",
            label: "School Name: ",
            type: "text",
            placeholder: "Humboldt University of Berlin",
            value: cv.education.schoolName,
            onChange: (e) => {
            handleChange("education", "schoolName", e.target.value);
            },
        },
        {
            id: "study-title",
            label: "Title Of Study: ",
            type: "text",
            placeholder: "Computer Science",
            value: cv.education.studyTitle,
            onChange: (e) => {
            handleChange("education", "studyTitle", e.target.value);
            },
        },
        {
            id: "dos-f",
            label: "Date Of Study (from): ",
            type: "date",
            value: cv.education.dosF,
            onChange: (e) => {
            handleChange("education", "dosF", e.target.value);
            },
        },
        {
            id: "dos-u",
            label: "Date Of Study (until): ",
            type: "date",
            value: cv.education.dosU,
            onChange: (e) => {
            handleChange("education", "dosU", e.target.value);
            },
        },
        ],
    };
  
    const experience = {
        heading: "Practical Experience",
        inputs : [
        {
            id: "company-name",
            label: "Company Name: ",
            type: "text",
            placeholder: "SAP",
            value: cv.experience.companyName,
            onChange: (e) => {
            handleChange("experience", "companyName", e.target.value);
            },
        },
        {
            id: "pos-title",
            label: "Position Title: ",
            type: "text",
            placeholder: "Senior Software Developer",
            value: cv.experience.posTitle,
            onChange: (e) => {
            handleChange("experience", "posTitle", e.target.value);
            },
        },
        {
            id: "main-resp",
            label: "Main Responsibility: ",
            type: "text",
            placeholder: "Project Management",
            value: cv.experience.mainResp,
            onChange: (e) => {
            handleChange("experience", "mainResp", e.target.value);
            },
        },
        {
            id: "worked-from",
            label: "Worked Here From: ",
            type: "date",
            value: cv.experience.workedF,
            onChange: (e) => {
            handleChange("experience", "workedF", e.target.value);
            },
        },
        {
            id: "worked-until",
            label: "Worked Here Until: ",
            type: "date",
            value: cv.experience.workedU,
            onChange: (e) => {
            handleChange("experience", "workedU", e.target.value);
            },
        },
        ]
    };

    return { general, education, experience };
}