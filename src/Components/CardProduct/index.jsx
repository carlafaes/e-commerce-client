import React from "react";
import AddToBag from "../AddToBag";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CardActionArea } from "@mui/material";
import "./CardProduct.modules.css";
import { useSelector } from "react-redux";
import { notifyError, notifySuccess } from "../../Utils/notifications";
import favoritesService from "../../Services/favorites";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardProduct = ({
  image,
  title,
  id,
  price,
  stock,
  discount,
  score,
  description,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentUser = useSelector((state) => state.userReducer.currentUser);

  const addFavorite = () => {
    if (!currentUser) {
      return notifyError("Debe iniciar sesión para agregar a favoritos");
    }
    favoritesService
      .setFavorite(id, currentUser.userId)
      .then((res) => {
        notifySuccess("Producto agregado a favoritos");
      })
      .catch((err) => {
        notifyError(err.message);
      });
  };

  return (
    <>
      <Card sx={{ maxWidth: 355 }}>
        <CardActionArea>
          <CardHeader
            className="txt_card"
            title={title}
            subheader={`AHORA: ${(price * ((discount - 1) * -1)).toFixed(
              2
            )}$ ANTES: ${price}$`}
          />
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body6" color="text.primary">
              {`STOCK: ${stock}`}
              <br></br> {`DESCUENTO: ${discount * 100}%`}
            </Typography>{" "}
            <Typography variant="body2" color="textSecondary" component="p">
              {score && <Rating name="read-only" value={score} readOnly />}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <AddToBag text={"Añadir al carrito"} id={id} />
            </IconButton>
            <button onClick={addFavorite} className="fav_icon">
              <FavoriteIcon className="fav_icon" />
            </button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className="title_info" paragraph>
              INFORMACION ADICIONAL
            </Typography>
            <Typography className="cardInfo" paragraph>
              {description}
            </Typography>
            <div>
              <Button variant="contained" color="primary">
                <Link to={`/productDetail/${id}`}>Ver más</Link>
              </Button>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default withStyles({
  title: {},
  price: {},
})(CardProduct);
