"use client";
import { toggleMode } from "@/redux/darkMode/darkModeSlice";
import type { Store } from "@/types/store/storeType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Switch from "react-switch";

const Toggle = () => {
  const darkMode = useSelector((state: Store) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <label className="flex items-center gap-2">
      <span
        //   className={`${darkMode ? "invisible" : "visible"}`}
        className="visible dark:invisible"
      >
        light
      </span>
      <Switch
        checked={darkMode}
        onChange={() => dispatch(toggleMode())}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <span
        //   className={`${darkMode ? "visible" : "invisible"}`}
        className="invisible dark:visible"
      >
        dark
      </span>
    </label>
  );
};

export default Toggle;
