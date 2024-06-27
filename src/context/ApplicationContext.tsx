import React, { createContext, useReducer, ReactNode } from "react";

// Define types for state and action
interface StateType {
  loading: boolean;
  sidebarToggle: boolean;
}

type ActionType = {
  type: string;
  // Define additional action payload types if needed
};

// Initial state
const INITIAL_STATE: StateType = {
  loading: false,
  sidebarToggle: false,
};

// Create context
export const ApplicationContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

// Reducer function
const applicationReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    // Define cases for different actions if needed
    default:
      return state;
  }
};

// Context Provider component
export const ApplicationContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(applicationReducer, INITIAL_STATE);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};
