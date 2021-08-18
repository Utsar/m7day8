import BackgroundImage from "../Assets/backgoundImage.jpg"
import "../Styles/MainBackgroundImage.css"

export const MainPageBackground = () => {
    return (
        <>
            <img src={BackgroundImage} alt="backgroundImage" height="100%" width="100%" className="mainBackgroundImage" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", position:"absolute" }}/>
            
        </>
    )
}
