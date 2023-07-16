import { useContext } from "react";
import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
_id: uuid(),
title: "Helmet H2345",
name: "Red Matte Full Face Helmet H2345-C3",
brand: "HelmetPro",
price: "2500",
imageUrl:
"https://img.freepik.com/premium-photo/motorcycle-helmet-white-background-creative-digital-illustration_743855-5710.jpg?w=2000",
fastDelivery: true,
discount: 0.4,
rating: 4.5,
count: 0,
categoryName: "Full Face",
category : "Helmets"
},
{
  _id: uuid(),
  title: "Helmet H3456",
  name: "Black Gloss Full Face Helmet H3456-C1",
  brand: "HelmetPro",
  price: "2800",
  imageUrl: "https://media.istockphoto.com/id/1004781478/photo/motorcycle-helmet-on-white-background.jpg?s=612x612&w=0&k=20&c=1srKwRrC3OeyuxN-tjF3ir9G8h_F86xedphgcctix1c=",
  fastDelivery: true,
  discount: 0.3,
  rating: 4.2,
  count: 0,
  categoryName: "Full Face",
  category : "Helmets"

  },
  
  {
  _id: uuid(),
  title: "Helmet H4567",
  name: "White Matte Open Face Helmet H4567-O1",
  brand: "HelmetPro",
  price: "1800",
  imageUrl: "https://t3.ftcdn.net/jpg/03/03/69/98/360_F_303699826_aJr9I44FUySExOkEUJVYn22SnwQceAM5.jpg",
  fastDelivery: false,
  discount: 0.2,
  rating: 4.0,
  count: 0,
  categoryName: "Open Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H5678",
  name: "Blue Gloss Half Face Helmet H5678-H2",
  brand: "HelmetPro",
  price: "1500",
  imageUrl: "https://img.freepik.com/premium-photo/motorcycle-helmet-white-background-creative-digital-illustration_743855-5710.jpg?w=2000",
  fastDelivery: true,
  discount: 0.1,
  rating: 3.8,
  count: 0,
  categoryName: "Half Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H6789",
  name: "Yellow Matte Full Face Helmet H6789-C4",
  brand: "HelmetPro",
  price: "2600",
  imageUrl: "https://t4.ftcdn.net/jpg/02/50/49/77/360_F_250497727_VtUTcmsTvVFe1DWoKI0fmUjuk2C2hTY3.jpg",
  fastDelivery: true,
  discount: 0.5,
  rating: 4.6,
  count: 0,
  categoryName: "Full Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H7890",
  name: "Orange Gloss Open Face Helmet H7890-O2",
  brand: "HelmetPro",
  price: "2000",
  imageUrl: "https://media.istockphoto.com/id/1004781478/photo/motorcycle-helmet-on-white-background.jpg?s=612x612&w=0&k=20&c=1srKwRrC3OeyuxN-tjF3ir9G8h_F86xedphgcctix1c=",
  fastDelivery: false,
  discount: 0.3,
  rating: 4.3,
  count: 0,
  categoryName: "Open Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H8901",
  name: "Green Matte Half Face Helmet H8901-H3",
  brand: "HelmetPro",
  price: "1700",
  imageUrl: "https://t3.ftcdn.net/jpg/03/03/69/98/360_F_303699826_aJr9I44FUySExOkEUJVYn22SnwQceAM5.jpg",
  fastDelivery: true,
  discount: 0.2,
  rating: 4.1,
  count: 0,
  categoryName: "Half Face",
  category : "Helmets"
  },

