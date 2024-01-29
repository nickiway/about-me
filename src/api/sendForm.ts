import emailjs from "@emailjs/browser";

interface sendFormProps {
  serviceID: string;
  templateID: string;
  form: {
    current: HTMLFormElement | null;
  };
  userPublicKey: string;
  reset: () => void;
}

export const sendForm = ({
  serviceID,
  templateID,
  form,
  userPublicKey,
  reset,
}: sendFormProps) => {
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
