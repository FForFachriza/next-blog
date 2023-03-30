import Card from "../components/Card";

async function getPosts() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/posts?populate=*", {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function BlogPost() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section className="grid grid-cols-3 gap-6 mb-12">

      {posts.data?.map((data, index) => {
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
     
    </section>
  );
}
