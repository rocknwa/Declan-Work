import { useState } from 'react';

const SkillsDialogBody = ({ initialSkills, onSave }) => {
  const [skills, setSkills] = useState(initialSkills);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(oneLineHeader, about); // Pass the updated values back to the parent
  };

  return (
    <form id="skills-form" onSubmit={handleSubmit} className="w-full flex flex-col lg:max-w-lg gap-6">
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-1.5">
        
      </div>
    </form>
  );
};

export default SkillsDialogBody;
