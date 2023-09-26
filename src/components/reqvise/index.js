import React from 'react';
import Revqvise from "../../assets/images/reqviseLogo.svg"

const Index = () => {
  return (
    <div className='w-full min-h-screen bg-Purple-900'>
      <div className='h-[529px] margin-top-[191px] text-White border-y-4 border-White border-solid'>
        <div className='flex flex-col items-center justify-center gap-[19px] pt-[126px]'>
          <img src={Revqvise} />
          <p className='h2 pl-[91px] pr-[41px]'>Reqvise is a tool that uses natural language processing to help system requirement engineers write requirements that are clear, consistent, and can be tested.</p>
        </div>
      </div>
    </div>
  )
}

export default Index