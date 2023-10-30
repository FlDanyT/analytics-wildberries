import styles from "./footer.module.css";

import contactsImgOne from "./img/Group 26.png";
import contactsImgTwo from "./img/Group 27.png";
import contactsImgThree from "./img/Group 28.png";
import contactsImgFour from "./img/Group 29.png";
import contactsImgFive from "./img/Group 30.png";

import React, {useState} from "react";
import axios from 'axios';



function Footer(props) {

  let token = '6900152276:AAGS9DKTQsm4rZyI8Lag8_Duwww92Z3XV9c'
  let chat_id = '1283027891'
  const [inputValue, setInputValue] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');


const handleButtonClick = () => {
  console.log(inputValue);

  setInputValue('');
  setInputValueTwo('');

}
const handleInputChange = (event) => {
  setInputValue(event.target.value);
}

const handleButtonClickTwo = () => {
  // Обработка действий после нажатия на кнопку
  console.log(inputValueTwo); 

  axios.get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Имя: ${inputValue}, telegram: ${inputValueTwo}`)


  setInputValueTwo('');
}
const handleInputChangeTwo = (event) => {
  setInputValueTwo(event.target.value);
}








  return (
    <footer >
      
      <footer class="footer row">
        <div class="col-12" className={styles.giveContactsFons}>
          <p className={styles.giveContactsPoragraf} ref={props.pageScrollFooterTwo}>Оставь заявку</p>
          <form>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ваше имя" className={styles.inputForm} onChange={handleInputChange} />
    <p></p>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ник в телеграм" className={styles.inputForm} onChange={handleInputChangeTwo}/>
</form>
      
          <button className={styles.buttonSend} ref={props.pageScrollFooter} onClick={
                    () => {
                      handleButtonClick();
                      handleButtonClickTwo()
                    }}>Отправить</button>
        </div>
      </footer>
      <footer class="footerContactText row">
        <div class="col-12">
            <h1 className={styles.contactsMainText}>Контакты</h1>
        </div>
      </footer>
      <footer class="footerContactText row justify-content-center" >
        <div class="col-2">
          <img src={contactsImgOne} className={styles.contactsImg} />
        </div>
        <div class="col-2">
          <img src={contactsImgTwo} className={styles.contactsImg} />
        </div>
        <div class="col-2">
          <img src={contactsImgThree} className={styles.contactsImg} />
        </div>
        <div class="col-2">
          <img src={contactsImgFour} className={styles.contactsImg} />
        </div>
        <div class="col-2">
          <img src={contactsImgFive} className={styles.contactsImg} />
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
