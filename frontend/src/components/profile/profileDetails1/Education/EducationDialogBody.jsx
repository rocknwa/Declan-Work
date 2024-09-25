
const EducationDialogBody = ({ onSave, }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(); // Pass the updated values back to the parent
  };

  return (
    <form id="education-form" onSubmit={handleSubmit} className="w-full flex flex-col lg:max-w-lg gap-6">
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-1.5">
        {/* <EducationComboboxDemo
        /> */}
      </div>
    </form>
  );
};

export default EducationDialogBody;
