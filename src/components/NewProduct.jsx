import { useEffect, useState } from "react";
import { db, storage } from "../database/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function RegisterProduct() {
  const [nome, setNome] = useState("")
  const [valor, setValor] = useState("")
  const [desricao, setDesricao] = useState("")
  const [categoria, setCategoria] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [progress, setProgress] = useState(0)
  const [produtos, setProdutos] = useState([])

  const handleUpload = (event) => {
    event.preventDefault()
    const file = event.target[0]?.files[0]
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },

      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImageURL(url)
          console.log(url)
        })
      }

    )

  }

  const productColectionRef = collection(db, "produtos")

  async function createProduct() {
    console.log({ nome, valor, desricao, categoria })

    const product = await addDoc(productColectionRef, {
      nome,
      valor,
      desricao,
      categoria,
      imageURL

    });
    setNome("")
    setCategoria("")
    setValor("")
    setDesricao("")
    setImageURL("")
  }

  return (
    <div>
      <div><h1>Cadastrar novo produto</h1></div>
      <div className="flex flex-col">
        <input
          className="w-96 h-9 rounded-lg px-3, my-5"
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input
          className="w-96 h-9 rounded-lg px-3, my-5"
          placeholder="Descrição"
          type="text"
          value={desricao}
          onChange={e => setDesricao(e.target.value)}
        />

        <input
          className="w-96 h-9 rounded-lg px-3, my-5"
          placeholder="Categoria"
          type="text"
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
        />

        <input
          className="w-96 h-9 rounded-lg px-3, my-5"
          placeholder="Valor"
          type="number"
          value={valor}
          onChange={e => setValor(e.target.value)}
        />
        <div className="w-96 h-9 rounded-lg px-3, my-5">
          <form onSubmit={handleUpload}>
            <input
              placeholder="Imagem"
              type="file"
              onChange={e => setImageURL(e.target.value)}
            />
            <button type="submit">Enviar imagem</button>
          </form>
          {imageURL && <progress value={progress} max="100" />}


        </div>
        <div className="justify-end">
          <button onClick={createProduct} className="md:w-48 md:h-20 w-72 h-16 my-20 bg-amber-400 rounded-2xl md:mr-16 mb-8 drop-shadow-xl shadow-inner">Adicionar Produto</button>
        </div>
      </div>
    </div>
  )
}
