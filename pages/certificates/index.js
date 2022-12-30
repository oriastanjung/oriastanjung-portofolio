import React from "react";
import Layout from "../../components/Layout";
import ApplicationWindow from "../../components/ApplicationWindow";
import certificatesIcon from "../../assets/certificates.png";
import Certificate1IMG from "../../assets/certificates/certificate-01.png";
import Certificate2IMG from "../../assets/certificates/certificate-02.png";
import Certificate3IMG from "../../assets/certificates/certificate-03.png";
import Certificate4IMG from "../../assets/certificates/certificate-04.png";
import Certificate5IMG from "../../assets/certificates/certificate-05.png";
import Certificate6IMG from "../../assets/certificates/certificate-06.png";
import Certificate7IMG from "../../assets/certificates/certificate-07.png";
import Certificate8IMG from "../../assets/certificates/certificate-08.png"
import Certificate9IMG from "../../assets/certificates/certificate-09.png"
import Certificate10IMG from "../../assets/certificates/certificate-10.png"
// import Certificate8IMG from "../../assets/certificates/certificate-08.png";
// import Certificate9IMG from "../../assets/certificates/certificate-09.png";
// import Certificate10IMG from "../../assets/certificates/certificate-010.png";
// import Certificate11IMG from "../../assets/certificates/certificate-011.png";
import Image from "next/image";



// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function certificates() {
  return (
    <Layout>
      <main>
        <ApplicationWindow
          iconWindow={certificatesIcon}
          windowTitle={"Certificates"}
        >
          <div className="swiper-container">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate1IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate2IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate3IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate4IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate5IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate6IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate7IMG} />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate8IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate9IMG} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="certificates-img"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Image src={Certificate10IMG} />
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </ApplicationWindow>
      </main>
    </Layout>
  );
}

export default certificates;
