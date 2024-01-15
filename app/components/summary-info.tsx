import SummaryItem from './summary-item'
import thunderIcon from '../../public/assets/images/icon-reaction.svg';
import brainIcon from '../../public/assets/images/icon-memory.svg';
import verbalIcon from '../../public/assets/images/icon-verbal.svg';
import eyeIcon from '../../public/assets/images/icon-visual.svg';

export default function SummaryInfo() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h1 className="text-md text-slate-900 font-bold">Summary</h1>
      <SummaryItem 
        color='text-red-600' 
        bgColor='bg-red-50'
        iconSrc={thunderIcon} 
        title={'Reaction'} 
        score={80} 
        maxScore={100}
      />
      <SummaryItem 
        color='text-yellow-600' 
        bgColor='bg-yellow-50'
        iconSrc={brainIcon} 
        title={'Memory'} 
        score={92} 
        maxScore={100}
      />

      <SummaryItem 
        color='text-green-600' 
        bgColor='bg-geen-50'
        iconSrc={verbalIcon} 
        title={'Verbal'} 
        score={61} 
        maxScore={100}
      />

      <SummaryItem 
        color='text-indigo-600' 
        bgColor='bg-indigo-50'
        iconSrc={eyeIcon} 
        title={'Visual'} 
        score={72} 
        maxScore={100}
      />

      <button className='w-full bg-slate-900 rounded-full h-8 text-white text-sm flex place-content-center place-items-center'>
        Continue
      </button>
    </div>
  )
}
