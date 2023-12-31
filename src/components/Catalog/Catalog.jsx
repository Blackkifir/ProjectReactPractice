import React, { useEffect } from 'react';
import styles from './Catalog.module.scss';

const Catalog = ({ id, role, authorName, email, createAt, avatar}) => {
            return (
              <div className={styles.parent}>
                <div className={styles.catalog}> 
                  <div className='block_reactImg'>
                    <img className={styles.imgAvatar} src={avatar}/>
                  </div> 
                  <div className={styles.blockDescription}>
                      <h3>{role}</h3>
                      <span>{authorName}</span>
                      <span>{email}</span>
                      <span>{createAt}</span>              
                  </div>          
                  <div className={styles.bigBlockStars}>
                    <div className={styles.blockStars}>
                      <div className={styles.lowBlockStars}>
                      <svg 
                       width="29"
                       height="30"
                       viewBox="0 0 29 30"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                      <path 
                      d="M27.4062 10.228L19.5157 9.40576C19.0182 9.35593 18.5884 9.0071 18.3852 8.48387L15.559 0.934347C15.1068 -0.311449 13.5013 -0.311449 13.0491 0.934347L10.2455 8.48387C10.0646 9.0071 9.61243 9.35593 9.11502 9.40576L1.22426 10.228C0.0485649 10.3526 -0.426237 11.9721 0.455538 12.8442L6.40186 18.5997C6.78623 18.9735 6.94449 19.5216 6.83145 20.0698L5.04529 28.1423C4.77397 29.4132 6.0175 30.4595 7.05754 29.787L13.6369 25.5261C14.0665 25.252 14.5865 25.252 15.0161 25.5261L21.5957 29.787C22.6358 30.4595 23.8793 29.4382 23.6078 28.1423L21.8442 20.0698C21.7312 19.5216 21.8894 18.9735 22.2738 18.5997L28.2201 12.8442C29.0793 11.9721 28.5819 10.3526 27.4062 10.228Z"
                      fill="#FFC22B"
                      />
                      </svg> 
                      <span>
                        <b>{id}</b>
                        stars
                      </span>
                      </div>
                      <div className={styles.lowBlockStars}>
                      <svg 
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9603 13.8164C15.5071 13.8164 18.3839 11.0528 18.3839 7.64567C18.3839 4.23854 15.5071 1.49384 11.9603 1.49384C8.41352 1.49384 5.53665 4.25744 5.53665 7.64567C5.53665 11.0339 8.41347 13.8164 11.9603 13.8164ZM11.9603 3.10278C14.5613 3.10278 16.6894 5.14706 16.6894 7.64567C16.6894 10.1443 14.5613 12.1885 11.9603 12.1885C9.35932 12.1885 7.23122 10.1442 7.23122 7.64563C7.23122 5.14702 9.35928 3.10278 11.9603 3.10278Z" fill="#6E798C"/>
                      <path d="M0.847282 23.4511H23.1527C23.6256 23.4511 24 23.0914 24 22.6371C24 18.3782 20.3941 14.8953 15.9409 14.8953H8.05912C3.62562 14.8953 0 18.3592 0 22.6371C0 23.0914 0.374378 23.4511 0.847282 23.4511ZM8.05912 16.5231H15.9409C19.1724 16.5231 21.8325 18.8325 22.2463 21.8232H1.75369C2.16747 18.8514 4.8276 16.5231 8.05912 16.5231Z" fill="#6E798C"/>
                      </svg>
                      <span>                     
                        <b>{id}</b>
                        watchers
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            );
        };


export default Catalog;


