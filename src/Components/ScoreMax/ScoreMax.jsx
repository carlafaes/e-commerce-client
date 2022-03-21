import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import CardProduct from '../CardProduct/index';
import Carousel from 'react-elastic-carousel';
import getReview from '../../Redux/Actions/reviewsActions';
import './Styles/ScoreMax.modules.css'

export default function ScoreMax(){
    const dispatch = useDispatch();
    const review= useSelector((state)=> state.reviewsScore.reviews)
    console.log(review,'REVIEW SELECTOR')

    useEffect(()=>{
        dispatch(getReview())
        console.log(getReview(),' este es el getReview')
      },[])

      const breakPoints = [
        { width: 100, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 },
      ];

      return(
          <div>
              <h2 className='text_shop'>Productos Destacados</h2>
              <Carousel
              className='carousel_score'
              breakPoints={breakPoints}
              enableAutoPlay
              autoPlaySpeed={1500}
              itemPadding={[10, 10]}
              focusOnSelect={false}>
                  {review && review.length !== 0 ? (
                      review.map((el, index)=>(
                           <CardProduct {...el}/>
                      ))
                  ): (
                    <h1 className="no_found_score">No existen mejores puntuados☹️</h1>
                  )}
                
              </Carousel>

          </div>
      )
}