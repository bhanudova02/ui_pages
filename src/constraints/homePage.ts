export const headerInfo = {
  title:"Mr Bhanu",
  listInfo:{
    list:["Home","UI One","UI Two","UI Three","UI Four"],
    url:["/","/ui-one","/ui-two","/ui-three","/ui-four"]
  }
}


export const homeSlider = [
    {
      url: '/images/home_carousel/banner1.jpg',
    },
    {
      url: '/images/home_carousel/banner2.jpg',
    },
    {
      url: '/images/home_carousel/banner3.jpg',
    },
  ];

export const cardMainHeading ={title:"GIVE THE CARD",secondTitle:"RELATED TITLE"}

export const responsiveMultiCard = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        sidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        sidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        sidesToSlide: 1
    }
}

export const cardGamesData = [
    { id:1, title: "Title One", images: "/images/card/avatar-1.png", review: "6", price: "20.00$" },
    { id:2, title: "Title Two", images: "/images/card/avatar-2.png", review: "6", price: "20.00$" },
    { id:3, title: "Title Three", images: "/images/card/avatar-3.png", review: "6", price: "20.00$" },
    { id:4, title: "Title Four", images: "/images/card/avatar-4.png", review: "6", price: "20.00$" },
    { id:5, title: "Title Five", images: "/images/card/avatar-5.png", review: "6", price: "20.00$" },
    { id:6, title: "Title Six", images: "/images/card/avatar-1.png", review: "6", price: "20.00$" },
    { id:7, title: "Title Seven", images: "/images/card/avatar-2.png", review: "6", price: "20.00$" },
    { id:8, title: "Title Eight", images: "/images/card/avatar-3.png", review: "6", price: "20.00$" }
];

export interface cardGamesDataTypes {
    id:number;
    title: string;
    images: string;
    price: string;
    review: string,
}


export const deliveryInfo = {
  heading:"Your",
  spanHeading:"Favorite Burger",
  endHeading:"On The Way",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio repudiandae porro, suscipit explicabo distinctio molestias repellendus provident cumque illo, ea perspiciatis, iusto reiciendis. Doloribus suscipit nostrum voluptates odio animi.",
  imgSrc:"/images/home/delivery/delivery.2908e1b4.svg",
  services:[
    {icon:"RiEBike2Fill", text:"Delivery in 30 minutes", margin:'2rem'},
    {icon:"IoFastFood", text:"Free shipping from 50$", margin: '1rem'},
    {icon:"BsDoorOpen", text:"Delivery on your Doorstep", margin:'1rem'},
  ]
} 

