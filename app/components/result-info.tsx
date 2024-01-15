interface data {
  score: number
  maxScore: number
  status: string,
  description: string,
}

export default function ResultInfo(data: data) {
  return (
    <div className="flex gap-4 w-full flex-col h-fit p-5 md:rounded-3xl max-[640px]:rounded-b-3xl max-[640px]:shadow-lg bg-gradient-to-b from-indigo-600 from-50% to-blue-700 place-items-center">
      <h1 className="text-lg text-neutral-200 font-medium">Your Result</h1>
        <div className="flex flex-col gap-3 size-40 rounded-full p-3 place-items-center justify-center bg-gradient-to-b from-indigo-700 from-70%">
          <h1 className="text-white text-6xl font-bold ">{data.score}</h1>
          <h2 className="text-neutral-300 text-sm font-normal">of {data.maxScore}</h2>
        </div>
        <h1 className="text-xl text-white font-bold">{data.status}</h1>
        <p className="text-neutral-300 text-sm text-center">{data.description}</p>
    </div>
  )
}
