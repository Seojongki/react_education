import React from 'react'
import { useParams } from 'react-router-dom' 

 
function Detail({data}) {
  // 정보에서 url parameter로 전달한 key(id)값 
  const params = useParams();

  console.log("detail-params: ",Number(params.id));

  //데이터에서 빼 써야 됨
  console.log('detail:', data)

  return (
    <div>Detail
      <h1>상세페이지</h1>
      <p>미세먼지 : {params.id}</p>
      <p>data{data?.response?.body?.items[Number(params.id)].districtName}</p>
    </div>
  )
}

export default Detail