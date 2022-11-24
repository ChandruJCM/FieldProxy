import React from 'react';
import { MultiSelect } from 'react-multi-select-component';


function Form() {

  
  return (
    <div className='container-fluid d-flex bg-warning '>

    <form className="d-flex justify-content-center w-50 container flex-column">
      <label>Name</label>
      <input className='' type="text" name="Name"placeholder='name'/>
      
          <a className="nav-link dropdown-toggle text-dark me-2" href="#" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">Type
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Number<input className='ms-1' type="number" name="mobile"placeholder='Number'/></a></li>
            <li><a className="dropdown-item " href="#">Date<input className='ms-4' type="date" name="Date"placeholder='Date'/></a></li>
            <MultiSelect className='flex-column '
  isObject={false}
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    'Chennai',
    'Mumbai',
    'Delhi',
    'Kolkata',
    'Kerala'
  ]}
/>
          </ul>
          <button className='btn btn-md w-25 bg-dark justify-content-start text-light'>Submit</button> 
    </form >
   
    </div>
  );
};

export default Form;
