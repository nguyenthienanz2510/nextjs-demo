import Link from "next/link";
import tw from "twin.macro";
import MainLayout from "../../components/Layouts/MainLayout";

const ButtonStyle = tw.a`
px-5 py-2 text-center text-red-500 border border-red-500 rounded cursor-pointer
`;

const About = ({ data }) => {
  return (
    <>
      <main className="container mx-auto">
        <div className="my-20">About Page</div>
        <Link href="/">
          <ButtonStyle>Go to home page</ButtonStyle>
        </Link>
        <ul className="my-20">
          {data.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://62fbaabfe4bcaf53518aad31.mockapi.io/player`);
  const data = await res.json();

  return { props: { data } };
}

export default About;

About.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
