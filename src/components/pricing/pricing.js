import styles from './pricing.module.css'
import cardFons from './img/Rectangle 60.png'

function Pricing(props) {
    return (
      <div>
   <section class="pricing row">
            <div class="col-12">
                <h1 className={styles.mainText} ref={props.pageScrollPricing}>Тарифы</h1>
            </div>
           </section>
           <section class="pricingCard row">
            <div class="col-3">
                {/* <img src={cardFons}/> */}
                {/* <div class="block">Карточка товара №1</div> */}
            </div>
            <div class="col-6">
            <img src={cardFons} className={styles.cardTwo} />
                {/* <div class="block">Карточка товара №2</div> */}
            </div>
            <div class="col-3">
            {/* <img src={cardFons} className={styles.cardThree}/> */}
            </div>
           </section>
      </div>
    );
  }
  
  export default Pricing;
  