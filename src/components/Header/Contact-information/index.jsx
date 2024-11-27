import { CiMail, CiPhone } from "react-icons/ci";
import { LiaTelegramPlane } from "react-icons/lia";
import { BiTime } from "react-icons/bi";
import "./index.scss"

const ContactInformaton = () => {
    return (
         <div className="ContactInformaton" id="AboutMe">
            <div className="container">
                <h1>Контактная информация</h1>
                <div className="Contact-information_row" id="Contact-information">
                    <div className="Contact-information_block">
                        <CiMail className="mail"/>
                        <h2>gorin-ivan8987@mail.ru</h2>
                    </div>
                    <div className="Contact-information_block">
                        <CiPhone className="phone"/>
                        <h2>+7 933 027 78 70</h2>
                    </div>
                    <div className="Contact-information_block">
                        <LiaTelegramPlane className="telegramm"/>
                        <a href="https://t.me/ProgIvan0">Телеграмм</a>
                    </div>
                    <div className="Contact-information_block">
                        <BiTime className="time"/>
                        <h2>+4 по МСК</h2>
                    </div>
                </div>
            </div>
         </div>  
    );
}
 
export default ContactInformaton;