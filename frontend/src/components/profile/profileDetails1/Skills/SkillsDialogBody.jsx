import { useState } from "react";
import { SkillsComboboxDemo } from "./SkillsComboBox";

const SkillsDialogBody = ({ skills: initialSkills, onSave }) => {
  const [skills, setSkills] = useState(initialSkills);
  const suggestedSkills = [
    "3d",
    "Graphic Design",
    "Illustration",
    "Data Analysis",
    "Photo Manipulation",
    "Video Editing",
  ];

  const addSkill = (skill) => {
    setSkills((prev) => {
      if (!prev.includes(skill)) {
        return [...prev, skill];
      }
      return prev;
    });
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(skills); 
  };

  return (
    <form
      id="skills-form"
      onSubmit={handleSubmit}
      className="w-full flex flex-col h-[200px] lg:max-w-lg gap-6"
    >
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-1.5">
        <SkillsComboboxDemo skills={skills} addSkill={addSkill} setSkills={setSkills} />
      </div>

      {/* Suggested Skills */}
      <div className="">
        <p className="text-[#bababa] text-sm font-medium mb-2">Suggested</p>
        <div className="flex flex-wrap min-w-full gap-2">
          {suggestedSkills.map((suggestedSkill, id) => (
            <div
              key={id}
              className={`border-[2px] px-2 py-1 rounded-md cursor-pointer text-sm lg:text-base
              ${skills.includes(suggestedSkill) ? "border-[#6acd8c]" : "border-[#bababa]"}`}
              onClick={() => {
                if (skills.includes(suggestedSkill)) {
                  removeSkill(suggestedSkill);
                } else {
                  addSkill(suggestedSkill);
                }
              }}
            >
              {suggestedSkill}
            </div>
          ))}
          {/* Added Skills */}
          {skills
            .filter((skill) => !suggestedSkills.includes(skill)) // Show only skills that are not in the suggested list
            .map((skill, id) => (
              <div
                key={id}
                className="border-[2px] cursor-pointer px-2 py-1 rounded-md text-sm lg:text-base border-[#6acd8c]"
                onClick={() => removeSkill(skill)}
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
    </form>
  );
};

export default SkillsDialogBody;
