import React from "react";
import AdmissionStyle from "../styles/modules/admission.module.scss";
function AdmissionPage() {
  const open = false;
  if (!open) {
    return (
      <div className="h-[100dvh] ">
        <h3>admissions are currently not available</h3>
      </div>
    );
  }
}

export default AdmissionPage;
