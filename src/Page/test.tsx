import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import { Collection, getRepository } from 'fireorm';
import { DataFunction, Travel, DaySchedule } from '../Function/DataController'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { Console } from 'console';


export default function BasicButtons() {

  const [text, setText] = React.useState("");
const handleDeleteData = () =>{
  const df = new DataFunction();
df.DeleteAllTravel("Test1211");
}

  const handleCreateData = () => {
    const df = new DataFunction();

    let travel = new Travel();
    travel.Title = "Test1211";
    travel.TravelDate = new Date();
    travel.Remark = "Update Remark";
    let result = df.CreateTravel(travel);
    console.log(`新增一筆資料，結果 : ${result}`);
  }

  const handleReadAllData = () => {
    const df = new DataFunction();
    let result = df.GetAllTravel();
    console.log(result);
  }

  const handleReadDataByTitle = () => {
    const df = new DataFunction();
    let result = df.GetAllTravelByTitle("MyTitle");
    console.log(result);
  }

  const handleCreateDayData = () => {
    const df = new DataFunction();
    let daySchedule = new DaySchedule();
    daySchedule.Title = "大阪";
    daySchedule.Display = "去哪";
    daySchedule.Temp = "Remark";

    let result = df.CreateDaySChedule(daySchedule);
    console.log(`新增一筆資料，結果 : ${result}`);
  }

  const handleReadTest = () => {
 
    
   
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handleCreateData}> 建立一筆資料</Button>
      <Button variant="text" onClick={handleReadAllData}> 讀取全部資料</Button>
      <Button variant="text" onClick={handleReadDataByTitle}> 讀取一筆資料</Button>
      <Button variant="text" onClick={handleCreateDayData}> 建立一筆Day資料</Button>
      <Button variant="text" onClick={handleDeleteData}> 刪除</Button>
      <Button variant="text" onClick={handleReadTest}> Read Test</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}