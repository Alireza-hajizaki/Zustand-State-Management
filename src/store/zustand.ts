import {create} from 'zustand';
import {mountStoreDevtool } from 'simple-zustand-devtools'

interface CounterStore {
    counter: number;
    max: number;
    increment: () => void;
    reset: () => void;
    decrement: () => void;
}

const useCounterStore = create<CounterStore>(set =>({
    counter:0,
    max: 0,
    increment: () => set( store => ({counter: store.counter +1 })),
    reset: () => set( () => ({max :10 })),
    decrement: () => set( store => ({counter: store.counter -1 })),
}))

if(process.env.NODE_ENV === 'development')
 mountStoreDevtool('Counter Store', useCounterStore)

export default useCounterStore;