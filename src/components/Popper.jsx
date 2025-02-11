import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from '../redux/colorSlice';


const Popper = () => {
  const dispatch = useDispatch()
  const donutColors = ["#7B3F00", "#F8E8D0", "#FFC0CB", "#FF5733", "#8B4513"];

  return (
    <div className='w-[200px] h-[40px] bg-amber-50 mx-auto rounded-full mb-4 flex justify-evenly items-center'>
      {donutColors.map((color, index) => (
        <button
          key={index}
          className="h-8 w-8 rounded-full cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => dispatch(setColor(color))}
        ></button>
      ))}
    </div>
  );
};

export default Popper;
