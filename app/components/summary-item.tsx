import Image from "next/image";

interface summaryAttributes {
  color: string,
  bgColor: string,
  iconSrc: string,
  title: string,
  score: number,
  maxScore: number
}

export default function SummaryItem(props: summaryAttributes) {
  return (
    <div className={`flex p-2 h-10 w-full justify-between rounded ${props.bgColor}`}>
      <div className={`inline-flex gap-2`}>
        <Image 
          src={props.iconSrc}
          alt="icon"
          width={24}
          height={24}
        />
        <h1 className={`text-sm ${props.color} font-semibold`}>{props.title}</h1>
      </div>
      <h2 className="text-sm text-black font-semibold">
        {props.score}
        <span className="text-neutral-600"> / {props.maxScore}</span>
      </h2>
    </div>
  );
}
