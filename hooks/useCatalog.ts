import {AppDispatch} from "../app/store";
import {collection, onSnapshot, query} from "@firebase/firestore";
import {db} from "../firebase";
import {addItem, ItemPayload} from "../features/catalog/catalogSlice";
import {CATALOG_COLLECTIONS, DEBUG} from "../constants";
import {useAppDispatch} from "../app/hooks";
import {useEffect} from "react";

const snapshotWrapper = (collections: {[key: string]: string}, coll: string, dispatch: AppDispatch) => {
    const q = query(collection(db, collections[coll]));

    const listner = onSnapshot(q, (querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
            const data = doc.data();
            if (data.active){
                const {active = true, ...payload} = {...data, category: coll};

                try{
                    dispatch(addItem(payload as ItemPayload));
                }
                catch (e){
                    if (DEBUG) console.log(e);
                }
            }
        })
    });
}

const useCatalog = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const collections = CATALOG_COLLECTIONS as {[key: string]: string}

        for (const coll in collections){
            snapshotWrapper(collections, coll, dispatch);
        }
    }, []);
}

export default useCatalog;