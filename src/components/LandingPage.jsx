import { motion } from "framer-motion";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import Burger from "../assets/burgers.png";
import { useState } from "react";
import { Menu } from "./Cardapio";


export function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <div className="h-screen">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="flex justify-between">
                <div>

                </div>
                <div className="md:flex md:justify-end md:h-14 md:text-lg md:font-semibold max-md:hidden">
                    <a href="" className="md:px-8 md:my-auto ">Serviços</a>
                    <a href="" className="md:px-8 md:my-auto">Cardápio</a>
                    <button className="md:w-60 md:h-14 bg-white md:px-8 md:flex md:flex-row md:rounded-xl md:drop-shadow-lg md:hover:bg-amber-400 md:transition-all md:ease-out md:delay-75">
                        <h1 className="my-auto mx-3">Meu carrinho</h1>
                        <div className="w-8 h-8 bg-amber-400 rounded-lg my-auto">
                            <HiMiniShoppingBag className="my-2 mx-auto" />
                        </div>
                    </button>
                </div>

            </div>
            <div className="flex justify-end mb-2 -my-8">
                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden w-12 h-12 bg-white drop-shadow-xl shadow-inner rounded-full py-3">
                        <IoMenuSharp className="mx-auto text-2xl font-bold" />
                    </button>
                </div>
            <motion.div
                className="w-full h-full"
                initial="hidden"
                animate={isMenuOpen ? "visible" : "hidden"}
                variants={variants}
            >
                <div className="w-full h-ful bg-white drop-shadow-xl shadow-inner rounded-xl py-2 px-2">
                    <a href="" className="md:px-8 md:my-auto block font-semibold px-2 my-2 hover:bg-amber-50 rounded-md hover:shadow-xl">Serviços</a>
                    <a href="" className="md:px-8 md:my-auto block font-semibold px-2 my-2 hover:bg-amber-50 rounded-md hover:shadow-xl">Cardápio</a>
                    <a href="" className="md:px-8 md:my-auto block font-semibold px-2 my-2 hover:bg-amber-50 rounded-md hover:shadow-xl">Meu carrinho</a>
                </div>
            </motion.div>

            <div className="md:flex md:flex-row md:my-28">
                <div className="max-w-screen-sm">
                    <div >
                        <h1 className="text-7xl font-semibold">Escolha sua Comida <span className="text-amber-400">favorita.</span></h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Aproveite nosso cardápio! Escolha o que desejar e receba em sua casa de forma rápida e segura.</h1>
                    </div>

                    <div className="my-14 md:flex md:flex-row">
                        <button className="md:w-48 md:h-20 w-72 h-16 bg-amber-400 rounded-2xl md:mr-16 mb-8 drop-shadow-xl shadow-inner">
                            <h1 className="text-white font-semibold text-xl">Ver cardápio</h1>
                        </button>
                        <button className="w-72 h-20 bg-white rounded-2xl drop-shadow-lg flex flex-row">
                            <div className="bg-amber-400 w-14 h-14 rounded-2xl ml-4 py-2 my-auto">
                                <FaPhoneAlt className="text-white text-4xl mx-auto  " />
                            </div>
                            <h1 className="my-auto text-2xl font-semibold mx-4">(64) 993048083</h1>
                        </button>
                    </div>

                    <div className="flex flex-row">
                        <a className="w-14 h-14 bg-white drop-shadow-lg rounded-2xl mr-8">
                            <FaInstagram className="text-black text-3xl mx-auto my-3" />
                        </a>
                        <a className="w-14 h-14 bg-white drop-shadow-lg rounded-2xl">
                            <FaWhatsapp className="text-black text-3xl mx-auto my-3" />
                        </a>
                    </div>
                </div>

                <div className="max-md:hidden md:flex md:flex-row md:mx-60">
                    <div className="w-96 h-96 bg-amber-400 rounded-3xl">
                        <img src={Burger} alt="" className="-mx-14 my-12 h-96 w-96" />
                    </div>
                </div>
            </div>
        </motion.div>
        <Menu/>
        </div>
    )
}
