import React, { useState } from "react";
import "../styles/modules/admission.scss";
import ReCAPTCHA from "react-google-recaptcha";
import Admission_rech from "../../public/data/Admission-rech.json";
function AdmissionPage() {
  const open = Admission_rech.Page_open;
  const rechaptchaTestMode = Admission_rech.Page_open;
  const defaultData = {
    child: {
      stu_name: "",
      admfor: "",
      gender: "",
      dob: "",
      address: "",
    },
    parent: {
      f_name: "",
      f_no: "",
      f_occu: "",
      m_name: "",
      m_no: "",
      m_occu: "",
    },
    further: {
      s_name: "",
      s_class: "",
    },
  };
  const [formData, setformData] = useState(defaultData);
  const [botVerified, setbotVerified] = useState(false);
  function OnHandleChange(event, parentName) {
    console.log(event.target);
    const singleChild = {
      [parentName]: {
        ...formData[parentName],

        [event.target.name]: event.target.value,
      },
    };
    // console.log("%c single child", "color:#00ffff", singleChild);
    setformData(() => ({
      ...formData,
      ...singleChild,
    }));
    // console.log("%c target", "color:#00ffff", event.target);
    // console.log("%c form data", "color:#00ffff", formData);
  }
  function SubmitHandler(event) {
    event.preventDefault();
    console.table(formData);
  }
  if (!open) {
    return (
      <div className="h-[100dvh] flex items-center justify-center">
        <h1 className=" text-2xl">admissions are currently not available</h1>
      </div>
    );
  } else {
    return (
      <div className="Container">
        <form className="Container-form" onSubmit={SubmitHandler}>
          <div>
            {/* Child details */}
            <h1>Child's Details</h1>

            <div className="Container-input">
              <label htmlFor="userName">Student Name</label>
              <input
                required
                onChange={(e) => OnHandleChange(e, "child")}
                type="text"
                pattern="^\D+$"
                id="userName"
                name="stu_name"
                placeholder="ex:Adinath"
              />
            </div>
            <div className="Container-input">
              <label>Admission for</label>
              <select
                name="admfor"
                onChange={(e) => OnHandleChange(e, "child")}
              >
                <option value="PreKG">Pre-KG</option>
                <option value="LKG">LKG</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="Container-input">
              <label>Gender</label>
              <div className="Container-input-radio">
                <input
                  required
                  onChange={(e) => OnHandleChange(e, "child")}
                  type="radio"
                  id="gender_m"
                  name="gender"
                  value="Male"
                />
                <label htmlFor="gender_m" className="radio">
                  Male
                </label>
                <br />
                <input
                  required
                  onChange={(e) => OnHandleChange(e, "child")}
                  type="radio"
                  id="gender_f"
                  name="gender"
                  value="Female"
                />
                <label htmlFor="gender_f" className="radio">
                  Female
                </label>
              </div>
            </div>
            <div className="Container-input">
              <label htmlFor="DOB">DOB</label>
              <input
                required
                onChange={(e) => OnHandleChange(e, "child")}
                type="date"
                id="dob"
                name="dob"
              />
            </div>
            <div className="Container-input">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                onChange={(e) => OnHandleChange(e, "child")}
                rows={5}
                placeholder="Enter your address here..."
              ></textarea>
            </div>
          </div>
          <div>
            {/* parent details */}
            <h1 className="mt-[5rem]">Parent's Details</h1>

            <div className="Container-input-textnum">
              <div className="Container-input">
                <label htmlFor="fathName">Father Name</label>
                <input
                  required
                  onChange={(e) => OnHandleChange(e, "parent")}
                  type="text"
                  pattern="^\D+$"
                  id="fathName"
                  name="f_name"
                  placeholder="ex:K.Rathinavelu"
                />
              </div>
              <div className="Container-input">
                <label htmlFor="fathNum">Father no</label>
                <input
                  pattern="^[0-9]*$"
                  required
                  onChange={(e) => OnHandleChange(e, "parent")}
                  type="tel"
                  id="fathNum"
                  name="f_no"
                  placeholder="ex:9568056702"
                  maxLength="15"
                />
              </div>
              <div className="Container-input">
                <label htmlFor="fathoccu">Father occupation</label>
                <input
                  required
                  onChange={(e) => OnHandleChange(e, "parent")}
                  type="text"
                  pattern="^\D+$"
                  id="fathoccu"
                  name="f_occu"
                  placeholder="ex:Marketing Manager"
                />
              </div>
            </div>
            <div className="Container-input-textnum">
              <div className="Container-input">
                <label htmlFor="MothName">Mother Name</label>
                <input
                  required
                  onChange={(e) => OnHandleChange(e, "parent")}
                  type="text"
                  pattern="^\D+$"
                  id="MothName"
                  name="m_name"
                  placeholder="ex:Nalini.R"
                />
              </div>
              <div className="Container-input">
                <label htmlFor="MothNum">Mother no</label>
                <input
                  pattern="^[0-9]*$"
                  required
                  onChange={(e) => OnHandleChange(e, "parent")}
                  type="tel"
                  id="MothNum"
                  name="m_no"
                  placeholder="ex:9568056702"
                />
              </div>
              <div className="Container-input">
                <label htmlFor="Mothoccu">Mother occupation</label>
                <input
                  required
                  pattern="^\D+$"
                  onChange={(e) => OnHandleChange(e, "parent")}
                  type="text"
                  id="Mothoccu"
                  name="m_occu"
                  placeholder="ex:Housewife / Teacher "
                />
              </div>
            </div>
          </div>
          <div>
            {/* Further details */}
            <h1 className="mt-[5rem]">Further Details</h1>

            <div className="Container-input">
              <label htmlFor="s_name">Sibling Name</label>
              <input
                onChange={(e) => OnHandleChange(e, "further")}
                type="text"
                pattern="^\D+$"
                id="s_name"
                name="s_name"
                placeholder="ex:Swaksha R"
              />
            </div>
            <div className="Container-input">
              <label>Sibling class</label>
              <select
                name="s_class"
                onChange={(e) => OnHandleChange(e, "further")}
              >
                <option value="" disabled selected>
                  If Sibling studing in this school
                </option>
                <option value="Prekg">PreKG</option>
                <option value="Lkg">LKG</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center pt-24">
            <ReCAPTCHA
              sitekey={
                rechaptchaTestMode
                  ? Admission_rech.test.Site_key
                  : Admission_rech.build.Site_key
              }
              onChange={() => setbotVerified(true)}
            />
            <input
              required
              type="submit"
              value="Submit"
              disabled={!botVerified}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AdmissionPage;
