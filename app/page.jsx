import UpperSection from "./partials/UpperSection";
import BlogTabs from "./partials/BlogTabs";
import BlogPost from "./partials/BlogPost";

async function getCategories() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/categories?populate=*", {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function Page() {
  const categories = await getCategories();

  return (
    <>
      <UpperSection />
      <section className="w-full ">
        <BlogTabs categories={categories} /> {/*  <== Status: Abu abu antara client/server */ }
        <BlogPost /> {/*  <== Status: Abu abu antara client/server */ }
      </section>
    </>
  );
}
