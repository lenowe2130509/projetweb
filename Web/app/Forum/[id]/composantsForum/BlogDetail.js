"use client";
import React from "react";
import UserContext from "./UserContext";
export default function BlogDetail() {
    const id = React.useContext(UserContext);
    const [blogDetails, setBlogDetails] = React.useState([]);
   
    React.useEffect(() => {
        fetch(`http://localhost:3001/api/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json())
          .then(data => setBlogDetails(data))
          .catch(error => console.error(error));
    }, [id]);

    return (
        <>
        <div className="blog-details d-flex flex-column align-items-center">
            <img src="../images/Etu.png" alt="Bootstrap" className="img-fluid" style={{ maxWidth: "100%" , width: "500px"}}/>
            <div className="p-3">
                <h5 className="tw-bold">{blogDetails.titre}</h5>
            </div>
            <div className="d-flex flex-column p-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum sit, qui corporis repudiandae laborum ratione labore culpa similique saepe harum temporibus recusandae vel nostrum veniam tempore voluptate? Odio, cumque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum sit, qui corporis repudiandae laborum ratione labore culpa similique saepe harum temporibus recusandae vel nostrum veniam tempore voluptate? Odio, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla ea facere similique enim incidunt ex ullam voluptatum sequi itaque illo rerum fugiat! Dicta laudantium illo vero quisquam distinctio qui.</p>
            </div>
            <img src="../images/Info.jpg" alt="Bootstrap"  className="img-fluid" style={{ maxWidth: "100%" , width: "500px"}}/>
            <div className="d-flex flex-column p-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum sit, qui corporis repudiandae laborum ratione labore culpa similique saepe harum temporibus recusandae vel nostrum veniam tempore voluptate? Odio, cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eum vero optio voluptates sapiente quidem, a nostrum laborum. Natus quam quas dicta possimus dolore. Quos ullam et odit eum quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum sit, qui corporis repudiandae laborum ratione labore culpa similique saepe harum temporibus recusandae vel nostrum veniam tempore voluptate? Odio, cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla ea facere similique enim incidunt ex ullam voluptatum sequi itaque illo rerum fugiat! Dicta laudantium illo vero quisquam distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, placeat amet atque culpa commodi voluptas soluta eos, perspiciatis nemo ratione, deserunt quos tenetur eius quaerat ipsum voluptatibus assumenda. Nobis, magni?</p>
            </div>
        </div> 
        </>     
    );
}