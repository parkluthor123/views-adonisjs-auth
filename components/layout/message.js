import React from "react";

const Message = (props)=>{
    return(
        <>
           <div className="container fixed-bottom">
               <div className="alert alert-info" role="alert">
                   <strong className="text-center d-flex justify-content-center">{ props.Text }</strong>
               </div>
           </div>
        </>
    )
}

export default Message