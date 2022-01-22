import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

const Product = props => {
  console.log(props);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>x {props.basePrice} $</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => <li key={size.id}><button type="button" className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
              {/* <li><button type="button" className={styles.active}>{props.sizes[0].name}</button></li>
              <li><button type="button">{props.sizes[1].name}</button></li>
              <li><button type="button">{props.sizes[2].name}</button></li>
              <li><button type="button">{props.sizes[3].name}</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map((color) => <li key={color.id}><button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {props: PropTypes.object}

export default Product;