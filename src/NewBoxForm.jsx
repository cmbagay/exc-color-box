import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const DEFAULT_STATE = { bgColor: '', width: '', height: '' }

    const [formData, setFormData] = useState(DEFAULT_STATE);
    const handleChange = (e) => {
        const { bgColor, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [bgColor]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData.bgColor, formData.width, formData.height);
        setFormData(DEFAULT_STATE);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div><label htmlFor="bgColor">Background Color </label>
                    <input
                        name="bgColor"
                        id="bgColor"
                        type="text"
                        placeholder="Enter Desired Box Color"
                        value={formData.bgColor}
                        onChange={handleChange} /></div>


                <div><label htmlFor="width">Width </label>
                    <input
                        name="width"
                        id="width"
                        type="text"
                        placeholder="Enter Box Width"
                        value={formData.width}
                        onChange={handleChange} /></div>

                <div><label htmlFor="height">Height </label>
                    <input
                        name="height"
                        id="height"
                        type="text"
                        placeholder="Enter Box Height"
                        value={formData.height}
                        onChange={handleChange} /></div>

                <button>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;