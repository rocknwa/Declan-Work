import DivContainer from "@/components/Home/DivContainer";
import LP1Content from "@/components/Home/LP1Content";

const LandingPg1 = () => {

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <DivContainer />{/*This contains the draggable divs on the LandingPg1 */}
      <LP1Content />
    </div>
  )
}

export default LandingPg1