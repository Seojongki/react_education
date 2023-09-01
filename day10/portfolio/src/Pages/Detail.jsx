import React from 'react'
import { useParams } from 'react-router-dom' 

 
function Detail(data) {

  const params = useParams();

  console.log("detail-params==>: ",params.id);

  //데이터에서 빼 써야 됨
  console.log('detail--->:', data)
  
  return (
    <div className="detail">

    {
      data && data?.data?.map((country,i) => {  
        //console.log(country.altSpellings[0]," / ",params.id);
        
        return(
          
          (country.altSpellings[0] === params.id) &&          
          <div key={country.altSpellings[0]} className='nation'>
            
            <div className='nation-flg'>
              <img 
                className='nation-flgs'
                src={country.flags.png}
              />
            </div>
            <div className='nation-text'>
              <p className='font1'>국가명 : {country.capital[0]} {country.translations.kor.common}</p>
              <p>population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</p>
              <p>region : {country.region}</p>
            </div>
          </div>
          


        )
      })
    }

</div>
  )

  
  
  
}

export default Detail