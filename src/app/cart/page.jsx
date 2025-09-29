import { List } from "@mui/material";

export default function Cart() {
  return (
    <div className="w-xs bg-[#d1d4e3] rounded-xl h-screen">
      <div className="flex p-2 justify-around">
        <h1 className="text-green-900 font-bold">Cart</h1>
        <h3 className="text-red-500 font-bold">clear</h3>
      </div>
      <div>
        <List>
            
        </List>
      </div>
    </div>
  );
}
