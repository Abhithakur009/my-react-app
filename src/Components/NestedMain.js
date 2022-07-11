import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./FieldArray";


const defaultValues = {
  test: [
    {
      name: "useFieldArray1",
      nestedArray: [{ field1: "field1", field2: "field2" }]
    },
    {
      name: "useFieldArray2",
      nestedArray: [{ field1: "field1", field2: "field2" }]
    }
  ]
};

function NestedMain() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue
  } = useForm({
    defaultValues
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type="submit" className="mt-4 mr-5 btn-success"/>
    </form>
  );
}

export default NestedMain