{
  _id: uuid(),
  title: "Helmet H9012",
  name: "Pink Gloss Full Face Helmet H9012-C5",
  brand: "HelmetPro",
  price: "2400",
  imageUrl: "https://media.istockphoto.com/id/1004781478/photo/motorcycle-helmet-on-white-background.jpg?s=612x612&w=0&k=20&c=1srKwRrC3OeyuxN-tjF3ir9G8h_F86xedphgcctix1c=",
  fastDelivery: true,
  discount: 0.2,
  rating: 4.4,
  count: 0,
  categoryName: "Full Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H0123",
  name: "Silver Matte Open Face Helmet H0123-O3",
  brand: "HelmetPro",
  price: "1900",
  imageUrl: "https://t3.ftcdn.net/jpg/03/03/69/98/360_F_303699826_aJr9I44FUySExOkEUJVYn22SnwQceAM5.jpg",
  fastDelivery: false,
  discount: 0.1,
  rating: 3.9,
  count: 0,
  categoryName: "Open Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H1234",
  name: "Purple Gloss Half Face Helmet H1234-H4",
  brand: "HelmetPro",
  price: "1600",
  imageUrl: "https://m.media-amazon.com/images/I/618i8O0H8eL.jpg",
  fastDelivery: true,
  discount: 0.3,
  rating: 4.2,
  count: 0,
  categoryName: "Half Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H2345",
  name: "Red Matte Full Face Helmet H2345-C3",
  brand: "HelmetPro",
  price: "2500",
  imageUrl: "https://www.urbanrider.co.uk/media/catalog/product/cache/008f5b54fa8158acf29751501a361c85/b/e/bell-srt-modular-street-helmet-rsd-newport-matte-gloss-metal-red-front-right.jpg",
  fastDelivery: true,
  discount: 0.4,
  rating: 4.5,
  count: 0,
  categoryName: "Full Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H3456",
  name: "Black Gloss Full Face Helmet H3456-C1",
  brand: "HelmetPro",
  price: "2800",
  imageUrl: "https://static7.depositphotos.com/1000833/763/i/950/depositphotos_7631086-stock-photo-motorcycle-helmet.jpg",
  fastDelivery: true,
  discount: 0.3,
  rating: 4.2,
  count: 0,
  categoryName: "Full Face",
  category : "Helmets"
  },
  
  {
  _id: uuid(),
  title: "Helmet H4567",
  name: "White Matte Open Face Helmet H4567-O1",
  brand: "HelmetPro",
  price: "1800",
  imageUrl: "https://static7.depositphotos.com/1000833/763/i/950/depositphotos_7631086-stock-photo-motorcycle-helmet.jpg",
  fastDelivery: false,
  discount: 0.2,
  rating: 4.0,
  count: 0,
  categoryName: "Open Face",
  category : "Helmets"
  },

