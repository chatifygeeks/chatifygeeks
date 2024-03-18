import { headerDescription, pageTags, services } from "@/constants";
import { Hero, Navbar, Accordion } from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function DesignPage() {
    return (
        <div className={styles.heroContainer}>
            <Hero
                page="design"
                description={headerDescription.design}
                tags={pageTags.design}
            />
            <Navbar />
            <Accordion content={services.design} color="--ez-orange" />
        </div>
    )
}