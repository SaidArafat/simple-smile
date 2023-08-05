"use client";
import React from "react";
import Button from "../ui/button/Button";
import { useForm, FieldValues } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net", "org"] } })
    .messages({
      "string.email":
        "Please enter a valid email address with .com, .net, or .org domain..",
      "string.empty": "Email must not be empty..",
      "any.required": "Email is required..",
    }),
});

interface FormData {
  email: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = ({ email }: FieldValues) => {
    console.log("submit", email);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <label className="text-[#b0b0b0] uppercase">
        Subscribe to our newsletter
      </label>
      <div>
        <div className="flex items-center justify-between space-x-2 mt-4">
          <div className="w-full">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={`py-1.5 px-3 outline-none rounded-lg w-full border-2 border-gray focus:border-primary ${
                errors.email && "border-[#FF0000]"
              }`}
            />
          </div>
          <Button primary>Subscribe</Button>
        </div>
        {errors.email && (
          <p className="text-[#FF0000] mt-1 pl-2">{errors.email.message}</p>
        )}
      </div>
    </form>
  );
};

export default Form;
