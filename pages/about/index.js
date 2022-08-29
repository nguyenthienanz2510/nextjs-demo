import MainLayout from "../../components/layouts/MainLayout";

const About = () => {
  return <h2 className="text-center mt-96 text-4xl">About Page</h2>;
};

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default About;
