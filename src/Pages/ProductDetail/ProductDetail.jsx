import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import AddToBag from '../../Components/AddToBag';
import { Navbar } from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/index';
import { setProductInfo } from '../../Redux/Actions/productsActions';
import style from './ProductDetail.module.scss'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { allReviews } from '../../Redux/Actions/reviewsActions';

export const ProductDetail = () => {
    let dispatch= useDispatch();
    const {productId}=useParams();
    let reviews=useSelector(state=>state.reviewReducer.allReviews)||[];
    let product=useSelector(state=>state.productsReducer.productInfo)||{};
    let [index,setIndex]=useState(0);
    let prom= ()=>{
        return product.Reviews?.reduce((acc, { score }) => acc += score, 0) / product.Reviews?.length || 0
    }
    let next=()=>{
        if(index+3<product.Reviews?.length)
        setIndex(index+3);
    }
    let prev=()=>{
        if(index-3>=0)
        setIndex(index-3);
    }
    useEffect(()=>{
        dispatch(setProductInfo(productId));
    },[dispatch,productId]);
    useEffect(()=>{
        product.Reviews&&dispatch(allReviews(product.Reviews));
    },[product])
    return (
        <div>
            <Navbar filter={false}/>
            <div className={style.container}>
                <div><img className={style.img12} src={product.image} alt="product image"/></div>
                <div className={style.container_dos}>
                    <h2 className={style.title_}>{product.title&&product.title[0].toUpperCase()+product.title?.slice(1)}</h2>
                    <div className={style.opinion}>
                    {<Rating  name='read-only' value={prom()} readOnly />} <span className={style.span_}>{product.Reviews?.length} opiniones</span>
                    </div>
                    <p className={style.descrip}>{product.description}</p>
                    <div className={style.buyContainer}>
                    <p className={style.price}>usd{product.price}</p>
                    <p className={style.descrip}>{product.stock} Disponibles</p>
                    <p className={style.descrip}>{product.sales} Vendidos</p>
                    <AddToBag  id={productId} />
                    </div>
                </div>
            </div>
            <div  className={style.container_tres}>
                <h2 className={style.comentarios}>Comentarios</h2>
                <div className={style.containerScore}>
                    {product.Reviews?.length?reviews?.slice(index,index+3).map((r,i)=>
                        <div key={i}>
                            <Rating name='read-only' value={r.score} readOnly />
                            <p>{r.userName}</p>
                            <p>{r.comment[0].toUpperCase()+r.comment.slice(1)}</p>
                        </div>
                    ):<p className={style.placeho} >Aun no hay opiniones de este producto</p>}
                    <div className={style.buttons}>
                        {index-3>=0&&<button className={style.prev} onClick={prev}><FaArrowCircleLeft /> Anterior</button>}
                        {index+3<product.Reviews?.length&&<button className={style.next} onClick={next}>Siguiente<FaArrowCircleRight/></button>}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}