import React from 'react'
import pic1 from "../assests/images/1.jpeg"

export function About() {
  return (
    <div>
      <h1>About</h1>
      <hr></hr>
      <img
               style={{ objectFit: "cover"}}
              className="d-block w-100"
              src={pic1}
              alt="Second slide"
            />
      <br></br>
      <div>
          <h3 className="project-title fw-bold">Our Story</h3>
          <p className="lead">Kevin was a senior in high school when Kristen was a freshman. They never exchanged words, but had mutual acquaintances and knew of each other. 
            14 years later, Kristen decided to go back to her roots and she moved back to her hometown. 
            The two reconnected through social media in February 2021 and Kevin proposed to Kristen in the Bahamas on the beach on March 21, 2022 ❤️

            We are so thrilled to have found each other again and to be starting this exciting chapter in our lives. We can’t wait to celebrate with you!
            -Kevin & Kristen</p>
        </div>
    </div>
  )
}
