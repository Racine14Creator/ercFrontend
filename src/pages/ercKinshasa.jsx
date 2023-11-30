import { Link } from "react-router-dom"
import HeroForm from "../components/Admin/Form"

const ErcKinshasa = () => {
    return (
        <>
            <div className=" h-screen w-full flex justify-center items-center">
                <div className="sidebar h-screen w-[20%] p-5 border border-t-0 border-l-0 border-b-0 border-r-1">
                    <h3>Menu</h3>
                    <ul className="">
                        <li>
                            <Link to="#">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="#">Hero</Link>
                        </li>
                        <li>
                            <Link to="#">Settings</Link>
                        </li>
                    </ul>
                </div>
                <div className="main bg-black text-white h-screen w-[70%] p-5">
                    <HeroForm />
                </div>
            </div>
        </>
    )
}

export default ErcKinshasa