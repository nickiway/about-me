import { Controller } from "react-hook-form";

import { useFormHook } from "../hooks/useFormHook";

import { Input, Textarea } from "@mui/joy";
import { Send } from "@mui/icons-material";
import Separator from "../components/Separator";

const Contact = () => {
  const [control, handleSubmit, errors, form, onSubmit] = useFormHook();

  return (
    <div className="flex justify-center items-center relative container">
      <div className="w-full px-5 lg:w-2/5 py-10">
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
