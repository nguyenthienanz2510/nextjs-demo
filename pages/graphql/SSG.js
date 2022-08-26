import { gql } from "@apollo/client";
import client from "../../apollo-client";
import MainLayout from "../../components/layout/MainLayout";

const GraphqlPageWithGetStaticProps = ({ countries }) => {
  console.log("======>> SSG");

  return (
    <div className="container mx-auto">
      <h1 className="mt-10 text-center text-lg font-bold">getStaticProps</h1>
      <div className="py-10">
        {countries.map((country, index) => (
          <div key={country.code} className="mt-2">
            <p>
              <span className="w-6 inline-block">{index}</span> -{" "}
              <span className="ml-2 text-color-primary">{country.name}</span> -{" "}
              {country.emoji}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });
  return {
    props: {
      countries: data.countries,
    },
  };
}

GraphqlPageWithGetStaticProps.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default GraphqlPageWithGetStaticProps;
