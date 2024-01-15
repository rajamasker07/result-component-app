import ResultInfo from "./result-info";
import SummaryInfo from "./summary-info";

export default function Card() {
  return (
    <div className="p-0 rounded-xl h-fit md:shadow-2xl md:w-[500px] md:flex md:flex-row sm:flex sm:flex-col sm:w-full">
      <div className="md:w-[50%] lg:md:w-[50%] sm:w-full">
        <ResultInfo 
          score={76} 
          maxScore={100} 
          status={"Great"} 
          description={"You Scored Higer then 65% of the people who have taken these tests."}
        />
      </div>
      <div className="md:w-[50%] lg:md:w-[50%] sm:w-full">
        <SummaryInfo/>
      </div>
    </div>
  )
}
