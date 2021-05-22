import React from "react";
import Slider from "react-slick";
import SkillData from './../../components/Header/SkillsTechnology/SkillData';
import './../../../node_modules/slick-carousel/slick/slick.css'; 
import './../../../node_modules/slick-carousel/slick/slick-theme.css';


export default function SliderApp () {
    const renderSlides = () => 
        SkillData.map((skill, index)=> (
            <div key={index}>
                <img className='img-fluid' style={{width: '300px', height: '90px'}} src={skill.logo} alt="" />
            </div>
        ) );
        

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

        return (
            <div id='tech-slider' className='SliderApp mt-3 mb-3' slyle={{width: '350px'}}>
                    <Slider {...settings} > {renderSlides()} </Slider>
            </div>
        );
}
  
  
  
  
//     render() {

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       cssEase: "linear"
//     };
    
//     return SkillData.map((skill, index)=> {
//         return (
//               <Slider {...settings}>
//                 <div>
//                   <img style={{width: '100px'}} src={skill.logo} alt="" />
//                 </div>
               
//               </Slider>
            
//           );
//     })
//   }
// }