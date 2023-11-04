import React from "react";
import { Image } from "react-bootstrap";
import "./styleBannerRight.scss";

function BanerRight() {
  return (
    <div>
      <a href="#" className="right-banner hidden max-w-[391px]">
        <Image
          src="https://cdn.nhathuoclongchau.com.vn/unsafe/391x120/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Sub_Banner782x240_fa75f79f84.jpg"
          alt="banner"
          className="rounded-xl"
          width={391}
          height={120}
        />
      </a>
      <div className="quick_access_container mt-4 d-flex flex-row align-items-stretch justify-between">
        <a
          className="item-suggest"
          href="https://nhathuoclongchau.com.vn/don-thuoc"
        >
          <div className="item-suggest__image">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/smalls/can_mua_thuoc_40x40_3x_59367d7177.png"
              alt="icon"
              className="h-8 w-8 md:h-10 md:w-10"
              width={40}
              height={40}
              style={{ marginLeft: 19 }}
            />
          </div>
          <div className="item-suggest__text">
            <p className="css-2ich9w">Cần mua thuốc</p>
          </div>
        </a>
        <div className="item-suggest">
          <div className="item-suggest__image">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tu_van_voi_duoc_sy_40x40_3x_aaa988a1a2.png"
              alt="icon"
              className="h-8 w-8 md:h-10 md:w-10"
              width={40}
              height={40}
              style={{ marginLeft: 28 }}
            />
          </div>
          <div className="item-suggest__text">
            <p className="css-2ich9w">Tư vấn với dược sỹ</p>
          </div>
        </div>
        <a
          className="item-suggest"
          href="https://nhathuoclongchau.com.vn/he-thong-cua-hang"
        >
          <div className="item-suggest__image">
            <Image
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tim_nha_thuoc_gan_day_40x40_3x_a116d4c818.png"
              alt="icon"
              className="h-8 w-8 md:h-10 md:w-10"
              width={40}
              height={40}
              style={{ marginLeft: 35 }}
            />
          </div>
          <div className="item-suggest__text">
            <p className="css-2ich9w">Tìm nhà thuốc gần đây</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BanerRight;
