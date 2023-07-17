import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
_id: uuid(),
categoryName: "Helmets",
description: "Protective headgear worn while riding a bike to reduce the risk of head injuries",
image: "https://t3.ftcdn.net/jpg/03/03/69/98/360_F_303699826_aJr9I44FUySExOkEUJVYn22SnwQceAM5.jpg"
},

{
_id: uuid(),
categoryName: "Lights",
description: "Devices used to illuminate the road and make cyclists more visible during low light conditions",
image: "https://media.istockphoto.com/id/1312169534/photo/old-vintage-motorcycle-headlight-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=miHZa1_W0ENn-m3NAUUwYbh6_0-pOZnCCG_jT_Lieqk="
},

{
_id: uuid(),
categoryName: "Locks",
description: "Security devices used to prevent theft of bicycles",
image: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg"
},

{
_id: uuid(),
categoryName: "Horns",
description: "Audible devices used to alert pedestrians and other cyclists of a cyclist's presence",
image: "https://bikerrated.com/wp-content/uploads/2019/07/cheapest-motorcycle-horn-305x305.jpg"
},

{
_id: uuid(),
categoryName: "Fenders",
description: "Protective devices attached to the bicycle to prevent mud and water from splashing onto the rider",
image: "https://i.ebayimg.com/images/g/KpYAAOSwRkpiEkie/s-l1200.webp"
}
];
