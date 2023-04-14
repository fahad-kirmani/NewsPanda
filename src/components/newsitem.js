import React from 'react'

const newsitem=(props)=> {
    let {title, desc,imgurl,unqurl,date, author}=props
    return (
      <div><div className="card">
      <img src={imgurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text "><small className="text-body-secondary dang">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={unqurl} rel="noreferrer" target="_blank" ><button className="button">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">Read More</span>
    </span>
</button></a>
      </div>
    </div></div>
    )
}

export default newsitem