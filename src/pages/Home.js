import React, { useState, useEffect } from "react";
import Flex from "../components/Flex";
import Header from "../components/Header";
import { FiImage } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";
import { BiDotsHorizontal } from "react-icons/bi";
import Images from "../components/Images";

const Home = () => {
  const [verify, setVerify] = useState(false)
  return (
    <>
      <div className="bg-[#F7F9FB]">
        <Header show={true} />
        <div className="container mx-auto mt-10 ">
          <Flex className="gap-x-10">
            <div className="w-3/4 ">
              {/* New Post */}
              <div className="bg-white p-8 rounded-md shadow-lg relative mb-9">
                <p className="text-[#181818] uppercase font-medium font-nunito text-base border-b border-solid border-red-500 pb-4 mb-8">
                  new post
                </p>
                <div>
                  <input
                    className="w-full outline-none font-nunito font-normal text-lg placeholder:text-[#181818]/20"
                    type="text"
                    placeholder="Whats on your mind?"
                  />
                </div>
                <div>
                  {/*  {image && (
                    <img src={image} alt="" className="w-[100px] h-[100px]" />
                  )} */}

                  <label>
                    <input type="file" name="" id="" className="hidden" />
                    <FiImage className="text-2xl absolute bottom-[45px] right-[80px]" />
                  </label>

                  <RiSendPlaneFill className="bg-primary text-white p-2 text-4xl absolute bottom-[40px] right-[30px] rounded-md cursor-pointer" />
                </div>
              </div>
              {/* post */}

              <div className="bg-white pb-8 pt-4 rounded-md shadow-lg mb-9 relative ">
                <BiDotsHorizontal className="text-right ml-auto text-3xl mb-5 mr-6 cursor-pointer" />

                <div className="absolute right-0 top-12 bg-[#f4f4f4] border border-solid border-[#181818] p-5 w-[180px] rounded-lg">
                  <p className="border-solid border-b border-[#ddd] pb-3 mb-2 flex items-center gap-x-3">
                    Edit Post <AiOutlineEdit className="text-lg" />
                  </p>
                  <p className=" flex items-center gap-x-3">
                    Delete Post <AiTwotoneDelete className="text-lg" />
                  </p>
                </div>

                <Flex className="items-center px-8 py-5 gap-5 border-t border-solid border-red-500">
                  <div>
                    <Images
                      className={`w-[100px] rounded-full`}
                      imgsrc="assets/avatar.png"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold font-nunito text-base text-[#181818]">
                      jhgjhg
                    </h3>
                    <p className="font-normal font-nunito text-xs text-[#181818]">
                      Product designer at Commandor Corp.
                    </p>
                  </div>
                </Flex>
                <p className="px-8 font-normal font-nunito text-sm mb-4 text-[#181818]">
                  Lorem ipsum dolor sit amet.
                </p>

                {/* <div className="px-8">
                  <ModalImage small="" large="" />
                </div> */}
              </div>
            </div>
            <div className="w-1/4">
              <div className="bg-white pb-8 rounded-md shadow-lg relative mb-9">
                <Images imgsrc="assets/cover.png" className="w-full" />
                <div className="flex justify-center -mt-12 mb-4">
                  <Images
                    imgsrc="assets/avatar.png"
                    className="shadow-lg rounded-full w-[75px]"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold font-nunito text-base text-[#181818]">
                    "jghjhgh"
                  </h3>
                  <p className="font-normal font-nunito text-sm text-[#181818] max-w-[300px] mx-auto mt-4">
                    jhjhg
                  </p>
                </div>
              </div>
            </div>
          </Flex>
        </div>
      </div>

      {/* <Flex className="h-screen justify-center items-center bg-[#F7F9FB] absolute top-0 left-0 w-full">
        <div className="bg-white shadow-lg w-1/2 px-5 py-10 rounded-3xl">
          <h2 className="text-center text-4xl font-semibold font-nunito text-primary">
            Please Veryfi your mail
          </h2>
        </div>
      </Flex> */}
    </>
  );
};

export default Home;
