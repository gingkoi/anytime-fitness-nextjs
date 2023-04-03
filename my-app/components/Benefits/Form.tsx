import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const initialValues: { name: string; email: string; phoneNumber: string } = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors]: any = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {}, [formErrors]);
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    return errors;
  };
  const notify = () =>
    toast.success("Your message has been received!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  Object.keys(formErrors).length === 0 && isSubmit ? notify() : null;

  return (
    <div className="max-w-[1400px] h-auto flex flex-col lg:flex-row mx-auto my-20 gap-10 px-10">
      <div className="max-w-[600px] space-y-4">
        <p className="text-xl">
          For more information or to schedule a complimentary tour, email our
          Sales team at <b>info@fit.com</b>.
        </p>
        <p className="font-bold text-4xl text-primary">619 475 4450</p>
        <p>282 Kevin Brook, Imogeneborough, CA 58517</p>
      </div>
      <div className="p-10 bg-black shadow-xl rounded-md border-2">
        <form
          className="lg:grow grid grid-cols-2 gap-3 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Full name"
            className="border p-3 col-span-2 focus:outline-primary"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className="grid col-span-2 text-sm text-[#ff5347]">
            {formErrors.name}
          </p>
          <input
            type="email"
            placeholder="Email"
            className="border p-3  focus:outline-primary grid col-span-2 lg:col-span-1"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="lg:hidden text-sm text-[#ff5347] grid col-span-2">
            {formErrors.email}
          </p>

          <input
            type="text"
            placeholder="Phone number"
            className="border p-3  focus:outline-primary grid col-span-2 lg:col-span-1"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
          <p className="hidden lg:block text-sm text-[#ff5347]">
            {formErrors.email}
          </p>
          <p className="grid col-span-2 lg:col-span-1 text-sm text-[#ff5347]">
            {formErrors.phoneNumber}
          </p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={4}
            className="lg:col-span-2 border  p-3 focus:outline-primary grid col-span-2"
            placeholder="Message"
          ></textarea>
          <input
            value="Send Enquiry"
            type="submit"
            className="bg-white py-3  mt-5 font-medium hover:bg-primary hover:text-white transition ease-out cursor-pointer text-sm lg:text-base"
          />
          <div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              icon={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
