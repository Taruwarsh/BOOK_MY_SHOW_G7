
import {Link} from "react-router-dom"

const MovieInfo = ({ movie }) => {

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex  flex-col gap-2 text-white">
          <h4>4k rating</h4>
          <h4>English, Hindi, German, Russian, Spanish</h4>
          <h4>
            {" "}
            {movie.runtime} min | {genres}
          </h4>
        </div>
      </div>

      <div className="flex items-center mt-4 gap-3 w-96">
      <Link to="/booking">
      <button
              className="bg-red-600 w-full p-3 text-white font-semibold rounded-lg"
            >
              Buy Tickets(Rs.399)
            </button>
      </Link>
      </div>
    </>
  );
};

export default MovieInfo;
