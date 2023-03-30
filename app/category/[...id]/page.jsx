import Card from "@/app/components/Card";

async function getCategories(id) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/categories/${id}?populate=deep`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function Page({ params }) {
  let id = 0;
  switch (params.id[0]) {
    case "design":
      id = 1;
      break;
    case "programming":
      id = 2;
      break;
    case "anime":
      id = 3;
      break;
  }

  const categories = await getCategories(id);
  return (
    <>
      <section className="flex group flex-col pt-4 max-w-fit cursor-default ">
        <h2 className=" text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          {`./${categories.data?.attributes?.name}`}
          <div className="divider group-hover:w-60 w-0 transition-all duration-300 -translate-y-4 before:bg-black after:bg-black"></div>
        </h2>
      </section>
      <div className="grid grid-cols-4 gap-6">
        {categories.data?.attributes?.posts?.data.map((data, index) => {
          return (
            <Card
              key={index}
              link={`/read/${data.attributes.slug}`}
              title={data.attributes.title}
              tags={data.attributes.categories.data[0].attributes.name}
              // tags={data.attributes.category.data.attributes.name}
              image_alt={data.attributes.thumbnail.data.attributes.name}
              headline={data.attributes.headline}
              image={process.env.NEXT_PUBLIC_API_URL + data.attributes.thumbnail.data.attributes.url}
            />
          );
        })}
      </div>
    </>
  );
}
