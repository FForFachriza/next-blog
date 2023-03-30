async function getPostsRead(slug) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/posts/find-by-slug/${slug}?populate=*`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function Page({ params }) {
  const posts = await getPostsRead(params.slug);
  console.log(posts.data?.attributes.categories.data);
  return (
    <section className="w-full">
      <section className="flex group  flex-row pt-4 cursor-default justify-between w-full">
        <div className="flex flex-col">
          <h1 className=" text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            {" ./" + posts.data?.attributes.title}
          </h1>

          <div className="divider group-hover:w-60 w-0 transition-all duration-300 -translate-y-4 before:bg-black after:bg-black"></div>
        </div>
        {posts.data?.attributes.categories.data.map((data, index) => {
          return (
            <div key={index} className="badge badge-outline text-md font-semibold p-4 opacity-75">
              {data.attributes.name}
            </div>
          );
        })}
      </section>
      <section className="mt-2">
        <img
          className="float-right w-1/3 ml-4 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl    "
          src={process.env.NEXT_PUBLIC_API_URL + posts.data.attributes.thumbnail.data.attributes.url}
        ></img>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          {posts.data?.attributes.headline + "."}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: posts.data?.attributes.content }} className="mt-4 text-lg text-gray-700"></p>
        {/* <ReactMarkdown skipHtml={true} className="mt-4 text-lg text-gray-700"
        >{posts.data?.attributes.content}</ReactMarkdown> */}
      </section>
    </section>
  );
}
