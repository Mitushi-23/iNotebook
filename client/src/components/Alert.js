import React from 'react'

export default function Alert(props) {
    const capatalize =(word)=>{
        if(word==='danger')
        {
            word = 'error'
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
        <div style={{height:'50px',
        position:'fixed',
        width:'100%'}} 
        // className='fixed-top'
        >
       {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capatalize(props.alert.type)}</strong>{props.alert.msg}
</div>}
</div>
</>
)
}

// import React from "react";

// function Alert() {
//   return (
//     <div className="alert alert-primary" role="alert">
//       A simple primary alert—check it out!
//     </div>
//   );
// }

// export default Alert;
