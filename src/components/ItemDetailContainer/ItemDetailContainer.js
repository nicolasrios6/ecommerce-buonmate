import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {doc, getDoc} from 'firebase/firestore'
import db from "../../utils/firebaseConfig"


const ItemDetailContainer = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})

    
    useEffect(() => {
        getProduct()
        .then((prod) => {
            setProduct(prod)
        })
    }, [id])
    
    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log(product.id)
        return product
    }

    // const productFilter = productos.find((product) => {
    //     return product.id == id
    // })

    return (
        <>
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer