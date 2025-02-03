import DivContainer from "@/components/Home/DivContainer";
import LP1Content from "@/components/Home/LP1Content";

const LandingPg1 = () => {

  return (
    <div className="w-full min-h-[45vh] md:min-h-[70vh] md:pt-10  overflow-hidden flex flex-col mx-auto px-2 md:px-4 lg:px-8">
      <DivContainer />{/*This contains the draggable divs on the LandingPg1 */}
      <LP1Content />
    </div>
  )
}

export default LandingPg1