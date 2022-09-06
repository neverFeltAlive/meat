import React, {FC} from 'react';
import styles from "../styles/Brand.module.sass";

interface BrandProps {
    name: string,
    Logo: JSX.Element
}

const Brand: FC<BrandProps> = ({name, Logo}) => {
    return (
        <div className={styles.brand}>
            {Logo}
            <h3>{name}</h3>
        </div>
    );
};

export default Brand;