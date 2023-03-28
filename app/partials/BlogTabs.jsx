"use client"
import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogTabs({ categories }) {
  return (
    <div className="tabs justify-center">
      <li className="tab tab-bordered tab-active">View All</li>
      {categories.data?.map((data, index) => {
        return (
          <li key={index} className="tab tab-bordered">
            <Link legacyBehavior className="btn btn-ghost btn-md rounded-btn" href={`/category/${data.attributes.slug}`}>
              <a>{data.attributes.name}</a>
            </Link>
          </li>
        );
      })}
    </div>
  );
}
