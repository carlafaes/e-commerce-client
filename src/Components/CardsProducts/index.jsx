import CardProduct from '../CardProduct';
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const CardsProducts = ({ products, classes }) => {
	if (products.length === 0) {
		return <h1>No se encontraron productos...</h1>;
	}
	return (
		<Container className={classes.container} sx={{ py: 8 }}>
			<Grid container spacing={1}>
				{products.map((product, index) => {
					return (
						<Grid key={index} item xs={12} sm={6} md={3}>
							<CardProduct {...product} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};
export default withStyles({
	container: {},
})(CardsProducts);
