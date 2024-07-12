import { useForm } from "react-hook-form";

type RegisterFromData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { register, watch, handleSubmit } = useForm<RegisterFromData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Creat an account</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <label className="flex-1 text-sm font-bold text-gray-700">
          First Name
          <input
            className="w-full rounded border px-2 py-1 font-normal"
            {...register("firstName", { required: "This field is required" })}
          ></input>
        </label>
        <label className="flex-1 text-sm font-bold text-gray-700">
          Last Name
          <input
            className="w-full rounded border px-2 py-1 font-normal"
            {...register("lastName", { required: "This field is required" })}
          ></input>
        </label>
      </div>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Email
        <input
          type="email"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("email", { required: "This field is required" })}
        ></input>
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Password
        <input
          type="password"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
      </label>
      <label className="flex-1 text-sm font-bold text-gray-700">
        Confirm Password
        <input
          type="password"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") != val) {
                return "Passwords are not match";
              }
            },
          })}
        ></input>
      </label>
      <span>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 p-2 px-3 py-1 text-xl font-bold text-white duration-300 hover:bg-blue-100 hover:text-blue-400 hover:shadow-lg"
        >
          Creat Account
        </button>
      </span>
    </form>
  );
};
export default Register;
