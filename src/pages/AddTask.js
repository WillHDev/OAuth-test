import MultiSelect from "react-multi-select-component";
import Select from '@atlaskit/select';

//: OptionsType = 



const cities= [
    { label: 'Adelaide', value: 'adelaide', extra: 'extra' },
    { label: 'Brisbane', value: 'brisbane' },
    { label: 'Canberra', value: 'canberra' },
    { label: 'Darwin', value: 'darwin' },
    { label: 'Hobart', value: 'hobart' },
    { label: 'Melbourne', value: 'melbourne' },
    { label: 'Perth', value: 'perth' },
    { label: 'Sydney', value: 'sydney' },
  ];
const AddTask = () => {


    return (

        <><div className="field">
            <label className="label">Task</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>
        </div><div className="field">
                <label className="label"></label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                </div>
                <p className="help is-success">This username is available</p>
            </div><div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                <Select
      inputId="multi-select-example"
      className="multi-select"
      classNamePrefix="react-select"
      options={cities}
      isMulti
      isSearchable={false}
      placeholder="Choose a city"
    />
                </div>
                <p className="help is-danger">This email is invalid</p>
            </div><div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </div><div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox" />
                    </label>
                </div>
            </div><div className="field">
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="question" />
                    </label>
                    <label className="radio">
                        <input type="radio" name="question" />
                    </label>
                </div>
            </div><div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                </div>
            </div></>
    )
}

export default AddTask;