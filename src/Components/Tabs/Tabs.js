import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import * as React from "react";
import Slider from "../Slider/Slider";

 const data = [
   {
     image:
       "https://ddajb7q31joyp.cloudfront.net/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2ZhZTlkZWMyLWZkZTEtNGQ3OS1iNjZmLTU4OTVmODQzMjRhZi9jMTQ2MDEwMS0zNDMzLTQ1NzQtOGU3Yi05MzE1NTE3YWRmNTUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3ODAsImhlaWdodCI6NTIwLCJmaXQiOiJjb3ZlciJ9fX0=",
     heading: "First Slide",
     place: "Goa",
     description:
       "In the quaint village of Moira, five hundred years of history continue to stay alive. Find a place to call home in a modern, open villa - our newest pick - that sits close to a beautiful chapel.",
     Bedrooms: "4",
     Baths: "2",
     price: "200000",
   },
   {
     image:
       "https://i.pinimg.com/originals/07/9d/52/079d52007a29b3ef8c4f574bd5fc73ab.jpg",
     heading: "Second Slide",
     place: "Goa",
     description:
       "Nulla vitae elit libero, a pharetra augue mollis interdum.In the quaint village of Moira, five hundred years of history continue to stay alive. Find a place to call home in a modern, open villa - our newest pick - that sits close to a beautiful chapel.",
     Bedrooms: "4",
     Baths: "2",
     price: "200000",
   },
   {
     image:
       "http://cdn.home-designing.com/wp-content/uploads/2014/07/back-porch-design-600x394.jpeg",
     heading: "Third Slide",
     place: "Goa",
     description:
       "Nulla  In the quaint village of Moira, five hundred years of history continue to stay alive. Find a place to call home in a modern, open villa - our newest pick - that sits close to a beautiful chapel. vitae elit libero, a pharetra augue mollis interdum.",
     Bedrooms: "4",
     Baths: "2",
     price: "200000",
   },
 ];


 const upCome = [
   {
     image:
       "https://i.phuketbuyhouse.com/upload/phuketbuy/Houseimage/default/7/7/0/77086.jpg",
     heading: "Up1",
     description:
       "Lorem ipsum Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide 1q",
     Bedrooms: "4",
     place: "Goa",
     Baths: "2",
     price: "200000",
   },
   {
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--vWbC4AeJNuDSq9GiMEzCubstDZM2xFcjlF7ldBh1_7OSq9oKyQkFEL1jOh5rPlSz3A&usqp=CAU",
     heading: "Up2",
     description:
       "Lorem ipsum Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide ",
     Bedrooms: "4",
     place: "Goa",
     Baths: "2",
     price: "200000",
   },
   {
     image:
       "https://cdn.wowowhome.com/photos/2018/03/Midcentury-Modern-by-Urban-Development-002.jpg",
     heading: "Up3",
     description:
       "Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide Lorem ipsum the place is located in goa one of the favorite we provide   ",
     Bedrooms: "4",
     place: "Goa",
     Baths: "2",
     price: "200000",
   },
 ];

export default function TabPro() {
  return (
    <Tabs
      defaultActiveKey="Featured"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Featured" title="Featured">
        <Slider 
         data = {data}
        />
      </Tab>
      <Tab eventKey="Upcoming" title="Upcoming">
        <Slider
        data={upCome} 
         />
      </Tab>
    </Tabs>
  )
}
