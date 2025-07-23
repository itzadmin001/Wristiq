import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainContext from "./MainContext.jsx"
import store from './Store.jsx'
import { Provider } from 'react-redux'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MainContext>
      <App />
    </MainContext>
  </Provider>
)
