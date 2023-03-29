import UpperSection from "./partials/UpperSection";
import BlogTabs from "./partials/BlogTabs";
import BlogPost from "./partials/BlogPost";

// async function getCategories() {
//   const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories?populate=*", {
//     cache: "no-store",
//     next: {
//       revalidate: 0,
//     },
//   });
//   return response.json();
// }

export default async function Page() {
  // const categories = await getCategories();

  return (
    <>
      <UpperSection />
      <section className="w-full ">
        <section className="flex group flex-col max-w-fit cursor-default">
          <h2 className=" text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            ./My Posts
            <div className="divider group-hover:w-60 w-0 transition-all duration-300 -translate-y-4 before:bg-black after:bg-black"></div>
          </h2>
        </section>
        {/* <BlogTabs categories={categories} /> {/*  <== Status: Abu abu antara client/server */}
        <BlogPost /> {/*  <== Status: Abu abu antara client/server */}
      </section>
    </>
  );
}
