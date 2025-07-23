import { createContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const MainContext = createContext()

function mainContext(props) {
    const [WistList, SetWistList] = useState([])
    const [OpenCart, SetOpenCart] = useState(false)



    const notify = (msg, flag) => toast(msg, { type: flag });





    return (
        <MainContext.Provider value={{ WistList, SetWistList, OpenCart, notify, SetOpenCart }}>
            <ToastContainer />
            {props.children}
        </MainContext.Provider>
    )
}

export default (mainContext)

export { MainContext }
