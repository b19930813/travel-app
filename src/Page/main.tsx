import React, { ReactElement } from 'react';
import Card from '../Component/Frame/card';
import Grid from '@mui/material/Unstable_Grid2';
import '../Component/Css/basic.css'
import Box from '@mui/material/Box';
import { DataFunction, Travel, DaySchedule } from '../Function/DataController'

function App() {


  const [statetravel, setTravel] = React.useState(Array<Travel>)

  React.useEffect(() => {
   
   
}, [])

const GetTravelList = () => {
  const df = new DataFunction();
  let result = df.GetAllTravel();

  
  return result;
}

const showResult = (travelList: Array<Travel>) =>{
 
  const elements = [
   
  ]
   
   let travel = new Travel();
   travel.Title = "東京五日遊";
   travel.Remark = "暢遊東京";
   travel.TravelDate = new Date("2022-09-04");
   travel.ImagePath = "https://imgur.com/Dk0U6fh.jpg";

   let travel2 = new Travel();
   travel2.Title = "歐洲五日遊";
   travel2.Remark = "暢遊歐洲";
   travel2.ImagePath = "https://imgur.com/y0ive8d.jpg"
   travel2.TravelDate = new Date("2022-09-20");

   const df = new DataFunction();
   let result = df.GetAllTravel();

  console.log("Get travel List");
  
  console.log(result);
  console.log(`取得 travelList Length : ${travelList.length}`);
 
  travelList.map((row) => {
    elements.push(Card(travel));
    elements.push(Card(travel2));
  })
   
  
      elements.push(Card(travel));
    elements.push(Card(travel2));
  console.log("push done");
  return elements;
}


return(

  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {/* {Card("Title")} */}
    
    {showResult(GetTravelList())}
    </Grid>
  </Box>

)



}

export default App;
