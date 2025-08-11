"use client";
import { useState } from "react";
import { FiSend, FiCheck } from "react-icons/fi";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  services: string[];
};

const services = [
  "Graphic Design",
  "Video Editing",
  "3D Modeling & Animation",
  "Video Production",
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: { services: ["Video Production"] },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API
      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[554px] px-4 sm:px-6 md:px-8 lg:px-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-6 sm:p-8 bg-neutral-800/60 backdrop-blur-md rounded-md shadow-lg font-medium w-full"
      >
        {/* First & Last Name */}
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {/* First Name */}
          <div className="flex flex-col flex-1">
            <label className="text-base tracking-wide text-orange-50">
              First Name
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="Your First Name"
              className={`mt-3 px-4 py-3 rounded-xl text-sm sm:text-base text-orange-50 bg-transparent border w-full transition-all duration-300 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.firstName
                  ? "border-red-400"
                  : "border-orange-50 border-opacity-20 hover:border-orange-300"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col flex-1">
            <label className="text-base tracking-wide text-orange-50">
              Last Name
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Your Last Name"
              className={`mt-3 px-4 py-3 rounded-xl text-sm sm:text-base text-orange-50 bg-transparent border w-full transition-all duration-300 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                errors.lastName
                  ? "border-red-400"
                  : "border-orange-50 border-opacity-20 hover:border-orange-300"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-400">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label className="text-base tracking-wide text-orange-50">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Email Address"
            className={`mt-3 px-4 py-3 rounded-xl text-sm sm:text-base text-orange-50 bg-transparent border w-full transition-all duration-300 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.email
                ? "border-red-400"
                : "border-orange-50 border-opacity-20 hover:border-orange-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Services */}
        <div className="flex flex-col w-full">
          <label className="text-base tracking-wide text-orange-50">
            Select Service
          </label>
          <div className="flex flex-wrap gap-4 mt-4 text-sm sm:text-base text-orange-50">
            {services.map((service) => (
              <label
                key={service}
                className="flex gap-3 items-center cursor-pointer group"
              >
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="appearance-none w-5 h-5 rounded-md border border-orange-50 border-opacity-30 checked:bg-orange-400 checked:border-transparent transition-all duration-200 focus:outline-none group-hover:border-orange-200"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label className="text-base tracking-wide text-orange-50">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Write your message here"
            rows={6}
            className={`mt-3 px-4 py-3 rounded-xl text-sm sm:text-base text-orange-50 bg-transparent border w-full resize-none transition-all duration-300 placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.message
                ? "border-red-400"
                : "border-orange-50 border-opacity-20 hover:border-orange-300"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center gap-2 px-8 py-3 font-semibold text-orange-50 uppercase rounded-3xl border border-orange-50 w-full sm:w-auto justify-center transition-all duration-300 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-orange-50 hover:text-neutral-900"
            }`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : isSuccess ? (
              <>
                <FiCheck className="text-lg" /> Sent!
              </>
            ) : (
              <>
                <FiSend className="text-lg" /> Submit
              </>
            )}
          </button>
          <p className="text-xs text-orange-200 max-w-full sm:max-w-[300px] leading-snug">
            By submitting this form you agree to our Terms & Conditions and
            Privacy Policy.
          </p>
        </div>
      </form>
    </div>
  );
}
