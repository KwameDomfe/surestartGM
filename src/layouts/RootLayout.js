import { Outlet } from "react-router-dom"
import MainHeader from "../components/organisms/MainHeader"
import MainFooter from "../components/organisms/MainFooter"

export default function RootLayout() {
  return (
    <div id=""
        className="flex flex-column
          w-100"
    >
        <aside className="flex item-center justify-center bg-primary-01"
        >
            <MainHeader />
        </aside>
        <main className=""
        >
            <Outlet />
        </main>
        <footer id="mainFooter"
            className="gc1s12"
        >
            <MainFooter />
        </footer>
    </div>
  )
}
  