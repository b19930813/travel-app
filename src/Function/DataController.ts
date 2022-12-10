

import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export class Travel {
  public Title: string;
  public TravelDate: Date;
  public ImagePath: string;
  public Remark: string;

 
  constructor() {
    this.Title = "";
    this.TravelDate = new Date();
    this.ImagePath = "";
    this.Remark = "";
  
  }

}

export class DaySchedule{
  public Title:string;
  public Display:string;
  public Temp: string;
  constructor(){
    this.Title = "";
    this.Display = "";
    this.Temp = "";
  }
}

export class DataFunction {
  private app;
  private db;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyAmEOD4LEy_SvBEMHKoWhGVKlG8KE8wniY",
      authDomain: "travel-4c6a8.firebaseapp.com",
      projectId: "travel-4c6a8",
      storageBucket: "travel-4c6a8.appspot.com",
      messagingSenderId: "680694107044",
      appId: "1:680694107044:web:30c5fa6040a008583dcf31",
      measurementId: "G-K5JMVNTKP9"
    };
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
  }

  //#region Travel CRUD

  CreateTravel(travel: Travel): boolean {
    let result: boolean = false;
    try {
      const docRef = addDoc(collection(this.db, "Travel"), {
        Title: travel.Title,
        Date: travel.TravelDate,
        ImagePath: travel.ImagePath,
        Remark: travel.Remark,      
    
      });
    
      console.log(`Array temp = [{"Title":"大阪1","Display":"去1哪","Temp":"Remar1k"}]`);
      console.log("Create Travel Date Success");
      result = true;
    } catch (e) {
      console.error("Create Travel Date Fail", e);
      result = false;
    }
    return result;
  }

  GetAllTravel(): Array<Travel> {
    let result = new Array<Travel>;
    const querySnapshot = getDocs(collection(this.db, "Travel"));
    querySnapshot.then(data => {
      data.forEach((doc) => {
        let travel = new Travel();
        travel.Title = doc.data()["Title"];
        travel.TravelDate = doc.data()["TravelDate"];
        travel.Remark = doc.data()["Remark"];
        travel.ImagePath = doc.data()["ImagePath"]
        result.push(travel);
      })
    });
    return result;
  }


  GetAllTravelByTitle(Title:string): Travel {
    let result = new Travel;
    const querySnapshot = getDocs(collection(this.db, "Travel"));
    querySnapshot.then(data => {
      let FindData = data.docs.find(travel => travel.data()["Title"] == Title)?.data();
      if(FindData !== undefined){
      
         result.Title = FindData["Title"];
         result.TravelDate = FindData["TravelDate"];
         result.Remark = FindData["Remark"];
         console.log(`Find Title ${Title}`);
      }
      else{
        console.log(`Can't Find Title ${Title}`);
      }
    })
   
    return result;
  }
  //#endregion


  CreateDaySChedule(daySchedule: DaySchedule): boolean {
    let result: boolean = false;
    try {
      const docRef = addDoc(collection(this.db, "Travel"), {
        Title: daySchedule.Title,
        Display: daySchedule.Display,
        Temp: daySchedule.Temp,
      });
      console.log("Create DaySchedule Success");
      result = true;
    } catch (e) {
      console.error("Create DaySchedule Fail", e);
      result = false;
    }
    return result;
  }



}


export default { DataFunction, Travel };
