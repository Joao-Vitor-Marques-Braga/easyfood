import { FaHamburger } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";
import { FaIceCream } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaInfo } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { collection, query, onSnapshot, } from "firebase/firestore";
import { db } from "../database/firebase";
import { useEffect, useState } from "react";

export function Menu() {
  const [produtos, setProdutos] = useState([]);
  const [quantity, setQuantity] = useState(0);

  function AddQuantity() {
    setQuantity(quantity + 1);
  }

  function RemoveQuantity(){
    if(quantity === 0){
      alert("Não é possível reduzir quantidade")
    } else{
      setQuantity(quantity - 1);
    }
  }


  useEffect(() => {
    const q = query(collection(db, "produtos"));
    onSnapshot(q, (querySnapshot) => {
      setProdutos(querySnapshot.docs.map(doc => ({
        data: doc.data()
      })));
    })
  }, [])

  return (
    <div className="align-middle justify-center text-center">

      <div className="">
        <h1 className="text-amber-400 text-xl font-bold">C A R D Á P I O</h1>
      </div>
      <div className="my-6">
        <h1 className="text-6xl font-bold">Conheça nosso cardápio!</h1>
      </div>

      <div className="flex flex-row">
        <button className="w-auto h-12 bg-white hover:bg-amber-400 flex flex-row px-5 py-3 rounded-2xl mr-2 drop-shadow-2xl">
          <FaHamburger className="my-1 mx-2" />
          <h1 className="font-semibold">Burgers</h1>
        </button>
        <button className="w-auto h-12 bg-white hover:bg-amber-400 flex flex-row px-5 py-3 rounded-2xl mx-2 drop-shadow-2xl">
          <BiSolidDrink className="my-1 mx-2" />
          <h1 className="font-semibold">Bebidas</h1>
        </button>
        <button className="w-auto h-12 bg-white hover:bg-amber-400 flex flex-row px-5 py-3 rounded-2xl mx-2 drop-shadow-2xl">
          <FaIceCream className="my-1 mx-2" />
          <h1 className="font-semibold">Sobremesas</h1>
        </button>
      </div>

      <div className="grid grid-cols-5 md:grid md:grid-flow-row">
        {
          produtos.map(function (e) {
            return (
              <>
                <div className="w-52 h-64 bg-white drop-shadow-2xl rounded-2xl py-3 my-5 hover:bg-amber-400">
                  <div className="max-w-40 max-h-36 mx-auto">
                    <img className="max-w-40 max-h-36 mx-auto" src={e?.data?.imageURL} alt="" />

                  </div>
                  <div className="text-center">
                    <h1 className="text-black">{e?.data?.nome}</h1>
                    <h1 className="text-black">R$:{e?.data?.valor},00</h1>
                  </div>
                  <div className="flex flex-row mx-4">
                    <button onClick={RemoveQuantity} className="w-8 h-8 bg-white border-solid border-2 border-black rounded-lg hover:bg-amber-400 hover:text-white">
                      <FiMinus className="my-1 mx-auto" />
                    </button>
                    <div className="w-8 h-8 bg-white border-solid border-2 border-black">
                      <h1 className="mx-2">{quantity}</h1>
                    </div>
                    <button onClick={AddQuantity} className="w-8 h-8 bg-white border-solid border-2 border-black rounded-lg hover:bg-amber-400 hover:text-white">
                      <FaPlus className="my-1 mx-auto" />
                    </button>
                    <button className="w-8 h-8 bg-white border-solid border-2 border-black rounded-lg hover:bg-amber-400 hover:text-white mx-1">
                      <HiMiniShoppingBag className="my-1 mx-auto" />
                    </button>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <button className="w-8 h-8 bg-white border-solid border-2 border-black rounded-lg hover:bg-amber-400 hover:text-white">
                          <FaInfo className="my-1 mx-auto" />
                        </button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0">
                          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] max-w-3xl max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-orange-50 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                            <Dialog.Title className="text-amber-400 m-0 text-lg font-semibold">I N G R E D I E N T E S</Dialog.Title>
                            <div className="flex flex-row my-10 ">
                              <div className="w-72 h-72 ">
                                <img src={e?.data?.imageURL} alt="" />
                              </div>
                              <div className="w-96 h-72">
                                <h1 className="px-12 py-14">{e?.data?.desricao}</h1>
                              </div>
                            </div>
                            <Dialog.Close asChild>
                              <button
                                className="text-white bg-black w-12 h-12 absolute top-[20px] right-[30px] inline-flex items-center justify-center rounded-full"
                                aria-label="Close"
                              >
                                <Cross2Icon />
                              </button>
                            </Dialog.Close>
                          </Dialog.Content>
                        </Dialog.Overlay>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
