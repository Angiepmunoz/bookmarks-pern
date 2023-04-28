import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API  = process.env.REACT_APP_API_URL
function BookmarkDetails() {
  const [bookmark, setBookmark] = useState([]);

  const {id} = useParams()

  useEffect(()=>{
    axios.get(`${API}/bookmarks/${id}`).then((response)=>{
      console.log(response.data)
      setBookmark(response.data[0])
    }).catch((e)=>{
      console.warn("catch:", e)
    })
  },[id])

  return <article>
    <h3>{bookmark.is_favorite ? <span>⭐️</span> : null} {bookmark.name}</h3>
    <h5>
      <span>
        <a href={bookmark.url}>{bookmark.name}</a>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {bookmark.url}
    </h5>
    <h6>{bookmark.category}</h6>
    <div className="showNavigation">
      <div>
        <Link to={`/bookmarks`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/bookmarks/id/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  </article>
}

export default BookmarkDetails;