{
  _id: uuid(),
  title: "Motorbike Light L2345",
  name: "LED Headlight L2345-H1",
  brand: "LightPro",
  price: "1500",
  imageUrl: "https://media.istockphoto.com/id/1312169534/photo/old-vintage-motorcycle-headlight-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=miHZa1_W0ENn-m3NAUUwYbh6_0-pOZnCCG_jT_Lieqk=",
  fastDelivery: true,
  discount: 0.2,
  rating: 4.5,
  count: 0,
  category: "Lights",
  categoryName: "Headlights"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Light L3456",
  name: "Turn Signal Light L3456-T1",
  brand: "LightPro",
  price: "800",
  imageUrl: "https://t3.ftcdn.net/jpg/05/16/68/70/360_F_516687006_ZLB7TRUub6gD1PwpVIVRH4uD8AdQPXLM.jpg",
  fastDelivery: true,
  discount: 0.1,
  rating: 4.2,
  count: 0,
  category: "Lights",
  categoryName: "Turn Signals"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Light L4567",
  name: "Brake Light L4567-B1",
  brand: "LightPro",
  price: "600",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94YsDUSRZmPXCm6vSdI3XZ2odxzr7CVGeg-LAES-keO_eKDQEbwDP3rC0u6yYsGtrlI8&usqp=CAU",
  fastDelivery: true,
  discount: 0.15,
  rating: 4.0,
  count: 0,
  category: "Lights",
  categoryName: "Brake Lights"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Light L5678",
  name: "Tail Light L5678-T1",
  brand: "LightPro",
  price: "700",
  imageUrl: "https://www.wildbike.it/catalogo/28092-home_default/headlight-cone-style-black-5-3-4-custom-motorcycle-and-harley-davidson.jpg",
  fastDelivery: true,
  discount: 0.1,
  rating: 4.3,
  count: 0,
  category: "Lights",
  categoryName: "Tail Lights"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Light L6789",
  name: "Fog Light L6789-F1",
  brand: "LightPro",
  price: "1200",
  imageUrl: "https://i.ebayimg.com/images/g/A~YAAOSwCz1jhBLp/s-l400.jpg",
  fastDelivery: false,
  discount: 0.25,
  rating: 4.1,
  count: 0,
  category: "Lights",
  categoryName: "Fog Lights"
  },
  {
  _id: uuid(),
  title: "Motorbike Light L7890",
  name: "Auxiliary Light L7890-A1",
  brand: "LightPro",
  price: "1000",
  imageUrl: "https://sc04.alicdn.com/kf/HTB1xsD7ckyWBuNjy0Fpq6yssXXa3.jpg",
  fastDelivery: true,
  discount: 0.2,
  rating: 4.4,
  count: 0,
  category: "Lights",
  categoryName: "Auxiliary Lights"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Light L8901",
  name: "Spotlight L8901-S1",
  brand: "LightPro",
  price: "1800",
  imageUrl: "https://i.ebayimg.com/images/g/A~YAAOSwCz1jhBLp/s-l400.jpg",
  fastDelivery: true,
  discount: 0.3,
  rating: 4.6,
  count: 0,
  category: "Lights",
  categoryName: "Spotlights"
  },
  {
    _id: uuid(),
    title: "Motorbike Light L9012",
    name: "License Plate Light L9012-L1",
    brand: "LightPro",
    price: "500",
    imageUrl: "https://5.imimg.com/data5/BE/UJ/TB/SELLER-21637902/motorcycle-indicator.jpeg",
    fastDelivery: true,
    discount: 0.1,
    rating: 4.0,
    count: 0,
    category: "Lights",
    categoryName: "License Plate Lights"
    },
    {
    _id: uuid(),
    title: "Motorbike Light L0123",
    name: "Indicator Light L0123-I1",
    brand: "LightPro",
    price: "400",
    imageUrl: "https://5.imimg.com/data5/BE/UJ/TB/SELLER-21637902/motorcycle-indicator.jpeg",
    fastDelivery: true,
    discount: 0.2,
    rating: 4.2,
    count: 0,
    category: "Lights",
    categoryName: "Indicator Lights"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Light L1234",
    name: "Daytime Running Light L1234-D1",
    brand: "LightPro",
    price: "900",
    imageUrl: "https://5.imimg.com/data5/DF/GX/MY-12454918/hero-splendor-bike-indicator-500x500.jpeg",
    fastDelivery: true,
    discount: 0.15,
    rating: 4.3,
    count: 0,
    category: "Lights",
    categoryName: "Daytime Running Lights"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Light L2345",
    name: "Underglow Light L2345-U1",
    brand: "LightPro",
    price: "1200",
    imageUrl: "https://sc04.alicdn.com/kf/HTB1xsD7ckyWBuNjy0Fpq6yssXXa3.jpg",
    fastDelivery: false,
    discount: 0.3,
    rating: 4.1,
    count: 0,
    category: "Lights",
    categoryName: "Underglow Lights"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Light L3456",
    name: "High Beam Light L3456-H1",
    brand: "LightPro",
    price: "700",
    imageUrl: "https://5.imimg.com/data5/CP/JU/MY-12454918/motorcycle-indicators-250x250.jpg",
    fastDelivery: true,
    discount: 0.1,
    rating: 4.4,
    count: 0,
    category: "Lights",
    categoryName: "High Beam Lights"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Light L4567",
    name: "Taillight L4567-T1",
    brand: "LightPro",
    price: "600",
    imageUrl: "https://5.imimg.com/data5/CP/JU/MY-12454918/motorcycle-indicators-250x250.jpg",
    fastDelivery: true,
    discount: 0.2,
    rating: 4.5,
    count: 0,
    category: "Lights",
    categoryName: "Taillights"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Light L5678",
    name: "Halo Ring Light L5678-H1",
    brand: "LightPro",
    price: "800",
    imageUrl: "https://i.ebayimg.com/images/g/A~YAAOSwCz1jhBLp/s-l400.jpg",
    fastDelivery: true,
    discount: 0.1,
    rating: 4.2,
    count: 0,
    category: "Lights",
    categoryName: "Halo Ring Lights"
    },
    {
      _id: uuid(),
      title: "Motorbike Horn H2345",
      name: "Dual-Tone Horn H2345-D1",
      brand: "HornPro",
      price: "800",
      imageUrl: "https://bikerrated.com/wp-content/uploads/2019/07/cheapest-motorcycle-horn-305x305.jpg",
      fastDelivery: true,
      discount: 0.1,
      rating: 4.3,
      count: 0,
      category: "Horns",
      categoryName: "Dual-Tone Horns"
      },
      
      {
      _id: uuid(),
      title: "Motorbike Horn H3456",
      name: "Air Horn H3456-A1",
      brand: "HornPro",
      price: "1200",
      imageUrl: "https://m.media-amazon.com/images/I/51RxEOnS-XL._AC_UF894,1000_QL80_.jpg",
      fastDelivery: true,
      discount: 0.2,
      rating: 4.5,
      count: 0,
      category: "Horns",
      categoryName: "Air Horns"
      },
      
      {
      _id: uuid(),
      title: "Motorbike Horn H4567",
      name: "Electric Horn H4567-E1",
      brand: "HornPro",
      price: "600",
      imageUrl: "https://ae01.alicdn.com/kf/S811162b680c24d378682d7aa6366c6ceE/Motorcycle-electric-horn-12-24-36-48-60V-1-5A-105db-waterproof-round-horn-horn-suitable.jpg",
      fastDelivery: true,
      discount: 0.15,
      rating: 4.2,
      count: 0,
      category: "Horns",
      categoryName: "Electric Horns"
      },
      
      {
      _id: uuid(),
      title: "Motorbike Horn H5678",
      name: "Compact Horn H5678-C1",
      brand: "HornPro",
      price: "500",
      imageUrl: "https://static-01.daraz.com.np/p/a67e791287b02707dac1b4470681d6d5.jpg",
      fastDelivery: true,
      discount: 0.1,
      rating: 4.0,
      count: 0,
      category: "Horns",
      categoryName: "Compact Horns"
      },
      
      {
      _id: uuid(),
      title: "Motorbike Horn H6789",
      name: "Snail Horn H6789-S1",
      brand: "HornPro",
      price: "700",
      imageUrl: "https://static-01.daraz.com.np/p/a67e791287b02707dac1b4470681d6d5.jpg",
      fastDelivery: true,
      discount: 0.2,
      rating: 4.4,
      count: 0,
      category: "Horns",
      categoryName: "Snail Horns"
      },
      
      {
      _id: uuid(),
      title: "Motorbike Horn H7890",
      name: "Trumpet Horn H7890-T1",
      brand: "HornPro",
      price: "1000",
      imageUrl: "https://m.media-amazon.com/images/I/31NB6512ncL.jpg",
      fastDelivery: true,
      discount: 0.3,
      rating: 4.6,
      count: 0,
      category: "Horns",
      categoryName: "Trumpet Horns"
      },
      
      {
      _id: uuid(),
      title: "Motorbike Horn H8901",
      name: "Train Horn H8901-T1",
      brand: "HornPro",
      price: "2500",
      imageUrl: "https://m.media-amazon.com/images/I/31NB6512ncL.jpg",
      fastDelivery: false,
      discount: 0.4,
      rating: 4.8,
      count: 0,
      category: "Horns",
      categoryName: "Train Horns"
      },
      {_id: uuid(),
title: "Motorbike Horn H9012",
name: "Disc Horn H9012-D1",
brand: "HornPro",
price: "400",
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-7pYS75-22d6wCybYJ8c0xRw4kY6dbbl2IeoH7xtg_oJxltX6cQniuUcN8w1vJbedxk&usqp=CAU",
fastDelivery: true,
discount: 0.1,
rating: 4.2,
count: 0,
category: "Horns",
categoryName: "Disc Horns"
},

