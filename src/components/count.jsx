import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "@/redux/slices/counter";
import { Button } from "@mui/material";

export default function Count() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(reset())}>0</Button>
    </div>
  );
}
