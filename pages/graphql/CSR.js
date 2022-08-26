import { useQuery, gql } from "@apollo/client";
import ClientOnly from "../../components/ClientOnly";
import MainLayout from "../../components/layout/MainLayout";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

const GraphqlPageWithSSR = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <p className="mt-96 text-center">Loading...</p>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data.countries;

  console.log("======>> CSR");

  return (
    <ClientOnly>
      <div className="container mx-auto">
        <h1 className="mt-10 text-center text-lg font-bold">
          Client-side Rendering
        </h1>
        <div className="py-10">
          {countries.map((country, index) => (
            <div key={country.code} className="mt-2">
              <p>
                <span className="w-6 inline-block">{index}</span> -{" "}
                <span className="ml-2 text-color-primary">{country.name}</span>{" "}
                - {country.emoji}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ClientOnly>
  );
};

GraphqlPageWithSSR.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default GraphqlPageWithSSR;
