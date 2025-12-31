import React from 'react'
interface Suggestion {
    type: "good" | "improve";
    tip: string;
}

interface ATSProps{
    score:number;
    suggestions: Suggestion[]
}

const ATS: React.FC<ATSProps> = ({score, suggestions}) => {

    const gradientClass = score > 69
    ? 'from-green-100'
    : score > 49
    ? 'from-yellow-100'
    : 'from-red-100';

    const iconSrc = score >69
    ? '/icons/ats-good.svg'
    : score > 49
    ? '/icons/ats-warning.svg'
    : '/icons/ats-bad.svg'

     const subtitle = score >69
    ? 'Great Job!'
    : score > 49
    ? 'Good Start'
    : 'needs Improvement'

  return (
    <div className={`rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4 ${gradientClass}`}>
        <div className='flex flex-row items-center gap-4 mb-6'>
            <img src={iconSrc} alt="ATS Score Icon" className='w-10 h-10' />
            <div>
                <h2 className='text-2xl font-bold'> ATS Score - {score}/100</h2>
            </div>
        </div>

        <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-2'>{subtitle}</h3>
            <p className='text-gray-600 mb-4'>
                This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers

            </p>
    
            <div className='space-y-3'>
                {suggestions.map((suggestion,index)=>(
                    <div key={index} className='flex items-start gap-3'>
                        <img 
                            src = {suggestion.type==="good" ? "/icons/check.svg": "/icons/warning.svg"}
                            alt={suggestion.type === "good" ? "Check" : "Warning"}
                            className='w-5 h-5 mt-1'
                        />
                        <p className={suggestion.type === "good" ? "text-green-700" : "text-amber-700"}>
                            {suggestion.tip}
                            
                        </p>

                    </div>
                ))}
            </div>
        </div>
        <p className='text-gray-500 italic'>
                Keep refining your resume to imrpove your chances of getting past ATS filter and intothe hand of recruiters.
        </p>
    </div>
  )
}

export default ATS