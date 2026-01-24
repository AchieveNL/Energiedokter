"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { CheckCircle, XCircle, X } from "lucide-react";

const Modal = ({ isOpen, onClose, type, message }:{ isOpen: boolean; onClose: () => void; type: string; message: string }) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-[#0000008f] bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Sluiten"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center text-center">
          {isSuccess ? (
            <CheckCircle className="text-[#81C713] mb-4" size={64} />
          ) : (
            <XCircle className="text-red-500 mb-4" size={64} />
          )}
          
          <h3 className={`text-xl md:text-2xl font-bold mb-3 ${isSuccess ? "text-[#254055]" : "text-red-600"}`}>
            {isSuccess ? "Bericht verzonden!" : "Er ging iets mis"}
          </h3>
          
          <p className="text-[#4D4D4D] text-sm md:text-base mb-6">
            {message}
          </p>
          
          <button
            onClick={onClose}
            className={`${
              isSuccess ? "bg-[#81C713] hover:bg-[#6FA30A]" : "bg-red-500 hover:bg-red-600"
            } text-white px-8 py-2.5 rounded-lg transition-colors font-medium text-sm md:text-base`}
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};

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
      <label htmlFor={inputId} className="text-[#4D4D4D] font-bold text-sm md:text-base">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={`border-2 outline-0 rounded-xl p-2 pl-4 w-full text-sm md:text-base ${
          error ? "border-red-500" : "border-[#D0D0D0]"
        }`}
      />
      {error && <span className="text-red-500 text-xs md:text-sm">{error}</span>}
    </div>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    message: "",
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
    if (!/^\d+$/.test(phone)) {
      return "Telefoonnummer mag alleen cijfers bevatten.";
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

  const handleSubmit = async () => {
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
      setIsSubmitting(true);
      
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setModal({
            isOpen: true,
            type: "success",
            message: "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setTouched({
            name: false,
            email: false,
            phone: false,
          });
        } else {
          setModal({
            isOpen: true,
            type: "error",
            message: "Het bericht kon niet worden verzonden. Probeer het later opnieuw.",
          });
        }
      } catch (error) {
        setModal({
          isOpen: true,
          type: "error",
          message: "Er is een fout opgetreden. Controleer je internetverbinding en probeer het opnieuw.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: "", message: "" });
  };

  return (
    <>
      <div
        className="flex flex-col items-center md:mb-20 mb-10 md:pt-20 pt-15 min-[1024px]:mx-0 min-[1280px]:mx-20 min-[1536px]:mx-32 min-[1760px]:mx-44 m-auto"
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
        <p className="text-[#4D4D4D] text-center md:text-lg text-sm md:w-2/3 lg:w-1/2 mt-5 md:mx-0 mx-5">
          Of je nu al een concreet plan hebt of nog in de brainstormfase zit: wij
          denken graag met je mee. Laat je gegevens achter en we nemen zo snel
          mogelijk contact met je op om samen te kijken naar de mogelijkheden
        </p>
        <div className="md:mt-20 mt-10 w-full lg:px-20 md:px-10 px-3">
          <div className="flex justify-center md:text-base text-sm w-full">
            <div className="w-1/2 md:block hidden">
              <img
                src="/assets/projects/contact.svg"
                className="h-full w-full object-cover rounded-tl-[62px]"
                alt=""
              />
            </div>
            <div className="md:w-2/3 w-full pt-5 md:pr-5 md:px-13 px-7 border-2 border-[#E3E3E3] md:border-l-0 border-l-2 md:rounded-br-[64px] md:rounded-tr-none md:rounded-bl-none rounded-tr-[39px] rounded-bl-[39px]">
              <h1 className="text-[#81C713] font-bold text-base md:text-lg mb-5">
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
                type="text"
                label="Vul uw telefoonnummer in"
                placeholder="Telefoonnummer"
                field="phone"
                error={errors.phone}
                value={formData.phone}
                onChange={(value) => handleChange("phone", value)}
                onBlur={() => handleBlur("phone")}
              />
              <div className="flex flex-col gap-2 w-full mb-4">
                <label htmlFor="" className="text-[#4D4D4D] font-bold text-sm md:text-base">
                  Bericht
                </label>
                <textarea
                  rows={4}
                  placeholder="Bericht"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="border-[#D0D0D0] outline-0 border-2 rounded-xl p-2 pl-4 w-full text-sm md:text-base"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="text-[#F6F6F6] bg-[#81C713] w-fit p-2 px-6 rounded-lg hover:bg-[#6FA30A] transition-colors cursor-pointer mt-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        type={modal.type}
        message={modal.message}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}