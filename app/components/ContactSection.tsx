"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";

const TextInput = ({
  label,
  placeholder,
  field,
  error,
  value,
  onChange,
  onBlur,
  type,
}: {
  label: string;
  placeholder: string;
  field: string;
  error: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type: string;
}) => {
  const inputId = `input-${field}`;
  return (
    <div className="flex flex-col gap-2 w-full mb-4">
      <label htmlFor={inputId} className="text-[#4D4D4D] font-bold">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`border-2 outline-0 rounded-xl p-2 pl-4 w-full ${
          error ? "border-red-500" : "border-[#D0D0D0]"
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const validateName = (name: string) => {
    if (/\d/.test(name)) {
      return "Naam mag geen cijfers bevatten.";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "E-mailadres moet het formaat hebben: example@example.example";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    if (/[a-zA-Z]/.test(phone)) {
      return "Telefoonnummer mag alleen cijfers bevatten, geen letters.";
    }
    if (phone.length !== 10) {
      return "Het telefoonnummer moet uit 10 cijfers bestaan.";
    }
    return "";
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field as keyof typeof touched]) {
      let error = "";
      if (field === "name") error = validateName(value);
      if (field === "email") error = validateEmail(value);
      if (field === "phone") error = validatePhone(value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    let error = "";
    const value = formData[field as keyof typeof formData];
    if (field === "name") error = validateName(value as string);
    if (field === "email") error = validateEmail(value as string);
    if (field === "phone") error = validatePhone(value as string);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setErrors({
      name: nameError,
      email: emailError,
      phone: phoneError,
    });

    setTouched({
      name: true,
      email: true,
      phone: true,
    });

    if (!nameError && !emailError && !phoneError) {
      console.log("Form Data:", formData);
    }
  };

  const handleToggle = () => {
    setFormData((prev) => ({ ...prev, isChecked: !prev.isChecked }));
  };

  return (
    <div
      className="flex flex-col items-center md:mb-20 mb-10 mt-10"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="Contact"
        span={
          <div className="text-[#254055] md:text-4xl text-2xl font-extrabold text-center mx-5">
            Klaar om te
            <span className="text-[#81C713]"> beginnen?</span>
            <br />
            Wij ook!
          </div>
        }
      />
      <p className="text-[#4D4D4D] text-center md:text-lg text-sm md:w-1/2 mt-5 md:mx-0 mx-5">
        Of je nu al een concreet plan hebt of nog in de brainstormfase zit: wij
        denken graag met je mee. Laat je gegevens achter en we nemen zo snel
        mogelijk contact met je op om samen te kijken naar de mogelijkheden
      </p>
      <div className="md:mt-20 mt-10 w-full md:px-24 px-3">
        <div className="flex justify-center md:text-base text-sm w-full">
          <div className="w-1/2 md:block hidden">
            <img
              src="/assets/projects/contact.svg"
              className="h-full w-full object-cover rounded-tl-[62px]"
              alt=""
            />
          </div>
          <div className="md:w-2/3 w-full pt-5 md:pr-5 md:px-13 px-7 border-2 border-[#E3E3E3] md:border-l-0 border-l-2 md:rounded-br-[64px] md:rounded-tr-none md:rounded-bl-none rounded-tr-[39px] rounded-bl-[39px]">
            <h1 className="text-[#81C713] font-bold text-lg mb-5">
              Stuur ons een bericht
            </h1>
            <TextInput
              type="text"
              label="Vul uw volledige naam in"
              placeholder="Naam"
              field="name"
              error={errors.name}
              value={formData.name}
              onChange={(value) => handleChange("name", value)}
              onBlur={() => handleBlur("name")}
            />
            <TextInput
              type="email"
              label="Vul uw e-mailadres in"
              placeholder="E-mail"
              field="email"
              error={errors.email}
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              onBlur={() => handleBlur("email")}
            />
            <TextInput
              type="number"
              label="Vul uw telefoonnummer in"
              placeholder="Telefoonnummer"
              field="phone"
              error={errors.phone}
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              onBlur={() => handleBlur("phone")}
            />
            <div className="flex flex-col gap-2 w-full mb-4">
              <label htmlFor="" className="text-[#4D4D4D] font-bold">
                Bericht
              </label>
              <textarea
                rows={4}
                placeholder="Bericht"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="border-[#D0D0D0] outline-0 border-2 rounded-xl p-2 pl-4 w-full"
              ></textarea>
              <div
                onClick={handleToggle}
                className="flex items-center my-2 w-fit"
              >
                <div
                  className={`rounded-full flex justify-center items-center size-4 cursor-pointer border border-[#A1A1A1]`}
                >
                  <div
                    className={`size-3 rounded-full  ${
                      formData.isChecked ? "bg-blue-400" : "bg-transparent"
                    }`}
                  ></div>
                </div>
                <label
                  htmlFor="lorem-option"
                  className="text-[#A1A1A1] ml-3 cursor-pointer"
                >
                  Lorem ipsum
                </label>
              </div>
              <button
                onClick={handleSubmit}
                className="text-[#F6F6F6] bg-[#81C713] w-fit p-2 px-6 rounded-lg hover:bg-[#6FA30A] transition-colors cursor-pointer"
              >
                Verstuur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
