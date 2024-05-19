import React from 'react';
import Card from '../Components/Card';

const FullStack = ({data}) => {
   const fsddata= data.filter((ele)=>ele.title==="Full Stack Development")
    return (
        <>
            <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
            {fsddata.map((element,index)=>{
                return(
                    <Card element={element} index={index}/>
                )
            })}
             </div>
        </div>
        </section>
        </>
    );
};

export default FullStack;