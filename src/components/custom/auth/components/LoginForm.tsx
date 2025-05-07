import { motion } from "motion/react";
import FormHeader from "./FormHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemes/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/common/ErrorMessage";
import LoadingButton from "@/components/common/animation/LoadingButton";
import { signIn } from "next-auth/react";
import { successToast } from "@/lib/utils/successToast";
import { useRouter } from "next/navigation";
type LoginProps = {
  setView: React.Dispatch<React.SetStateAction<Views>>;
  setOpenModal: React.Dispatch<React.SetStateAction<string>>;
};
function LoginForm({ setView, setOpenModal }: LoginProps) {
  //=====================================================================
  //hooks
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const router = useRouter();

  //=======================================================================
  //functions
  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log(data);
    const res = await signIn("credentials", { ...data, redirect: false });
    if (!res?.error) {
      successToast("logged in successfully");
       router.refresh();
      setOpenModal("");
     
    }
  };
  return (
    <div className="  flex flex-col gap-[32px]">
      <FormHeader text=" login to your account" />

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-[24px]">
        {/* email   */}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="email"
              type="email"
              required
              {...register("email")}
            />
            {/* label */}
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="email"
            >
              email
            </label>
          </div>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        {/* password */}
        <div>
          <div className="w-full h-12 relative flex rounded-xl capitalize ">
            <input
              className="peer w-full  outline-none px-4 text-base rounded-xl  border  focus:shadow-sm "
              id="password"
              type="password"
              required
              {...register("password")}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 rounded-full peer-focus:top-0 peer-focus:left-3 font-light 
              peer-focus:text-sm peer-focus:text-primary-dark 
              peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm   peer-valid:text-primary-dark  duration-150"
              htmlFor="password"
            >
              password
            </label>
          </div>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        {/* forgot password */}
        <div className="flex justify-end">
          <button
            type="button"
            className="text-primary-dark text-[14px] underline "
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Forgot Password
          </button>
        </div>
        {/* no account */}
        <div className="flex justify-center text-[14px] ">
          No account?{" "}
          <button
            type="button"
            className="mx-1 text-primary-dark underline "
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setView("signup");
            }}
          >
            Create one here
          </button>
        </div>
        {/* submit */}
        <motion.button
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.3 }}
          className={`bg-primary-dark rounded-full py-2 text-white hover:bg-primary-light-10 transition-colors ${
            !isValid || isSubmitting ? "opacity-50 pointer-not-allowed" : ""
          } `}
        >
          {isSubmitting ? (
            <span>
              <LoadingButton /> loading
            </span>
          ) : (
            "Login"
          )}
        </motion.button>
      </form>
    </div>
  );
}

export default LoginForm;
