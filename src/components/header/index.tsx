import Link from 'next/link';
import styles from './Header.module.css';

export function HeaderGlobal() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">MeuProjeto</Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">Início</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/servicos">Serviços</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}