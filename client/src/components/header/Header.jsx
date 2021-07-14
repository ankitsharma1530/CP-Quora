import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSn">Your Guide</span>
                <span className="headerTitleLg">CP-Quora</span>
            </div>
            <img className="headerImg"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191105192037/What-Are-The-Best-Resources-For-Competitive-Programming-768x476.png" 
            alt="" />
        </div>
    )
}
