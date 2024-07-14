import { useForm } from "react-hook-form";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SignInFormData>();
  return (
    <form className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Sign In</h2>

      <label className="flex-1 text-sm font-bold text-gray-700">
        Email
        <input
          type="email"
          className="w-full rounded border px-2 py-1 font-normal"
          {...register("email", { required: "This field is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
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
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
    </form>
  );
};
export default SignIn;
