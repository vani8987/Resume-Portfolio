import "./index.scss"

const Skils = () => {
    return ( 
        <div className="Skils" id="Skils">
            <div className="container">
                <h1>Навыки</h1>
                <h2>Технологии</h2>
                <div className="technologies">
                    <div className="Container__technologies">
                        <div className="skils TypeScript">
                            <p>TypeScript</p>
                        </div>
                        <p>85%</p>
                    </div>
                    <div className="Container__technologies">
                        <div className="skils JavaScript">
                            <p>JavaScript</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div className="Container__technologies">
                        <div className="skils SCSS">
                            <p>SCSS</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div className="Container__technologies">
                        <div className="skils Html">
                            <p>Html</p>
                        </div>
                        <p>95%</p>
                    </div>
                    <div className="Container__technologies">
                        <div className="skils React">
                            <p>React</p>
                        </div>
                        <p>90%</p>
                    </div>
                    <div className="Container__technologies">
                        <div className="skils Git">
                            <p>Git</p>
                        </div>
                        <p>85%</p>
                    </div>
                </div>
                <div className="soft_skils">
                    <h2>Гибкие навыки</h2>
                    <ul>
                        <li><p>легко нахожу общий язык с людьми</p></li>
                        <li><p>умею определять нужное время на выполнение задачи</p></li>
                        <li><p>умею понимать и разделять чувства других людей</p></li>
                        <li><p>быстро адаптируюсь в любой ситуации </p></li>
                    </ul>   
                </div>
            </div>
        </div>
    );
}
 
export default Skils;