import { create } from "zustand"

export interface iData {
  content: string
  role: string
}

export type Store = {
  data: iData[]
  updData: (payload: iData) => void
  isLoadingData: boolean
  setIsLoadingData: (payload: boolean) => void
}

export const useStore = create<Store>()((set) => ({
  data: [],
  updData: (payload) => set((state) => ({ data: [...state.data, payload] })),
  isLoadingData: false,
  setIsLoadingData: (payload) => set(() => ({ isLoadingData: payload })),
}))
