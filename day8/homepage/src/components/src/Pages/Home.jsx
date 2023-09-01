import React from 'react'
import { Link } from 'react-router-dom';

function Home({data}) {
  console.log('home: ', data);
  const totalCount = data?.response?.body?.totalCount;
  // console.log('totalCount= ', totalCount);
  console.log()

  return (
    <div className="home">
        <h1>home</h1>
        {
          data && data.response.body.items.map((item,i) => {
            return(
              <p key={i}>
                {item.districtName}
                <Link to={`detail/${i}`}> 자세히 보기</Link>
              </p>
            )
          })
        }
   
    </div>
  )
}

export default Home