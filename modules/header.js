export function addHeaderToApp(app) {
    const headerHTML = `
      <header style="background-color: gold; padding: 15px; text-align: center;">
        <h1  style="color: white; font-size: 54px">Header</h1>
        <p style="color: white; font-size: 30px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti magnam officia! Doloribus eveniet
        ducimus, quos debitis vel omnis quam iste, quaerat facere accusamus similique laboriosam et fugit rerum ad! </p>
      </header>
    `
    app.innerHTML += headerHTML
  }
  