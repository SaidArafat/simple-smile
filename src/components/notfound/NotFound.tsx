"use client";
import React from "react";
import Container from "../ui/layout/Container";
import Button from "../ui/button/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <Container>
      <section className="text-center h-[37vh] relative">
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-2/4 w-2/4 flex flex-col justify-evenly items-center space-y-10">
          <h1 className="font-semibold text-2xl">Not Found</h1>
          <p>Could not find requested resource</p>
          <Button primary outline onClick={() => router.replace("/")}>
            Return home
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default NotFound;
