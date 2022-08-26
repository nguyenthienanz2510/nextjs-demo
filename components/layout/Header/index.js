import Link from "next/link";

const Header = () => {
  const data = [
    {
      name: "SSG",
      link: "/graphql/SSG",
    },
    {
      name: "SSR",
      link: "/graphql/SSR",
    },
    {
      name: "CSR",
      link: "/graphql/CSR",
    },
  ];

  return (
    <div className="h-20 border">
      <div className="flex h-full justify-center items-center">
        {data.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <a className="mx-5 hover:text-color-primary font-bold">
                {item.name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
