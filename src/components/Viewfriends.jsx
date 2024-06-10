import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewfriends = () => {
    const[data,setdata]=useState([])
    const fetchData=()=>{
    axios.get("https://friendsapi-re5a.onrender.com/view").then(
        (response=>{
        setdata(response.data)
        })
    ).catch().finally()}
    useEffect(()=>{fetchData()},[])

  return (
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">friendName</th>
      <th scope="col">friendNickName</th>
      <th scope="col">DescribeYourFriend</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
         return       <tr>
      <th scope="row">1</th>
      <td>{value.name}</td>
      <td>{value.friendName}</td>
      <td>{value.friendNickName}</td>
      <td>{value.DescribeYourFriend}</td>
    </tr>
            }
        )
    }
   
  </tbody>
</table>

    </div>
  )
}

export default Viewfriends