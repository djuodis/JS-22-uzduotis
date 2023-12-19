import { addHeaderToApp } from './modules/header.js'
import { addCarsToApp } from './modules/car.js'

const appElement = document.body

addHeaderToApp(appElement)
addCarsToApp(appElement)