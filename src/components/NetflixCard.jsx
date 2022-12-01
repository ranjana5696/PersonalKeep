import React from 'react';
import sdata from './sdata';

export default function NetflixCard(sdata) {
      return (
            <>

            <div className='card-netflix'>
                  <img src={sdata.imgsrc} alt="mypic" className='card_img-netflix' width='100%' height='75%' />
                  <div className='card_info-netflix'>
                        <span className='card_category-netflix'> {sdata.title} </span>
                        <h3 className='card_title-netflix'> {sdata.sname} </h3>
                        <a href="https://www.netflix.com/in/title/80100172" target="_blank">
                              <button className='btn-netflix'> Watch Now </button>
                        </a>
                  </div>
            </div>

            </>
      )
}
