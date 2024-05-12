import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id,title, thumbnail_url, details } = news;
  return (
    <div className="card  bg-base-100">
      <figure className="">
        <img src={thumbnail_url} className="rounded-xl w-full" />
      </figure>
      <div className="card-body px-0 items-center text-justify">
        <h2 className="card-title">{title}</h2>
        
          {details.length>300 ? <p>{details.slice(0,300)} <Link 
          className="text-red-600 mx-4"
          to={`/news/${news._id}`}
          >Read more...</Link></p>: <p>{details}</p>}
          
        {/* <div className="card-actions">
          <button className="btn btn-secondary mt-5">
            <Link to={`/news/${news._id}`}>Show More</Link>
          </button> */}
        </div>
      </div>
    // </div>
  );
};

export default NewsCard;