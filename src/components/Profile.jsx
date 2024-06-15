import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(1);
  const [notes, setNotes] = useState("");

  const handleTabClick = (tabIndex) => {
    if(tabIndex<8){

      setActiveTab(tabIndex);
    }else{
    history.push(`/admin/review-requests`);

    }
  };

  const handleApproveSection = (section) => {
    console.log(`Approved section: ${section}`);
    handleTabClick(activeTab+1)
  };

  const handleRejectSection = (section) => {
    console.log(`Rejected section: ${section}`);
    handleTabClick(activeTab+1)
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Dummy data for lawyer
  const lawyer = {
    id: id,
    fullName: "John Doe",
    lawAreas: ["Family Law", "Criminal Law"],
    barAffiliation: "State Bar",
    barAssociation: "American Bar Association",
    province: "California",
    city: "Los Angeles",
    education: "Harvard Law School",
    LLB: "Harvard University",
    LLM: "Yale University",
    LLD: "",
    currentPosition: "Senior Attorney",
    durationOfPractice: "15 years",
    lowerCourts: "10 years",
    highCourt: "5 years",
    certifications: ["Certified Family Law Specialist"],
    caseExperience: "Handled over 100 cases",
    notableCases: "Won landmark case XYZ vs ABC",
    successStories: "Successfully defended clients in high-profile cases",
    officeAddress: "123 Legal Ave, Los Angeles, CA",
    officeHours: "9 AM - 5 PM",
    consultationModes: ["In-person", "Online"],
    consultationFees: "$300/hour",
    profileImage: "https://randomuser.me/api/portraits/men/79.jpg",
    contactNumber: "+1 234 567 890",
    socialMediaLinks: {
      facebook: "https://facebook.com/lawyer",
      whatsapp: "https://wa.me/1234567890",
      linkedin: "https://linkedin.com/in/lawyer",
    },
  };

  const forms = [
    {
      title: "Practice Areas and Bar Information",
      fields: [
        { label: "Areas", value: lawyer.lawAreas.join(", ") },
        { label: "Bar Affiliation", value: lawyer.barAffiliation },
        { label: "Bar Association", value: lawyer.barAssociation },
      ],
      documents: ["Bar Card Images (Front and Back)"],
    },
    {
      title: "Personal Information",
      fields: [
        { label: "Name", value: lawyer.fullName },
        { label: "Email", value: "johndoe@example.com" },
        { label: "Phone", value: lawyer.contactNumber },
        { label: "Gender", value: "Male" },
        { label: "Province", value: lawyer.province },
        { label: "City", value: lawyer.city },
      ],
      documents: [],
    },
    {
      title: "Education",
      fields: [
        { label: "Education", value: lawyer.education },
        { label: "Graduation Year", value: "2000" },
        { label: "LLB", value: lawyer.LLB },
        { label: "LLM", value: lawyer.LLM },
        { label: "LLD", value: lawyer.LLD },
      ],
      documents: ["LLB Degree", "LAW GAT Result"],
    },
    {
      title: "Professional Experience",
      fields: [
        { label: "Current Position", value: lawyer.currentPosition },
        { label: "Duration of Practice", value: lawyer.durationOfPractice },
        { label: "Lower Courts", value: lawyer.lowerCourts },
        { label: "High Court", value: lawyer.highCourt },
      ],
      documents: ["Certificate Image", "Approval Image"],
    },
    {
      title: "Additional Information",
      fields: [
        { label: "License Number", value: "123456789" },
        { label: "Certifications", value: lawyer.certifications.join(", ") },
        { label: "Case Experience", value: lawyer.caseExperience },
        { label: "Notable Cases", value: lawyer.notableCases },
        { label: "Success Stories", value: lawyer.successStories },
      ],
      documents: [],
    },
    {
      title: "Office Details",
      fields: [
        { label: "Office Address", value: lawyer.officeAddress },
        { label: "Office Hours", value: lawyer.officeHours },
        {
          label: "Consultation Modes",
          value: lawyer.consultationModes.join(", "),
        },
        { label: "Consultation Fees", value: lawyer.consultationFees },
      ],
      documents: [],
    },
    {
      title: "Social Media and Contact",
      fields: [
        { label: "Lawyer Image", value: lawyer.profileImage },
        { label: "Facebook", value: lawyer.socialMediaLinks.facebook },
        { label: "WhatsApp", value: lawyer.socialMediaLinks.whatsapp },
        { label: "LinkedIn", value: lawyer.socialMediaLinks.linkedin },
      ],
      documents: [],
    },
  ];

  return (
    <div className=" text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src={lawyer.profileImage}
            alt={lawyer.fullName}
            className="w-32 h-32 rounded-full  mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold">{lawyer.fullName}</h1>
            <div className="flex space-x-4 mt-2">
              <a
                href={lawyer.socialMediaLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-prim"></i>
              </a>
              <a
                href={lawyer.socialMediaLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-green-600"></i>
              </a>
              <a
                href={lawyer.socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-blue-700"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className=" bg-prim-light p-6 rounded-lg">
            <div className="flex space-x-2">
              {forms.map((form, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded ${
                    activeTab === index + 1 ? "bg-cta" : "bg-prim"
                  }`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {form.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-prim-light p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              {forms[activeTab - 1].title}
            </h2>
            <div className="space-y-4">
              {forms[activeTab - 1].fields.map((field, index) => (
                <p key={index}>
                  <strong>{field.label}:</strong> {field.value}
                </p>
              ))}
              {forms[activeTab - 1].documents.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mt-4">Documents:</h3>
                  {forms[activeTab - 1].documents.map((doc, index) => (
                    <p key={index}>{doc}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="flex space-x-2 mt-4">
              <button
                className="bg-green-600 px-4 py-2 rounded mr-2 hover:bg-green-700"
                onClick={() => handleApproveSection(forms[activeTab - 1].title)}
              >
                Approve
              </button>
              <button
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={() => handleRejectSection(forms[activeTab - 1].title)}
              >
                Reject
              </button>
            </div>
            <textarea
              className="w-full mt-4 p-2 bg-prim rounded-lg"
              value={notes}
              onChange={handleNotesChange}
              placeholder="Add notes here..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
