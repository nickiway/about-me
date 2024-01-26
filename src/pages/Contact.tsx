import { useForm, SubmitHandler, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Input, Textarea } from "@mui/joy";
import { Send } from "@mui/icons-material";

import Separator from "../components/Separator";
import { useRef } from "react";

interface Inputs {
  email: string;
  message: string;
}

const Contact = () => {
  const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const userPublicKey: string =
    import.meta.env.VITE_EMAILJS_USER_PUBLIC_KEY || "";

  const form = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (!form.current) {
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, userPublicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        reset();
      },
      (error) => {
        console.log(error.text);
        alert("Message failed to send!");
      }
    );
  };

  return (
    <div
      className="flex justify-center h-full items-center relative container m-auto"
      style={{ zIndex: 0 }}
    >
      <div className="w-2/5 py-10">
        <div className="py-10">
          <h1 className="text-3xl bitter py-5 font-bold">Say Hello</h1>
          <Separator />
        </div>
        <form ref={form} method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-10">
            <Controller
              defaultValue=""
              name="email"
              control={control}
              rules={{
                required: "This field is required!",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This field must be a valid email!",
                },
              }}
              render={({ field }) => (
                <Input
                  style={{ zIndex: 0 }}
                  className={"py-2"}
                  color={errors.email ? "danger" : "neutral"}
                  placeholder="Email"
                  {...field}
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="pb-10 z-[-99]">
            <Controller
              defaultValue=""
              name="message"
              control={control}
              rules={{ required: "This field is required!" }}
              render={({ field }) => (
                <Textarea
                  style={{ position: "static", zIndex: 0 }}
                  className="py-2 "
                  color={errors.message ? "danger" : "neutral"}
                  placeholder="Message"
                  {...field}
                />
              )}
            />
            {errors.message && (
              <p className="errorMsg">{errors.message.message}</p>
            )}
          </div>

          <button className="primary-btn" type="submit">
            <Send /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
