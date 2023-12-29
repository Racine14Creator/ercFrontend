import "./global.css"
import styles from "./Admin.module.css"

import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <div className={styles.wrapper}>
            <nav>
                <Link>ERC</Link>
                <ul>
                    <li><Link>Dashboard</Link></li>
                    <li><Link>Hero</Link></li>
                    <li><Link>Strategies</Link></li>
                </ul>
            </nav>
            <section className="w-[500px] m-auto text-white flex flex-col">
                <form action="" className="" autoComplete="off">
                    <div className="group">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name of the post" name="name" id="name" className="w-full p-3 border border-blue-500 rounded-md input" />
                    </div>
                    <div className="group">
                        <label htmlFor="title">Name</label>
                        <input type="text" placeholder="title of the post" name="title" id="title" className="w-full p-3 border border-blue-500 rounded-md input" />
                    </div>
                    <div className="group">
                        <label htmlFor="paragraph">Paragraph</label>
                        <input type="text" placeholder="paragraph" name="paragraph" id="paragraph" className="w-full p-3 border border-blue-500 rounded-md input" />
                    </div>
                    <div className="group">
                        <label htmlFor="image">File</label>
                        <input type="file" name="image" id="image" className="w-full p-3 border border-blue-500 rounded-md input" />
                    </div>
                    <div className="group">
                        <button className="">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Admin