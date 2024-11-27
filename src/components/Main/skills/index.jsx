import "./index.scss"

const Skils = () => {
    return ( 
        <div className="Skils" id="Skils">
            <div className="container">
                <h1>Навыки</h1>
                <div className="Skils__row">  
                    <ul>
                        <li><h2>TypeScript/JavaScript</h2></li>
                        <li><h2>React</h2></li>
                        <li><h2>Html</h2></li>
                        <li><h2>SCSS</h2></li>
                        <li><h2>Git</h2></li>
                    </ul>
                    <ul>
                        <li><h2>легко нахожу общий язык с людьми</h2></li>
                        <li><h2>умею определять нужное время на выполнение задачи</h2></li>
                        <li><h2> умею понимать и разделять чувства других людей</h2></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Skils;