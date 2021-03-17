import Image from 'next/image'
import styles from '../styles/about.module.css'

// Friday - let's get background images working. Buky will try this before Friday
// https://tailwindcss.com/docs/background-image#customizing

function about() {
    return (
        <div>
            
         
         <div className={styles.banner}>
             
               <Image className={styles.proper}
                    src="/smile.jpg" 
                    layout='fill' 
                    objectFit='cover' 
                    objectPosition='center'
                />    
         </div>

         <div className={styles.text}>
             <span className={styles.one}>
                 Africa's
             </span>
             
             <h1>Blockchain Center for Developers</h1>
             <p className={styles.phrase}>empowering the African woman for greater exploits...</p>
             <div className={styles.location}>
                <a  className={styles.link}href="#">Learn more</a>

           </div>

             
         </div>

         

         
         
  
           


        </div>
       


    )
}

export default about

