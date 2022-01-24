import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message envoyé: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_list">
          <ul>
            <li>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Votre nom *"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Le nom est requis</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                {...register(
                  "email",
                  {
                    required: "L'email est requis",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "La valeur ne match pas avec le format d'un mail !",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Votre e-mail *"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="number"
                placeholder="Votre téléphone"
                {...register("number", { required: false })}
              />
              {errors.number && (
                <span className="invalid-feedback">Phone is required.</span>
              )}
            </li>
            {/* End li */}
            <li>
              <input
                type="text"
                placeholder="Sujet du message*"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Le sujet est requis.</span>
              )}
            </li>
            {/* End li */}
          </ul>
        </div>
        {/* End input-list */}

        <div className="message_area">
          <textarea
            {...register("message", { required: true })}
            placeholder="Votre message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Le message est requis.</span>
          )}
        </div>
        {/* End message area */}

        <div className="julien_button">
          <button type="submit">Envoyer</button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
