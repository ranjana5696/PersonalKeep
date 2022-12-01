import React from 'react';
import NetflixCard from './NetflixCard';
import sdata from './sdata';



function Netflix() {

      return (
            <>
                  <h1 className='heading-netflix'> List of top 5 Netflix series in 2022 </h1>
                  <div className='cards-netflix' >
                        {sdata.map(function ncard(val) {
                              return (
                                    <NetflixCard
                                          imgsrc={val.imgsrc}
                                          title={val.title}
                                          sname={val.sname}
                                          link={val.link} />
                              );
                        })};
                  </div>
            </>
      )

}

export default Netflix;

