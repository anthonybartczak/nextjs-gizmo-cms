import React from "react";
import CountUp from 'react-countup';
import LogoAboutUs from "../LogoAboutUs";

export default function AboutUs() {
    return (
        <div id="about-us" className="scroll-m-20">
            <div
                className="flex flex-wrap mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36">
                <div className="order-last xl:-order-1 grow pt-6 xl:pt-2 max-w-xl justify-center">
                    <LogoAboutUs />
                </div>
                <div className="mx-auto mt-16">
                    <h2
                        className="text-4xl text-center xl:text-left tracking-tight font-bold text-gray-900 sm:text-5xl md:text-4xl">
                        <span className="block xl:inline underline underline-offset-8 decoration-indigo-600">O
                            nas</span>
                    </h2>
                    <div className="grid justify-items-center xl:justify-items-start">
                        <h3
                            className="text-center xl:text-left mt-5 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            Elit
                            sunt amet
                            fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                            irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </h3>
                        <div className="grid mt-6 xl:mt-14">
                            <div className="mt-4 flex flex-wrap">
                                <CountUp start={0} end={13} delay={0}>
                                    {({ countUpRef }) => (
                                    <>
                                        <span className="text-indigo-600 text-2xl xl:text-4xl ml-1" ref={countUpRef} />
                                        <span className="text-indigo-600 text-2xl xl:text-4xl mr-1">+</span>
                                        <p className="text-2xl xl:text-4xl mx-1">lat doświadczenia</p>
                                    </>
                                    )}
                                </CountUp>
                            </div>
                            <div className="mt-4 flex">
                                <CountUp start={0} end={10000} delay={0}>
                                    {({ countUpRef }) => (
                                    <>
                                        <span className="text-indigo-600 text-2xl xl:text-4xl ml-1" ref={countUpRef} />
                                        <span className="text-indigo-600 text-2xl xl:text-4xl mr-1">+</span>
                                        <p className="text-2xl xl:text-4xl mx-1">klientów</p>
                                    </>
                                    )}
                                </CountUp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}