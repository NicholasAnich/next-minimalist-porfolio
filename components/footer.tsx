import Link from "next/link";
import Image from "next/image";
import footer from "./Footer.module.css";
import { Public_Sans } from "@next/font/google";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function Footer() {
    return (
        <footer className={`${footer.container} ${publicSans.className}`}>
            <div className={footer.body}>
                <Image className={footer.logo} src="/images/logo-light.svg" alt="Light Logo" width={60} height={32}></Image>
                <ul className={footer.list}>
                    <li>
                        <Link href="/" className={footer.link}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className={footer.link}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={footer.link}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
                <ul className={footer.social}>
                    <li>
                        <Link href="#">
                            <Image src="/images/icons/github-light.svg" alt="github logo and link" width={25} height={24}></Image>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/icons/twitter-light.svg" alt="twitter logo and link" width={24} height={20}></Image>
                            {/* <Image src="/images/icons/twitter-light.svg" alt="twitter logo and link" width={24} height={19.5}></Image> */}
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src="/images/icons/linkedin-light.svg" alt="Linkedin logo and link" width={24} height={24}></Image>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
