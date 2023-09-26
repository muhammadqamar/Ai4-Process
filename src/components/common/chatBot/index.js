import React from 'react'
import FileIcon from "../../../assets/images/fileIcon.svg"
import RightArrowIcon from "../../../assets/images/rightArrowIcon.svg"

const index = () => {
    return (
        <div className="bg-Grey-700 max-w-[951px] px-[45px] pt-[29px] pb-3">
            <div className='flex flex-col gap-36'>
                <div className='w-full'>
                    <div className="flex flex-row items-center gap-[14px] justify-center mb-[45px]">
                        <img
                            src={FileIcon}
                            alt="FileIcon"
                        />
                        <p className='text-White h4'>Rust_Doc.pdf</p>
                    </div>
                    <div>
                        <p className='text-white-100 mb-[10px] p-large !font-medium'><span className='font-black'>Username: </span>In the Rust documentation, how does the language handle concurrency and parallelism, and could you outline a scenario where the "Send" and "Sync" traits are particularly useful?</p>
                        <p className='text-white-100 p-large !font-medium'><span className='font-black'>Libersift:</span> Rust handles concurrency through its ownership system and provides safe abstractions for parallelism. Concurrency is managed by ensuring that data cannot be mutated simultaneously by multiple threads, thus preventing data races. The "Send" and "Sync" traits play a crucial role in these scenarios.
                            The "Send" trait indicates that a type can be safely transferred between threads, allowing data to be moved from one thread to another. The "Sync" trait indicates that a type can be safely shared among threads, ensuring that multiple threads can read the data simultaneously.
                            <span>An example scenario for the use of these traits is in a parallel processing application. Let's say you're implementing a web server in Rust. Each incoming request could be processed in parallel by multiple threads. The data structures that hold request information and responses would need to implement the "Send" trait to be moved between threads and the "Sync" trait to be safely shared among them. This ensures that concurrent access and modification of the data remain free from data races.</span></p>
                    </div>
                </div>
                <div className="flex flex-row bg-Grey-800 h-[45px] mb-[57px]">
                    <input type="text" className='bg-transparent w-full text-white-100 px-3' />
                    <img src={RightArrowIcon} className='mr-[15px]' />
                </div>
            </div>
            <p className="p-xlarge text-White-500">
                Libersift is AI-powered search tool that revolutionizes the way you navigate technical documentation. Libersift leverages advanced AI algorithms to deliver fast and accurate answers to your queries.
            </p>
        </div>
    )
}

export default index