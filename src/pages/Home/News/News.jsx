import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const {id} = useParams();
  const singleNews = news.find(singleNews => singleNews._id == id)
  const {title,details,thumbnail_url} = singleNews
  //console.log(id, news)
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <img src={thumbnail_url} className="w-full h-[550px] mb-5" />
          <h2 className="text-justify text-2xl font-bold mb-5">{title}</h2>
          <p className="text-justify text-lg font-medium">{details}</p>
          <Link  to='/'>
          <button className="btn btn-primary mt-5">Back Home</button>
          </Link>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>

    </div>
  );
};

export default News;