{
_id: uuid(),
title: "Motorbike Horn H0123",
name: "Snail Air Horn H0123-S1",
brand: "HornPro",
price: "1500",
imageUrl: "https://m.media-amazon.com/images/I/31NB6512ncL.jpg",
fastDelivery: true,
discount: 0.2,
rating: 4.4,
count: 0,
category: "Horns",
categoryName: "Snail Air Horns"
},

{
_id: uuid(),
title: "Motorbike Horn H1234",
name: "Compact Air Horn H1234-C1",
brand: "HornPro",
price: "1200",
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kL5BZAZ2Y5GTYfho-wdX-oFNFV7OLYvmP6hv9pHYJ_kL2isUy8zKCC5c7aJ_00WekX4&usqp=CAU",
fastDelivery: true,
discount: 0.15,
rating: 4.3,
count: 0,
category: "Horns",
categoryName: "Compact Air Horns"
},

{
_id: uuid(),
title: "Motorbike Horn H2345",
name: "Sports Horn H2345-S1",
brand: "HornPro",
price: "900",
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-7pYS75-22d6wCybYJ8c0xRw4kY6dbbl2IeoH7xtg_oJxltX6cQniuUcN8w1vJbedxk&usqp=CAU",
fastDelivery: true,
discount: 0.1,
rating: 4.1,
count: 0,
category: "Horns",
categoryName: "Sports Horns"
},

