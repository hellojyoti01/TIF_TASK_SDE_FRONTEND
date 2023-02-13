import React, { createContext, useContext, useState } from "react";
const initialValues = {
 
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
};

export const DataContext = createContext<{
  state: typeof initialValues;
  setState: React.Dispatch<React.SetStateAction<any>>;
} | null>(null);


//typeof initialValues
const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(initialValues);

  return (
    <DataContext.Provider value={{ state, setState }}>
      {children}
    </DataContext.Provider>
  );
};





export const useData = () => {
  const data = useContext(DataContext);
  return data;
};

export default DataProvider
