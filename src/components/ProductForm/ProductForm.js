import OptionSize from "./OptionSize/OptionSize";
import OptionColor from "./OptionColor/OptionColor";
import Button from "./Button/Button";
import styles from './ProductForm.module.scss'
import PropTypes from 'prop-types'

const ProductForm = props => {
    return (
        <form>
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
            <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
            <Button className={styles.button} onClick={() => props.showDetails()}  >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductForm.propTypes = { sizes: PropTypes.array.isRequired, currentSize: PropTypes.string.isRequired, setCurrentSize: PropTypes.func.isRequired,
                        colors: PropTypes.array.isRequired, currentColor: PropTypes.string.isRequired, setCurrentColor: PropTypes.func.isRequired,
                        showDetails: PropTypes.func.isRequired
                    }

export default ProductForm;