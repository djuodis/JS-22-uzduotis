export function addCarsToApp(app) {
    const cars = ["BMW", "VW", "AUDI", "MB"]
  
    const carsListHTML = `
      <ul>
        ${cars.map(car => `<li style="font-size: 24px">${car}</li>`).join('')}
      </ul>
    `
  
    app.innerHTML += carsListHTML
  }