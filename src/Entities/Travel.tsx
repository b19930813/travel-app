
import { Collection } from 'fireorm';

@Collection()
 class Travel {
  id: string = "";
  name: string = "";
  Day: string ="";
}

export default {Travel}