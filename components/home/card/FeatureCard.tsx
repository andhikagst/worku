import PrimaryButton from '@/components/UI/button/PrimaryButton'
import Image from 'next/image'
import Link from 'next/link'
import { Feature } from '../data/featureList'


const FeatureCard = ({data}: {data: Feature}) => {
  const isHighlight = data.variant === "highlight";
  
  const containerClasses = isHighlight 
    ? "bg-gradient-to-b from-[#356C85] to-[#66ACA5] text-white" 
    : "bg-white border-2 border-blue-dark text-blue-dark shadow-md";

  const buttonClasses = isHighlight
    ? "bg-blue-dark text-white"
    : "bg-white text-blue-dark border-blue-dark border-3 shadow-none";

  return (
  <div className={`${containerClasses} flex flex-col px-5 py-10 rounded-[2.5rem] gap-8 justify-center items-center max-w-xs`}>
    <Image src={data.image} alt="..." />
    <h1 className="text-3xl font-bold">{data.title}</h1>
    <p className="text-body3 text-center">
      {data.desc}
    </p>
    <Link href="">
      <PrimaryButton className={`${buttonClasses} px-16 py-4 text-body3`}>Learn More</PrimaryButton>
    </Link>
  </div>
  )
}

export default FeatureCard