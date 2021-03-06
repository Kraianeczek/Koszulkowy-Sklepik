import styles from './Product.module.scss';
import { PropTypes } from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
// import OptionSize from '../ProductForm/OptionSize/OptionSize';
// import OptionColor from '../OptionColor/OptionColor';
// import Button from '../Button/Button';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {
  console.log(props);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const showDetails = () => {
  console.log('Summary');
  console.log('=======');
  console.log('Name: ', props.title);
  console.log('Price: ', getPrice());
  console.log('Size: ', currentSize);
  console.log('Color: ', currentColor);
  }
  
  const basePrice = props.basePrice;
  const getPrice = useMemo(() => {
    return() => {
    const filtered = props.sizes.filter(s => s.name === currentSize);
    if (filtered.length !== 1) {
      console.log('Błąd');
    } else {
      const additionalPrice = filtered[0].additionalPrice;
      const price = basePrice + additionalPrice;
      // console.log('log',additionalPrice);
      return price;
    }
  }
}, [basePrice, currentSize, props.sizes]);

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>x {getPrice()} $</span>
        </header>
        <ProductForm 
          sizes={props.sizes} 
          currentSize={currentSize} 
          setCurrentSize={setCurrentSize} 
          colors={props.colors} 
          currentColor={currentColor} 
          setCurrentColor={setCurrentColor} 
          showDetails={showDetails }>           
        </ProductForm>
      </div>
    </article>
  )
};

Product.propTypes = { colors: PropTypes.array.isRequired, sizes: PropTypes.array.isRequired, title: PropTypes.string.isRequired, 
                      basePrice: PropTypes.number.isRequired, name: PropTypes.string.isRequired }

export default Product;