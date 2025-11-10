import React from "react";

const FormField = ({
  label,
  id,
  name,
  value,
  type = "text",
  isTextArea = false,
  isSelect = false,
  options = [],
  disabled = true,
  labelCols = 3, // default col width for label
  inputCols = 7, // default col width for input
  rows = 3, // for textarea
  onChange,
  button,
}) => {
  return (
    <div className="mb-3 row">
      <label
        htmlFor={id}
        className={`col-sm-${labelCols} col-form-label text-end fw-bold`}
      >
        {label}
      </label>
      <div className={`col-sm-${inputCols} d-flex gap-3`}>
        {isSelect ? (
          <select
            id={id}
            name={name}
            className="form-select fw-medium"
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
          >
            {options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : isTextArea ? (
          <textarea
            id={id}
            className="form-control"
            rows={rows}
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            readOnly={disabled}
          />
        ) : (
          <input
            type={type}
            id={id}
            className="form-control fw-medium"
            value={value || ""}
            onChange={onChange}
            disabled={disabled}
            readOnly={disabled}
          />
        )}
        {button && (
          <button type="button" className="btn-sn-secondary" onClick={button.onClick}>
              {button.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
