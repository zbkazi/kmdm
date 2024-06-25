import React from "react";
import StudentsInfo from "../academic/students/StudentsInfo";
import TeachersInfo from "../academic/teachers/TeachersInfo";
import RightInformation from "../academic/Info/RightInformation";
import GrievanceRedressalManagement from "../academic/Info/GrievanceRedressalManagement";
import AcademicInfo from "../academic/Info/AcademicInfo";
import InnovativeActivities from "../academic/Info/InnovativeActivities";

const InformationLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <StudentsInfo />

      {/* Card 2 */}
      <TeachersInfo />
      {/* Card 3 */}
      <RightInformation />

      <GrievanceRedressalManagement />
      <AcademicInfo />
      <InnovativeActivities />
      
    </div>
  );
};

export default InformationLayout;
