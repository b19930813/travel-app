

import { initializeApp } from "firebase/app";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export class Travel {
  public Title: string;
  public TravelDate: Date;
  public Location: string;
  public Remark: string;
  constructor() {
    this.Title = "";
    this.TravelDate = new Date();
    this.Location = "";
    this.Remark = "";
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

  CreateTravel(travel: Travel): boolean {
    let result: boolean = false;
    try {
      const docRef = addDoc(collection(this.db, "users"), {
        Title: travel.Title,
        Date: travel.TravelDate,
        Location: travel.Location,
        Remark: travel.Remark
      });
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
    const querySnapshot = getDocs(collection(this.db, "users"));
    querySnapshot.then(data => {
      data.forEach((doc) => {
        let travel = new Travel();
        travel.Title = doc.data()["Title"];
        travel.TravelDate = doc.data()["TravelDate"];
        travel.Location = doc.data()["Location"];
        travel.Remark = doc.data()["Remark"];
        result.push(travel);
      })
    });
    return result;
  }


  GetAllTravelByTitle(Title:string): Travel {
    let result = new Travel;
    const querySnapshot = getDocs(collection(this.db, "users"));
     
    return result;
  }


}


export default { DataFunction, Travel };