{
_id: uuid(),
title: "Motorbike Horn H3456",
name: "Stealth Horn H3456-S1",
brand: "HornPro",
price: "800",
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kL5BZAZ2Y5GTYfho-wdX-oFNFV7OLYvmP6hv9pHYJ_kL2isUy8zKCC5c7aJ_00WekX4&usqp=CAU",
fastDelivery: true,
discount: 0.2,
rating: 4.5,
count: 0,
category: "Horns",
categoryName: "Stealth Horns"
},

{
_id: uuid(),
title: "Motorbike Horn H4567",
name: "Racing Horn H4567-R1",
brand: "HornPro",
price: "1000",
imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kL5BZAZ2Y5GTYfho-wdX-oFNFV7OLYvmP6hv9pHYJ_kL2isUy8zKCC5c7aJ_00WekX4&usqp=CAU",
fastDelivery: true,
discount: 0.25,
rating: 4.6,
count: 0,
category: "Horns",
categoryName: "Racing Horns"
},

{
_id: uuid(),
title: "Motorbike Horn H5678",
name: "Air Raid Horn H5678-A1",
brand: "HornPro",
price: "1800",
imageUrl: "https://static-01.daraz.com.np/p/a67e791287b02707dac1b4470681d6d5.jpg",
fastDelivery: true,
discount: 0.3,
rating: 4.7,
count: 0,
category: "Horns",
categoryName: "Air Raid Horns"
},
{
  _id: uuid(),
  title: "Motorbike Fender F2345",
  name: "Front Fender F2345-F1",
  brand: "FenderPro",
  price: "1200",
  imageUrl: "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/9AYAAOSwKGRhuuVX/$_3.JPG",
  fastDelivery: true,
  discount: 0.1,
  rating: 4.2,
  count: 0,
  category: "Fenders",
  categoryName: "Front Fenders"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Fender F3456",
  name: "Rear Fender F3456-R1",
  brand: "FenderPro",
  price: "1000",
  imageUrl: "https://www.helmetsupplier.com/upfile/product/Prepreg-Carbon-Fiber-motorcycle-parts-Front-Fender.jpg",
  fastDelivery: true,
  discount: 0.2,
  rating: 4.5,
  count: 0,
  category: "Fenders",
  categoryName: "Rear Fenders"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Fender F4567",
  name: "Mudguard Fender F4567-M1",
  brand: "FenderPro",
  price: "800",
  imageUrl: "https://i.ebayimg.com/images/g/xGIAAOSwivlceLGF/s-l1200.webp",
  fastDelivery: true,
  discount: 0.15,
  rating: 4.3,
  count: 0,
  category: "Fenders",
  categoryName: "Mudguard Fenders"
  }
  ,
  {
  _id: uuid(),
  title: "Motorbike Fender F5678",
  name: "Custom Fender F5678-C1",
  brand: "FenderPro",
  price: "1500",
  imageUrl: "https://i.ebayimg.com/images/g/xGIAAOSwivlceLGF/s-l1200.webp",
  fastDelivery: true,
  discount: 0.1,
  rating: 4.0,
  count: 0,
  category: "Fenders",
  categoryName: "Custom Fenders"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Fender F6789",
  name: "Bobber Fender F6789-B1",
  brand: "FenderPro",
  price: "1800",
  imageUrl: "https://www.helmetsupplier.com/upfile/product/Prepreg-Carbon-Fiber-motorcycle-parts-Front-Fender.jpg",
  fastDelivery: true,
  discount: 0.2,
  rating: 4.4,
  count: 0,
  category: "Fenders",
  categoryName: "Bobber Fenders"
  },
  
  {
  _id: uuid(),
  title: "Motorbike Fender F7890",
  name: "Universal Fender F7890-U1",
  brand: "FenderPro",
  price: "900",
  imageUrl: "https://i.ebayimg.com/images/g/KpYAAOSwRkpiEkie/s-l1200.webp",
  fastDelivery: true,
  discount: 0.1,
  rating: 4.2,
  count: 0,
  category: "Fenders",
  categoryName: "Universal Fenders"
  },
  {
    _id: uuid(),
    title: "Motorbike Fender F9012",
    name: "Streetfighter Fender F9012-S1",
    brand: "FenderPro",
    price: "2500",
    imageUrl: "https://www.helmetsupplier.com/upfile/product/Prepreg-Carbon-Fiber-motorcycle-parts-Front-Fender.jpg",
    fastDelivery: true,
    discount: 0.2,
    rating: 4.6,
    count: 0,
    category: "Fenders",
    categoryName: "Streetfighter Fenders"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Fender F0123",
    name: "Carbon Fiber Fender F0123-C1",
    brand: "FenderPro",
    price: "3000",
    imageUrl: "https://m.media-amazon.com/images/I/51iarQRKx+L._AC_UF894,1000_QL80_.jpg",
    fastDelivery: true,
    discount: 0.25,
    rating: 4.7,
    count: 0,
    category: "Fenders",
    categoryName: "Carbon Fiber Fenders"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Fender F1234",
    name: "Off-Road Fender F1234-O1",
    brand: "FenderPro",
    price: "1800",
    imageUrl: "https://www.helmetsupplier.com/upfile/product/Prepreg-Carbon-Fiber-motorcycle-parts-Front-Fender.jpg",
    fastDelivery: true,
    discount: 0.15,
    rating: 4.3,
    count: 0,
    category: "Fenders",
    categoryName: "Off-Road Fenders"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Fender F2345",
    name: "Vintage Fender F2345-V1",
    brand: "FenderPro",
    price: "2200",
    imageUrl: "https://m.media-amazon.com/images/I/41c9GS+cS7L._AC_UF1000,1000_QL80_.jpg",
    fastDelivery: true,
    discount: 0.1,
    rating: 4.4,
    count: 0,
    category: "Fenders",
    categoryName: "Vintage Fenders"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Fender F3456",
    name: "Sportbike Fender F3456-S1",
    brand: "FenderPro",
    price: "2000",
    imageUrl: "https://www.helmetsupplier.com/upfile/product/Prepreg-Carbon-Fiber-motorcycle-parts-Front-Fender.jpg",
    fastDelivery: true,
    discount: 0.2,
    rating: 4.5,
    count: 0,
    category: "Fenders",
    categoryName: "Sportbike Fenders"
    },
    
    {
    _id: uuid(),
    title: "Motorbike Fender F4567",
    name: "Cafe Racer Fender F4567-C1",
    brand: "FenderPro",
    price: "2500",
    imageUrl: "https://m.media-amazon.com/images/I/51iarQRKx+L._AC_UF894,1000_QL80_.jpg",
    fastDelivery: true,
    discount: 0.3,
    rating: 4.8,
    count: 0,
    category: "Fenders",
    categoryName: "Cafe Racer Fenders"
    },
    {
      _id: uuid(),
      title: "Motorbike Lock L2345",
      name: "Chain Lock L2345-C1",
      brand: "LockPro",
      price: "1200",
      imageUrl: "https://i.ebayimg.com/images/g/KpYAAOSwRkpiEkie/s-l1200.webp",
      fastDelivery: true,
      discount: 0.1,
      rating: 4.2,
      count: 0,
      category: "Locks",
      categoryName: "Chain Locks"
      },
      {
      _id: uuid(),
      title: "Motorbike Lock L3456",
      name: "U-Lock L3456-U1",
      brand: "LockPro",
      price: "1000",
      imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg",
      fastDelivery: true,
      discount: 0.2,
      rating: 4.5,
      count: 0,
      category: "Locks",
      categoryName: "U-Locks"
      },
      {
      _id: uuid(),
      title: "Motorbike Lock L4567",
      name: "Disc Lock L4567-D1",
      brand: "LockPro",
      price: "800",
      imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg",
      fastDelivery: true,
      discount: 0.15,
      rating: 4.3,
      count: 0,
      category: "Locks",
      categoryName: "Disc Locks"
      },
      {
      _id: uuid(),
      title: "Motorbike Lock L5678",
      name: "Cable Lock L5678-C1",
      brand: "LockPro",
      price: "1500",
      imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg",
      fastDelivery: true,
      discount: 0.1,
      rating: 4.0,
      count: 0,
      category: "Locks",
      categoryName: "Cable Locks"
      },
      {
      _id: uuid(),
      title: "Motorbike Lock L6789",
      name: "Alarm Lock L6789-A1",
      brand: "LockPro",
      price: "1800",
      imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg",
      fastDelivery: true,
      discount: 0.2,
      rating: 4.4,
      count: 0,
      category: "Locks",
      categoryName: "Alarm Locks"
      },
      {
      _id: uuid(),
      title: "Motorbike Lock L7890",
      name: "Smart Lock L7890-S1",
      brand: "LockPro",
      price: "900",
      imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg",
      fastDelivery: true,
      discount: 0.1,
      rating: 4.2,
      count: 0,
      category: "Locks",
      categoryName: "Smart Locks"
      },
      {
      _id: uuid(),
      title: "Motorbike Lock L8901",
      name: "Cylinder Lock L8901-C1",
      brand: "LockPro",
      price: "2000",
      imageUrl: "https://images-fe.ssl-images-amazon.com/images/I/610RqeWIMtL._AC_UL330_SR330,330_.jpg",
      fastDelivery: false,
      discount: 0.3,
      rating: 4.8,
      count: 0,
      category: "Locks",
      categoryName: "Cylinder Locks"
      },
    
    
];