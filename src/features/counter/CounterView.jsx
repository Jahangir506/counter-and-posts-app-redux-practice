import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";


const CounterView = () => {
    const count = useSelector((state) => state.counter.count)

    const disPatch = useDispatch()

    return(
        <>
             <div className="text-center">
                <h1 className="text-4xl font-bold">Counter App</h1>
                <p className="text-xl font-bold pt-2">Count: {count} </p>
                <div className="pt-3">
                    <button onClick={()=>disPatch(increment())} className="bg-gray-400 px-2">increment</button>
                    <button onClick={()=>disPatch(decrement())} className="bg-gray-400 px-2 ml-3">decrement</button>
                    <button onClick={()=>disPatch(reset())} className="bg-gray-400 px-2 ml-3">reset</button>
                    <button onClick={()=>disPatch(increaseByAmount(5))} className="bg-gray-400 px-2 ml-3">Increse By 5</button>
                </div>
             </div>
        </>
    )}
export default CounterView;