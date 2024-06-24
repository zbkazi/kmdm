// components/MeetOurTeam.tsx
import React from "react";
import { teamMembers } from "@/config/TeachersData";
import TeamMember from "./TechersMember";

const MeetOurTeam: React.FC = () => {
  return (
    <section id="our-team" className=" py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Our All Teachers
        </h2>
        <p className="text-center text-gray-700 mb-12">Meet our all teachers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
