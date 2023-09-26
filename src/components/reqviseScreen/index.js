import React from 'react';
import Revqvise from "../../assets/images/reqviseLogo.svg"
import Button from "../../utils/Button/index"
import Footer from "../Layout/Footer/footer"

const Index = () => {
  return (
    <div className='w-full min-h-screen bg-Purple-900 pt-[100px]'>
      <div className='h-[529px] border-y-4 border-solid'>
        <div className='flex flex-col items-center text-White justify-center gap-[19px] pt-[126px]'>
          <img src={Revqvise} />
          <p className='h2 pl-[91px] pr-[41px]'>Reqvise is a tool that uses natural language processing to help system requirement engineers write requirements that are clear, consistent, and can be tested.</p>
        </div>
        <div>
          {/* <Button /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index