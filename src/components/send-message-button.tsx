"use client";

import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

export const SendMessageButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="inline-flex ml-auto items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
};
