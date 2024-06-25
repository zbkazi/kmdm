import React from "react";
import StudentsInfo from "../academic/students/StudentsInfo";
import TeachersInfo from "../academic/teachers/TeachersInfo";

const InformationLayout: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      <StudentsInfo />

      {/* Card 2 */}
      <TeachersInfo />
      {/* Card 3 */}
      <StudentsInfo />
    </div>
  );
};

export default InformationLayout;
