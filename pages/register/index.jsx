import MainLayout from "../../components/layouts/MainLayout";

const RegisterPage = () => {
  return <div>RegisterPage</div>;
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
