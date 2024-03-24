import React from 'react';
import bgImg from '../../../public/istockphoto-1417777925-2048x2048.jpg';

const Banner = ({value,setValue,handleSearch}) => {

    const clearInput = () =>{
          setValue('');
    }
    return (
        <div className='h-[650px] relative flex flex-col justify-center  my-12'>
            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 ' style={{ backgroundImage: `url(${bgImg})` }}>
                {/* Background image goes here */}
            </div>
            <div className='opacity-90'>
                <h2 className='text-3xl font-bold text-purple-600 mb-5'>I Grow By Helping People In Need</h2>
                <label className="input w-2/5 input-bordered flex items-center justify-center mx-auto gap-2">
                    <input
                     onChange={(e) => setValue(e.target.value)}
                     value={value}
                    type="text" className="w-full" placeholder="Search" />
                    <span className="p-2 rounded-lg badge-info">
                        <button onClick={()=>{
                            handleSearch()
                            clearInput()
                        }}
                        
                        >Search</button>
                    </span>
                </label>
            </div>
        </div>
    );
};

export default Banner;
