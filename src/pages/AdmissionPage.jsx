import React from "react";
import AdmissionStyle from "../styles/modules/admission.module.scss";
function AdmissionPage() {
  const open = false;
  if (!open) {
    return (
      <>
        <h3>admissions are currently not available</h3>
      </>
    );
  }
}

export default AdmissionPage;
