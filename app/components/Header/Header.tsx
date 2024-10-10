"use client"
import Icon from '../Icon/Icon';
import styles from './Header.module.scss';

export default function Header() {
    return(
        <>
        <div className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.Items}>
                    <img width={"90px"} src="https://cdn.discordapp.com/icons/1215005102469816368/8a45ac831024aa0fad9222094abe9f4f.webp?size=240" alt="" />
                    <div className={styles.search}>
                        <input className={styles.searchInput} type="text" />
                    </div>
                    <div className={styles.account}>
                        <Icon  name={"account"}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}