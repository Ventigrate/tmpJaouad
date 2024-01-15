import { createContext, Dispatch, SetStateAction } from "react";

interface MyContextProps {
  arbeidsOngevalData: ArbeidsOngevalDataProps;
  setArbeidsOngevalData: Dispatch<SetStateAction<ArbeidsOngevalDataProps>>;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);
