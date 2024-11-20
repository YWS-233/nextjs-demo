import React, { useEffect, useState } from "react";
import { List, Skeleton, Divider, Carousel } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import img1 from "@/assets/images/td1.jpg";
interface DataType {
  gender: string;
  link: string;
  img: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const CarouselList = [
    {
      link: "https://www.operagallery.com/viewing-rooms/the-collector-1994",
    },
    {
      link: "https://www.operagallery.com/viewing-rooms/the-collector-1994",
    },
    {
      link: "https://www.operagallery.com/viewing-rooms/the-collector-1994",
    },
  ];
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        const list = body.results.map((item: DataType) => {
          return {
            ...item,
            img: "https://www.operagallery.com/storage/viewingrooms/Opera-Gallery-Singapore-The-Collector-©-Oddinary-studios.jpg",
            link: "https://www.operagallery.com/viewing-rooms/the-collector-1994",
          };
        });
        setData([...data, ...list]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className="mx-auto">
      <Carousel effect="fade" arrows infinite className="bg-[#364d79]">
        {CarouselList.map((item, index) => {
          return (
            <div key={index} className="bg-[#0f6] h-[400px]">
              <a href={item.link} className="w-max">
                <Image
                  src={img1}
                  alt="ccc"
                  width="1280"
                  height="400"
                  className="h-[400px]"
                />
              </a>
            </div>
          );
        })}
      </Carousel>
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
        className="w-[100%] min-w-[1280px]  mt-4"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <div className="h-[60px] w-[100%]">
                <a href={item.link} className="w-[50%] h-[60px]">
                  <Image src={img1} alt="ccc" width="100" height="100" />
                </a>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
}
