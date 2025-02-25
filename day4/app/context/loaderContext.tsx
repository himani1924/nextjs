'use client'

import React, { useContext, createContext, useState, ReactNode }from 'react'


interface LoaderContextType{
    loading: boolean,
    setLoading: (loading: boolean)=>void
}
export const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(false);
  
    return (
      <LoaderContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoaderContext.Provider>
    );
  };

  export const useLoader = (): LoaderContextType => {
    const context = useContext(LoaderContext);
  
    if (!context) {
      throw new Error('useLoader must be used within a LoaderProvider');
    }
  
    return context;
  };