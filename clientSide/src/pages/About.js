import React from 'react'
import pic1 from "../assests/images/1.jpeg"

export function About() {
  return (
    <div>
      <h1>About</h1>
      <hr></hr>
      <br></br>
      <div className="d-flex flex-column justify-content-between align-items-center mb-5">
        <img
          style={{ objectFit: "cover"}}
          className="d-block w-75"
          src={pic1}
          alt="Second slide"
        />
      </div>
      <br></br>
      <div>
          {/* <h3 className="project-title fw-bold">How to </h3> */}
          <p className="wedding lead">Thank you so much for visiting our registry website and taking part in our special day. ❤️ To add a gift, simply click the add button on the item in the registry tab and add the amount of items you wish. Then the shopping cart will appear in the top right corner where you can click for check. It will ask for your credit card through Stripe and will donate your amount to our wedding fund.
          </p><p className="wedding lead">
            We are so excited to share this moment with you, our closest friends and family, we can’t wait to celebrate with you!
          </p><p className="wedding lead">-Kevin & Kristen</p>
        </div>
    </div>
  )
}
