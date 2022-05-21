import React from "react";

class Property_List extends React.Component{
 
    render(){   
        return(
            <ul className="list-group list-group-flush">
            {
                this.props.items.map(({name, desc, size},i)=>{
               return (
               <React.Fragment key={i}>
            <ul> 
               <li className="list-group-item bg-light d-flex justify-content-between"><h6>Name:</h6>{name}
               </li>  
               <li className="list-group-item bg-light d-flex justify-content-between"><h6>Description:</h6>{desc}
               </li>  
               <li className="list-group-item bg-light d-flex justify-content-between"><h6>size:</h6>{size}
               </li>
               <button className="btn text-danger badge" onClick={()=>{this.props.deleteProperty(i)}}>X</button>     
               </ul>
               </React.Fragment>
               )
                })
               }
            </ul> 
            );
    }
}
export default Property_List;