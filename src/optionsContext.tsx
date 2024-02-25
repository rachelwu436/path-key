// Answers to questionaire globally managed via React Context API.

import React, { createContext, useContext, ReactNode, useState } from "react";

// We need to define the context type
type SelectedOptionsContextType = {
    selectedOptions: String[];
    addOption: (option: String) => void;
    removeOption: (option: String) => void;
};

const SelectedOptionsContext = createContext<SelectedOptionsContextType | undefined>(undefined);

export const SelectedOptionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState<String[]>([]);

    // when a user clicks on an option, should add it to the array
    const addOption = (option: String) => {
        setSelectedOptions((prevOptions) => [...prevOptions, option]);
    };

    // we also include a remove option function that can be used later for when a user makes a mistake and wants to change their selection
    const removeOption = (option: String) => {
        setSelectedOptions((prevOptions) => prevOptions.filter((item) => item !== option));
    };

    return (
        <SelectedOptionsContext.Provider
            value={{ selectedOptions, addOption, removeOption }}
        >
            {children}
        </SelectedOptionsContext.Provider>
    );
};

export const useSelectedOptions = (): SelectedOptionsContextType => {
    const context = useContext(SelectedOptionsContext);
    if (!context) {
        throw new Error('useSelectedOptions must be used within a SelectedOptionsProvider');
    }
    return context;
};
