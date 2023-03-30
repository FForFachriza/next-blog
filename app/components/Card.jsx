import Link from "next/link";

export default function Card({ image, image_alt, title, headline, tags, link }) {
  return (
    <div className="card bg-base-100 hover:shadow-lg transition-shadow duration-300">
      <figure className="aspect-video">
        <img className="rounded-tl-3xl rounded-tr-3xl" src={image} alt={image_alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{headline}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="badge badge-outline text-md font-semibold p-4 opacity-75">{tags}</div>
          <Link href={link}>
            <button className="btn btn-primary btn-sm">Read More </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
