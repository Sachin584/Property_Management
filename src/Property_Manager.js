import React from "react";
import Property_List from "./Property_List";


class Property_Manager extends React.Component {
  constructor(){
    super();
    this.state={
      inputData:"",
      allProperty:[],
      propertyName:"",
      propertyDesc:"",
      propertySize:0,
    }
  }
  handlePropertyInput = (event) =>{
   this.setState({propertyName : event.target.value})
  }

  handlePropertyDesc = (event) =>{
    this.setState({propertyDesc : event.target.value})
  }

  handlePropertySize = (event) =>{
    this.setState({propertySize : event.target.value})
  }

  addProperty = (event) =>{
    if(this.state.propertyName!==''){
      var data = {'name' : this.state.propertyName, 'desc' : this.state.propertyDesc, 'size' : this.state.propertySize}
      
      let newallProperty=[...this.state.allProperty,data];
      this.state.allProperty.push(data)
      this.setState({allProperty:newallProperty, inputData:""}) 
    
    }
  }

  deleteProperty =(index) =>{
    let allProperties=[...this.state.allProperty];
    let newallProperty=allProperties.filter((value, key)=>{
       return index!==key
    })
    this.setState({allProperty:newallProperty})
  }
  render(){
  return (
   <div className="container">
     <div className="row">
       <div className="col-sm-4">
         <h3 className="text-center">Property Management</h3>
            <div className="input-group">
                <input type="text" placeholder="Property Name" className="form-control" onChange={this.handlePropertyInput} value={this.state.propertyName}/><br/>
                <input type="text" placeholder="Description" className="form-control" onChange={this.handlePropertyDesc} value={this.state.propertyDesc}/><br/>
                <input type="text" placeholder="Size" className="form-control" onChange={this.handlePropertySize} value={this.state.propertySize}/>
                <div className="input-group-append">
                <span className="btn btn-success " onClick={this.addProperty}>Add</span>
                </div>
            </div> 
                 <Property_List items={this.state.allProperty} deleteProperty={this.deleteProperty}/>
       </div>
     </div>
   </div>

  );
  }
}

export default Property_Manager;