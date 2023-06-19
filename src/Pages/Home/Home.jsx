import { Header } from "./Header.jsx"
import { MainImage } from "./MainImage.jsx"
import { NavBar } from "./NavBar.jsx"

export const Home = () => {
    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <NavBar />
            </div>
            {/* <Header /> */}
            <MainImage />
            <MainImage />
        </>
    )
}