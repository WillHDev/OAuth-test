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
    tags: [],
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

// const handleSubmit = (e) => {
//     e.preventDefault();

//     const assignedTo1 = JSON.stringify(form.assignedTo);
//     //JSON.stringify(selected);
//     console.log(assignedTo1);
//     setForm({ 
//         ...form,
//         assignedTo: assignedTo1
//      });
// console.log( form);
// }
const submitForm = () => {

    // axios.post("/api/resources", form)
     // fetch("/api/resources", {
     //   body: JSON.stringify(form),
     //   headers: {"Content-Type": "application/json"},
     //   method: "POST"
     // })
    
     //axios.post('http://localhost:8080/api/resources', form);
console.log(form);
     return fetch('http://localhost:8080/api/resources', {
         method: 'POST',
         body: JSON.stringify(form),
         headers: {
             'Content-Type': 'application/json'
         }
     }).then(response => {
         if (response.status >= 200 && response.status < 300) {
             return response;
             // console.log(response);
             // window.location.reload();
           } else {
            console.log('Somthing happened wrong');
           }
     }).catch(err => err);
        // .then(response => this.setState({ articleId: response.data.id }));
   }
const Joey = "Joey";
  
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
            <div className="field">
                <label className="label">Tags</label>
                
            </div>
       <div className="field">
                <label className="label">Assign to:</label>
                <div className="control has-icons-left has-icons-right">
                <label className="checkbox">
  <input
   type="checkbox"
   name="description" 
   value={form.assignedTo}
   onChange={handleChange}
/>
  {Joey}
</label>
<br/>
<br/>
                <textarea
                     className="textarea" 
                     placeholder="Textarea"  
                     name="assignedTo" 
                     value={form.assignedTo}
                     onChange={handleChange}>
                     </textarea>
                     
                {/* <MultiSelect
        options={options}
       value={form.assignedTo}
        onChange={handleMultiSelectChange}
        labelledBy="Select"
      /> */}
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
                    <button onClick={submitForm}
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

{/* <div className="control">
                    <textarea
                     className="textarea" 
                     placeholder="Textarea"  
                     name="tags" 
                     value={form.tags}
                     onChange={handleChange}>
                     </textarea>
                </div> */}