import React from "react";

function FormInput({ handleChange, formInputData, handleSubmit, handleClear, checked }) {
    return (
        <div>
            <h4> Form Mahasiswa </h4>

            <form>
                <div className="mb-3">
                    <label htmlFor="nim" className="form-label">NIM</label>
                    <input type="text" className="form-control" name="nim" value={formInputData.nim} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formInputData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <textarea className="form-control" placeholder="Address" name="address" style={{ height: "100px" }} value={formInputData.address} onChange={handleChange} ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="genderMale" value={"Male"} onChange={handleChange} checked={checked.male}/>
                        <label className="form-check-label" htmlFor="genderMale">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="genderFemale" value={"Female"} onChange={handleChange} checked={checked.female}/>
                        <label className="form-check-label" htmlFor="genderFemale">
                            Female
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="hoby">Hobby</label>
                    <select className="form-select" aria-label="Default select example" name="hobby" value={formInputData.hobby} onChange={handleChange} >
                        <option selected>Select Hobby</option>
                        <option value="Blogging">Blogging</option>
                        <option value="Reading">Reading</option>
                        <option value="Coding">Coding</option>
                        <option value="Journaling">Journaling</option>
                        <option value="Cooking">Cooking</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="floatingTextarea2">Comments</label>
                    <textarea className="form-control" placeholder="Leave a comment here" name="comment" style={{ height: "100px" }} value={formInputData.comment} onChange={handleChange} ></textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary me-3" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default FormInput;
