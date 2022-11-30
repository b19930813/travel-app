import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import { Collection, getRepository } from 'fireorm';
import { DataFunction , Travel} from  '../Function/DataController'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";
import { Console } from 'console';


export default function BasicButtons() {
  
  const handleCreateData = () =>{
    const df = new DataFunction();
    let travel = new Travel();
    travel.Title = "MyTitle111";
    travel.Location = "Location1111!";
    travel.TravelDate = new Date();
    travel.Remark = "TEST_GG11";
   
  let result = df.CreateTravel(travel);
   console.log(`新增一筆資料，結果 : ${result}`);
  }

  const handleReadAllData = () =>{
    const df = new DataFunction();
    let result = df.GetAllTravel();
    console.log(result);
  }
 
  const handleReadDataByTitle = () =>{
    const df = new DataFunction();
    let result = df.GetAllTravelByTitle("MyTitle");
    console.log(result);
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handleCreateData}> 建立一筆資料</Button>
      <Button variant="text" onClick={handleReadAllData}> 讀取全部資料</Button>
      <Button variant="text" onClick={handleReadDataByTitle}> 讀取一筆資料</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}