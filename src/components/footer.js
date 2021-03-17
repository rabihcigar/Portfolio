import styles from './footer.module.css';

import insta from '../assets/Insta.svg'
import wa from '../assets/WA.svg'
import github from '../assets/mark.png'
import twitter from '../assets/twitter.svg'


function Footer() {
  	return (
  		<div className={styles.container}>
  			<div className={styles.title}>Get in touch</div>
  			<div className={styles.socmed}>
					<div>
            <img src={insta} alt="Ista"/>
            <p className={styles.link}>Instagram : @rabih31415</p>
          </div>
          <div>
            <img src={github} alt="github"/>
            <p className={styles.link}>Github : RobyCigar</p>
          </div>
          <div>
            <img src={twitter} alt="github"/>
            <p className={styles.link} href="https://twitter.com/Robycigar">Twitter : @RobyCigar</p>
          </div>
				</div>
        <p className={styles.attr}>Created with 💖 in 🇮🇩</p>
  		</div>
  	
  	)
}

export default Footer;
