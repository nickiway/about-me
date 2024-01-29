import {
  useForm,
  SubmitHandler,
  Control,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";

import { sendForm } from "../api/sendForm";
import { useRef } from "react";

const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const userPublicKey: string =
  import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY || "";

interface Inputs {
  email: string;
  message: string;
}

export const useFormHook = (): [
  Control<Inputs>,
  UseFormHandleSubmit<Inputs>,
  FieldErrors<Inputs>,
  React.MutableRefObject<null>,
  SubmitHandler<Inputs>
] => {
  const form = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    sendForm({ serviceID, templateID, userPublicKey, form, reset });
  };

  return [control, handleSubmit, errors, form, onSubmit];
};
