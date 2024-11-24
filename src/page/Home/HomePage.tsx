import React from "react";
import LeftMenuComponet from "../../component/molecules/LeftMenuComponet";
import './HomePage.css';
import SearchInput from "../../component/atoms/SearchInput";
import FollowSuggestionList from "../../component/molecules/FollowSuggestionList";
import TrendLİst from "../../component/molecules/TrendLİst";
import NewPost from "../../component/molecules/SharePost";
import PostList from "../../component/organisms/PostList";
import SharePost from "../../component/molecules/SharePost";

function HomePage() {
  document.body.style.backgroundColor = "#02131e";
  return (
    <div className="container">
      <div className="row" style={{minHeight: "200px" }}>

        <div className="col-3">
            <LeftMenuComponet />
        </div>


        <div className="col-5 border-start border-end">

           <div className="row">
               <SharePost />
           </div>

           <div className="row">
               <PostList />
           </div>

        </div>


        <div className="col-4">

          <div className="row mt-3">
              <SearchInput />
          </div>


          <div className="row  x-right-section">
              <FollowSuggestionList />
          </div>


          <div className="row x-right-section">
                <TrendLİst />
          </div>

        </div>

      </div>
    </div>
  );
}

export default HomePage;
