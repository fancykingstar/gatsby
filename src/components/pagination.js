import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Pagination = (props) => {
  let current_page = props.current_page;
  const records_per_page = props.records_per_page;

  let objJson = [
      { adName: "AdName 1"},
      { adName: "AdName 2"},
      { adName: "AdName 3"},
      { adName: "AdName 4"},
      { adName: "AdName 5"},
      { adName: "AdName 6"},
      { adName: "AdName 7"},
      { adName: "AdName 8"},
      { adName: "AdName 9"},
      { adName: "AdName 10"}
  ];

  const prevPage = () => {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
  }

  const nextPage = () => {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
  }
    
  const changePage = (page) => {
    // console.log(page)
    // var btn_next = document.getElementById("btn_next");
    // var btn_prev = document.getElementById("btn_prev");
    // var listing_table = document.getElementById("listingTable");
    // var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    // listing_table.innerHTML = "";

    // for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    //     listing_table.innerHTML += objJson[i].adName + "<br>";
    // }
    // page_span.innerHTML = page;

    // if (page === 1) {
    //     btn_prev.style.visibility = "hidden";
    // } else {
    //     btn_prev.style.visibility = "visible";
    // }

    // if (page === numPages()) {
    //     btn_next.style.visibility = "hidden";
    // } else {
    //     btn_next.style.visibility = "visible";
    // }
  }
  const numPages = () => {
    return Math.ceil( props.objLength / records_per_page );
  }
  let pageArray = new Array(numPages())
  return (
    <div>
      <button onClick={prevPage}>Prev</button>
      <span>
          {
            pageArray.forEach((item, i) => {
              return <li>{'hi'}</li>
            })
          }
      </span>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagination
