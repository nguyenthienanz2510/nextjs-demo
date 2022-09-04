import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import tw from "twin.macro";
import { LOGIN_MUTATION } from "../../lib/generate";
import JWTManager from "../../utils/jwt";

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [generateCustomerToken, dataMutation] = useMutation(LOGIN_MUTATION);

  console.log(dataMutation);

  const onSubmit = async (data) => {
    try {
      const response = await generateCustomerToken({
        variables: { email: data.email, password: data.password },
      });
      if (!!response.data?.generateCustomerToken.token) {
        JWTManager.setToken(response.data.generateCustomerToken.token);
        console.log("TOKEN: ", response.data.generateCustomerToken.token);
      } else {
        console.log("LOGIN ERROR: ", response);
      }
    } catch (err) {
      console.log("CATCH LOGIN ERROR: ", err);
    }
  };
  return (
    <FormSignInStyle onSubmit={handleSubmit(onSubmit)}>
      <LabelStyle htmlFor="email">Email</LabelStyle>
      <InputStyle
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        {...register("email", {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
      />
      {Object.keys(errors).length !== 0 && (
        <>
          {errors.email?.type === "required" && (
            <SpanStyle>email is required</SpanStyle>
          )}
          {errors.email?.type === "pattern" && (
            <SpanStyle>Invalid email!!!</SpanStyle>
          )}
        </>
      )}
      <LabelStyle htmlFor="password">Password</LabelStyle>
      <InputStyle
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {Object.keys(errors).length !== 0 && (
        <>
          {errors.password?.type === "required" && (
            <SpanStyle>password is required</SpanStyle>
          )}
        </>
      )}

      <ButtonGroup>
        <RegisterButton>Register</RegisterButton>
        <SubmitButton type="submit">Sign in</SubmitButton>
      </ButtonGroup>
    </FormSignInStyle>
  );
};

export default FormSignIn;

const FormSignInStyle = tw.form`flex flex-col`;

const LabelStyle = tw.label`mt-4 mb-2`;

const InputStyle = tw.input`p-2 border rounded`;

const SubmitButton = tw.button`px-5 py-2 border border-color-primary text-color-primary rounded hover:text-color-white hover:bg-color-primary transition-all `;

const RegisterButton = tw.button`
  px-5 py-2 text-color-secondary underline
`;

const SpanStyle = tw.span`text-red-500 my-2`;

const ButtonGroup = tw.div`mt-5 flex justify-end`;
