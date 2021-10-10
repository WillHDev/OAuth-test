import { useState } from 'react';
// import Select from 'react-select'
import {MultiSelect} from 'react-multi-select-component';
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]


//: OptionsType = 


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const users= [
    { label: 'Joey', value: 'Joey', extra: 'extra' },
    { label: 'Allistair', value: 'Allistair' },
    { label: 'Gwen', value: 'Gwen' }
   
  ];

 

const AddTask = () => {

const [ form, setForm ] = useState({
    title: "",
    description: "",
    assignedTo: []
});

const handleChange = (e) =>{
    const { name, value }  = e.target;
        
        setForm({ 
            ...form,
            [name]: value
         });
         console.log("form" + form);
}


const handleMultiSelectChange = (selected) =>{
   // const  { value }  = e.target;
        
        const assignedTo1 = selected;
        //JSON.stringify(selected);
        console.log(assignedTo1);
        setForm({ 
            ...form,
            assignedTo: assignedTo1
         });
         console.log("multiChange" + form.assignedTo);
}

const handleSubmit = (e) => {
    e.preventDefault();

    const assignedTo1 = JSON.stringify(form.assignedTo);
    //JSON.stringify(selected);
    console.log(assignedTo1);
    setForm({ 
        ...form,
        assignedTo: assignedTo1
     });
console.log("Submit" + form);
}
//const multiValue =[];
    return (

        <><h1 className="label">New Task</h1><div className="field">
            <label className="label">Task</label>
            <div className="control">
                <input 
                className="input" 
                type="text" 
                placeholder="Text input"
                name="title" 
                value={form.title}
                onChange={handleChange}/>
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea
                     className="textarea" 
                     placeholder="Textarea"  
                     name="description" 
                     value={form.description}
                     onChange={handleChange}>
                     </textarea>
                </div>
            </div>
        </div><div className="field">
                <label className="label">Assign to:</label>
                <div className="control has-icons-left has-icons-right">
                    
                <MultiSelect
        options={options}
       value={form.assignedTo}
        onChange={handleMultiSelectChange}
        labelledBy="Select"
      />
                {/* <Select
                value={form.assignedTo}
                onChange={handleMultiSelectChange}
                 options={options} /> */}
                {/* <Select
                     name="assignedTo"
                    inputId="multi-select-example"
                    className="multi-select"
                    classNamePrefix="react-select"
                    options={users}
                    isMulti
                    isSearchable={false}
                    placeholder=""
                    value={form.assignedTo}
                    onChange={handleMultiSelectChange}
                    /> */}
                </div>
               
            </div><div className="field is-grouped">
                <div className="control">
                    <button onClick={handleSubmit}
                    className="button is-link"
                    >Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div></>
    )
}

export default AddTask;