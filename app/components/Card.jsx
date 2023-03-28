export default function Card({ image, image_alt, title, headline, tags }) {
  return (
    <div className="card my-12   bg-base-100 hover:shadow-lg transition-shadow duration-300">
      <figure className="aspect-video">
        <img  src={image} alt={image_alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{headline}</p>
        <div className="card-actions justify-end items-center mt-4">
          <div className="badge badge-outline text-md font-semibold p-4">{tags}</div>
          <button className="btn btn-primary btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
}
