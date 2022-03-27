import { style } from "@mui/system";
import React from "react";
import { MdDeleteForever, MdOutlineAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./MisFavoritos.module.scss";

export const MisFavoritos = ({ Favorites }) => {

    let Fav=Favorites.map(el=>(el.Product))
    const navigate =useNavigate()
    console.log(Fav);
    return (
        <>
        <div className={styles.contFav}>
        {
            Fav.map(el=>(
                
                <div className={styles.contCard} >
                    <div className={styles.delete}><MdDeleteForever className={styles.svg}/></div>
                        <div onClick={()=>navigate(`/productDetail/${el.id}`)} className={styles.cardInfo}>
                        <img src={el.image} alt="img" Width='150px' height='200px' />
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                        <div className={styles.cardInfo1}>
                            <span>Precio: <MdOutlineAttachMoney/> {el.price}. </span>
                            <span>Descuento:{el.discount * 100} %.</span>
                            <span>Stock: {el.stock} uds.</span>
                        </div>
                        </div>
                    </div>
                
            ))
        }
        </div>
        </>
    )
};
