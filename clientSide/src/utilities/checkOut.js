export function checkOut() {
    const checkoutItems = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 2 }
  ];
    // integrate client and server, 
    // here we make requset to our server to get us a url to checkout page
    // Stripe-we give it info(product ids, cost, number)- to do that we send it to
    //   our server which will give us a unique url we use to redirect user to check out
    // next set up url on server.js
    // fetch server url
    fetch("http://localhost:4000/create-checkout-session", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          items: checkoutItems  
      })
    // all this code will get res back from server which is a url, and send user to url   
    }).then(res => {
      console.log(res)
      // if res is good return it in json
      if (res.ok) return res.json()
      console.log("res ok",res.json)
      // if res bad
      return res.json().then(json => Promise.reject(json))
    // json res return a url
    }).then(({ url }) => {
      window.location = url
    }).catch(e => {
        console.error(e.error)
    })
  }