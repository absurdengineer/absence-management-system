import { createContext, useContext, useReducer, Dispatch } from "react";
import { Reducer } from "../types/function.types";
import { ChildrenProps } from "../types/prop.types";
import { GlobalState } from "../types/state.types";

const GlobalContext = createContext<{
  globalState: GlobalState;
  dispatch: Dispatch<React.SetStateAction<any>>;
}>({
  globalState: { absenses: [], loading: false },
  dispatch: () => null,
});

const globalReducer: Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ABSENCE":
      const memberAbsence = [
        {
          id: 123,
          name: "string",
          type: "string",
          startDate: "string",
          endDate: "string",
          memberNote: "string",
          admitterNote: "string",
          confirmedAt: "null",
          createdAt: "string",
          rejectedAt: "null",
        },
      ];
      return { ...state, absenses: memberAbsence };
    default:
      return state;
  }
};

const initialValue: GlobalState = {
  absenses: [],
  loading: false,
};
export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [globalState, dispatch] = useReducer(globalReducer, initialValue);
  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const { globalState, dispatch } = useContext(GlobalContext);
  return [globalState, dispatch] as const;
};
