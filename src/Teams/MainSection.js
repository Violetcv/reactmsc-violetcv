import React from 'react';
import teamData from './teamsData';
import Card from './Card';

const MainSection = () => {
  return (
    <div className="containerteam">
      {}
      {teamData.map((member, index) => (
        <Card
          key={index}
          name={member.name}
          imageSrc={member.image}
          profession={member.position}
          socialLinks={[
            { url: member.instagram, icon: 'fa fa-instagram' },
            { url: member.linkedin, icon: 'fa fa-linkedin' },
          ]}
        />
      ))}
    </div>
  );
};

export default MainSection;