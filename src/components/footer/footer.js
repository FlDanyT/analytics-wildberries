import styles from "./footer.module.css";

import contactsImgOne from "./img/Group 26.png";
import contactsImgTwo from "./img/Group 27.png";
import contactsImgThree from "./img/Group 28.png";
import contactsImgFour from "./img/Group 29.png";
import contactsImgFive from "./img/Group 30.png";


function Footer(props) {
  return (
    <footer >
      
      <footer class="footer row">
        <div class="col-12" className={styles.giveContactsFons}>
          <p className={styles.giveContactsPoragraf} ref={props.pageScrollFooterTwo}>Оставь заявку</p>
          <form>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ваше имя" className={styles.inputForm}/>
    <p></p>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ник в телеграм" className={styles.inputForm}/>
</form>
      
          <button className={styles.buttonSend}>Отправить</button>
        </div>
      </footer>
      <footer class="footerContactText row">
        <div class="col-12">
            <h1 className={styles.contactsMainText} ref={props.pageScrollFooter}>Контакты</h1>
        </div>
      </footer>
      <footer class="footerContactText row justify-content-center">
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
