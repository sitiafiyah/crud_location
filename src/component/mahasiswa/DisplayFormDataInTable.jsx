import React, { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";

function DisplayFormDataInTable() {
    const [tableData, setTableData] = useState([])
    
    const [checked, setChecked] = useState({})
    const [formInputData, setformInputData] = useState({
        nim: "",
        name: "",
        address: "",
        hobby: "",
        comment: "",
    });

    const handleChange = (evnt) => {
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
        if (checkEmptyInput) {
            const newData = (data) => ([...data, formInputData])
            setTableData(newData);

            /**clear form input */
            const emptyInput = {
                nim: "",
                name: "",
                address: "",
                hobby: "",
                comment: "",
            }
            setformInputData(emptyInput)
        }
    }

    const handleClear = (evnt) => {
        evnt.preventDefault();
        const emptyInput = {
            nim: "",
            name: "",
            address: "",
            hobby: "",
            comment: "",
        }

        setChecked({
            male: false,
            female: false
        })

        setformInputData(emptyInput)
    }

    return (
        <div className="container" style={{ margin: "50px 30px" }}>
            <div className="row">
                <div className="col-md-6">
                    <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit} handleClear={handleClear} checked={checked}/>
                </div>
            </div>
            <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-md-12">
                    <Table tableData={tableData}/>
                </div>
            </div>
        </div>
    );
}
export default DisplayFormDataInTable;