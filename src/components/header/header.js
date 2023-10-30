import styles from "./header.module.css"
import Logo from './img/Logo.png'

function header(props) {
    return (
      <header class="header row">
       <div class="col-3">
        <img src={Logo}/>
           {/* <div class="block">Логотип</div> */}
       </div>
       <div class="col-9">
       <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <button class="navbar-toggle" className={styles.purple} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" >
        <li class="nav-item" className={styles.headerTextNav}>
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={props.scrollMain}>Главная</a>
        </li>
        <li class="nav-item" className={styles.headerTextNav}>
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={props.scrollMainTwo}>Почему именно мы?</a>
        </li>
        <li class="nav-item" className={styles.headerTextNav}>
          <a class="nav-link active text-white" aria-current="page" href="#"  onClick={props.scrollFooter}>Контакты</a>
        </li>

        <li class="nav-item" className={styles.headerTextNav}>
          <a class="nav-link active text-white" aria-current="page" href="#"  onClick={props.scrollPricing}>Тарифы</a>
        </li>

      <li class="nav-item" className={styles.headerTextNavButton}>
          <a class="nav-link active text-white" aria-current="page" href="#" onClick={props.scrollFooterTwo}>Заказать
          </a>
        </li>

      </ul>
    </div>
  </div>
</nav>
           {/* <div class="block">Навигация</div> */}
       </div>
      </header>
    );
  }
  
  export default header;
  