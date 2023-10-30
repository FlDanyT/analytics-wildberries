import styles from "./main.module.css";

import Group from "./img/Group.png";
import Line from "./img/Rectangle 3.png";

function Main(props) {
  return (
    <div>
      <section class="promo row">
        <div class="col-lg-6">
          {/* <div class="block">Текст</div> */}
          <h1 className={styles.mainTextOne}>
            Оцифровка бизнеса на
            <h1 className={styles.mainTextTwo}>WILDBERRIES</h1>
          </h1>
          <br/>
          <br/>
          <iframe className={styles.youtubeVideo} src="https://www.youtube.com/embed/xNRJwmlRBNU" frameborder="0" allowfullscreen></iframe>

        </div>
        <div class="col-6">
          <img
            src={Group}
            className={styles.fonsGroup}
            ref={props.pageScrollMain}
          />

          {/* <div class="block">Фото</div> */}
        </div>
        <img src={Line}  className={styles.Line}/>
      </section>
      <section class="cardOne row">
        <div class="col-lg-7">
          <h1 className={styles.mainPromoText} ref={props.pageScrollMainTwo}>
            Причины сотрудничать <br />с нами
          </h1>
          <p className={styles.poragrafPromoText}>
            Пока конкуренты говорят о том, что они лучшие - мы это доказываем{" "}
            делом. 
            <br/>
            Наша команда состоит из высококвалифицированных специалистов, готовых
            <br/>
             предложить индивидуальные решения и оказывать качественную поддержку 
             <br/>
             на всех этапах сотрудничества. Вместе с нами вы получите надежного
             <br/>
              партнера, который гарантирует результаты и работает на достижение 
              <br/>
              ваших целей.
          </p>
          {/* <div class="block">Текст</div> */}
          <div >
          </div>
        </div>
        <div class="col-5">
          <div className={styles.CardOne}>
          <h1 className={styles.textCardOneP}>Безопасность</h1>
          <p className={styles.textCardOneH}>Все данные конфиденциальные
          <br/>
           и хранятся только у вас</p>
          </div>
        </div>
      </section>
      <section class="cardTwo row">
        <div class="col-4">
          <div className={styles.CardTwo}>
          <h1 className={styles.textCardTwoP}>Поддержка</h1>
          <p className={styles.textCardTwoH}>Наша поддержка ответит вам 
          <br/>
          на любые вопросы</p>
          </div>
        </div>
        <div class="col-4">
        <div className={styles.CardThree}>
        <h1 className={styles.textCardThreeP}>Надежность</h1>
          <p className={styles.textCardThreeH}>Все данные выгружаются
          <br/>
           через официальный api 
           <br/>
           маркетплейса</p>
</div>
        </div>
        <div class="col-4">
        <div className={styles.CardFour}>
        <h1 className={styles.textCardFourP}>Специалисты</h1>
          <p className={styles.textCardFourH}>Всю работу выполняют
          <br/>
           работники с большим опытом</p>
</div>
        </div>
      </section>
    </div>
  );
}

export default Main;
