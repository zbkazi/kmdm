// components/TeamMember.tsx
import React from "react";
import { TeamMember as TeamMemberType } from "@/config/TeachersData";

interface TeamMemberProps {
  member: TeamMemberType;
}

const TechersMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="rounded-lg shadow-md border-spacing-2 m-4  p-6 my-6 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-full sm:w-64 sm:w-80 rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-gray-700">Role: {member.role}</p>
    </div>
  );
};

export default TechersMember;
