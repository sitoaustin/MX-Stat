"use client";
import emailjs from "@emailjs/browser";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { Spin, message } from "antd";

const ContactUsForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_1gian4g",
        "template_kmp6z46",
        form.current,
        "771dYs0slRhvVqSs8"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          console.log(result.text);
          message.success("Your message was sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() => {
        setIsSubmitting(false);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <form
      data-aos="zoom-in"
      ref={form}
      onSubmit={sendEmail}
      className="bg-[#008080] py-6 h-fit md:h-full gap-1 w-full md:w-[580px] text-base font-medium rounded-2xl md:p-7 p-2 flex flex-col text-white"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        required
        onChange={handleChange}
        placeholder="Full Name"
        className="bg-transparent outline-none border border-[#FFFFFF80] rounded-lg text-[#FFFFFF80] text-sm p-3"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email address"
        required
        className="bg-transparent border outline-none border-[#FFFFFF80] rounded-lg text-[#FFFFFF80] text-sm p-3"
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        required
        className="h-32 bg-transparent outline-none border border-[#FFFFFF80] rounded-lg text-[#FFFFFF80] text-sm p-3"
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center bg-[#F8F8F8] py-2 font-medium text-base text-black rounded-lg"
      >
        {isSubmitting ? (
          <Spin />
        ) : isSubmitted ? (
          <AiOutlineCheckCircle size={24} style={{ color: "#00FF00" }} />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactUsForm;
