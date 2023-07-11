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
image: "https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
},

{
_id: uuid(),
categoryName: "Lights",
description: "Devices used to illuminate the road and make cyclists more visible during low light conditions",
image: "https://images.unsplash.com/photo-1523224818356-ca48ca49eb75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
},

{
_id: uuid(),
categoryName: "Locks",
description: "Security devices used to prevent theft of bicycles",
image: "https://media.istockphoto.com/id/468515920/photo/padlock-security-lock-blocking-the-motorcycle-wheel-on-street.jpg?s=612x612&w=0&k=20&c=zxZS_1qnx8yvPaqxB33RVCamg6sBfSdmugvbAxo3OWQ="
},

{
_id: uuid(),
categoryName: "Horns",
description: "Audible devices used to alert pedestrians and other cyclists of a cyclist's presence",
image: "https://t4.ftcdn.net/jpg/01/28/25/15/360_F_128251545_XSwuxkW5xeyLrPflTed4iFusd7OAp59D.jpg"
},

{
_id: uuid(),
categoryName: "Fenders",
description: "Protective devices attached to the bicycle to prevent mud and water from splashing onto the rider",
image: "https://www.shutterstock.com/image-photo/motorcycles-standing-row-on-asphalt-260nw-311706425.jpg"
}
];
