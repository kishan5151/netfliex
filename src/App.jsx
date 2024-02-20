import React, { useState } from "react";
import Card from "./Card"
import Netfliex from "./Netfliex";
import Footer from "./Footer";
import Sdata from "./Sdata";
import Chack from "./Chack";
import SearchEleList from "./SearchEleList";

const App=()=>{
  const[series,setSeries]=useState("All");
  const x="amazon"
  const selected=(event)=>{
    setSeries(event.target.value);
    console.log(series);
  }
  // const setval=(event)=>{
    // // console.log(event.target.value);
    // setSeries(event.target.value);
  // }
  return(
    <>
      <Netfliex/>
      <div className="search">

        {/* simple method but heard code */}

        {/* <div className="parti"> */}
          {/* <label>Amazon</label> */}
          {/* <input type="radio" */}
            {/* // value="Amazon Prime" */}
            {/* // name="series" */}
            {/* // onChange={selected} */}
          {/* // /> */}
        {/* </div> */}
        
       {/*} <div className="parti">
          <label>Netfliex</label>
          <input type="radio"
            value="Netflix Original Series"
            name="series"
            onChange={selected}
          />
        </div>
        <div className="parti">
          <label>Koriam Drama</label>
          <input type="radio"
            value="Korian Drama"
            name="series"
            onChange={selected}
          />
        </div>
        <div className="parti">
          <label>Anime</label>
          <input type="radio"
            value="Anime"
            name="series"
            onChange={selected}
          />
        </div>
        <div className="parti">
          <label>All</label>
          <input type="radio"
            value="All"
            name="series"
            onChange={selected}
          />
        </div>*/}

        {/* best optimal method */}
        {
          SearchEleList.map((val,index)=>{
            return(
              <Chack key={index} media={val.media} value={val.value} selected={selected}/>
            )
          })
        }
      </div>

      <div className="card_con" id="scroll">
        {/* <Card src={Sdata[0].src} }
          // title={Sdata[0].title}
          // sname={Sdata[0].sname}
          // link={Sdata[0].link}
        // />
        {/* <Card src={Sdata[1].src} 
          // title={Sdata[1].title}
          // sname={Sdata[1].sname}
          // link={Sdata[1].link}
        // />
        {/* <Card src={Sdata[2].src} 
          // title={Sdata[2].title}
          // sname={Sdata[2].sname}
          // link={Sdata[2].link}
        // />
        {/* <Card src={Sdata[3].src} 
          // title={Sdata[3].title}
          // sname={Sdata[3].sname}
          // link={Sdata[3].link}
        // />
        {/* <Card src={Sdata[4].src} 
          // title={Sdata[4].title}
          // sname={Sdata[4].sname}
          // link={Sdata[4].link}
        // />
        {/* <Card src={Sdata[5].src} 
          // title={Sdata[5].title}
          // sname={Sdata[5].sname}
          // link={Sdata[5].link}
        // />
         <Card src={Sdata[6].src} 
          // title={Sdata[6].title}
          // sname={Sdata[6].sname}
          // link={Sdata[6].link}
        // />*/}

        {Sdata.map((val)=>{
          if(series === val.title){
          return(
            <Card key={val.id}
              src={val.src}
              title={val.title}
              sname={val.sname}
              link={val.link}
              />
          )}
          else if(series ==="All") {
            return(
              <Card key={val.id}
                src={val.src}
                title={val.title}
                sname={val.sname}
                link={val.link}
                />
            )
          }
        })}
      </div>
      <Footer/>
    </>
  )
}
export default App;