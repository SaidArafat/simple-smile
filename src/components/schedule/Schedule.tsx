"use client";
import React, { useState } from "react";
import Button from "../ui/button/Button";
import Modal from "../ui/modal/Modal";
import { useForm, FieldValues } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

const schema = Joi.object({
  phone: Joi.string().required().min(10).max(14).label("Phone"),
  date: Joi.string().required().isoDate().label("Date"),
});

interface FormData {
  phone: string;
  date: string;
}

const Schedule = ({ children }: { children: string }) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("submit", data);
    setOpenModal(false);
  };

  return (
    <>
      <Button primary outline onClick={() => setOpenModal(true)}>
        {children}
      </Button>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <div className="flex flex-col space-y-4 items-start mt-4">
            <div className="w-full">
              <input
                {...register("phone")}
                type="number"
                placeholder="Enter your phone"
                autoFocus
                className={`py-1.5 px-3 outline-none rounded-lg w-full border-2 border-gray focus:border-primary`}
              />
              {errors.phone && (
                <p className="text-[#FF0000] text-center mt-1.5">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("date")}
                type="date"
                className={`py-1.5 px-3 outline-none rounded-lg w-full border-2 border-gray focus:border-primary`}
              />
              {errors.date && (
                <p className="text-[#FF0000] text-center mt-1.5">
                  {errors.date.message}
                </p>
              )}
            </div>
            <Button primary outline>
              Submit
            </Button>
          </div>
        </Modal>
      </form>
    </>
  );
};

export default Schedule;
