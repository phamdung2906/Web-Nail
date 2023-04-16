import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MySlider() {
  const settings = {
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      img: "./bepart/b1.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b2.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b3.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b4.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b5.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b6.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b7.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b8.jpg",
      title: "anh sp1",
    },
    {
      img: "./bepart/b9.jpg",
      title: "anh sp1",
    },
  ];
  return (
    <div className="w-full box-border">
      <Slider {...settings}>
        {data.map((e, i) => {
          return (
            <div key={i}>
              <img
                className="h-60 md:h-80 box-border px-1 w-full"
                src={e.img}
                alt={e.title}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
