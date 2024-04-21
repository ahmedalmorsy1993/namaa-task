import { generateTableHeaders } from '@/utils/generateTableHeaders';
import { defineStore } from 'pinia'
import { IHeader, IState } from './app.types';

export const useAppStore = defineStore('app', {
  state: () => ({
    items: [],
    headers: []
  } as IState),
  actions: {
    getStoredItems(): any[] {
      return localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items') as string) : [];
    },
    setItems<T>(itemValues: T[]) {
      this.items = itemValues || this.getStoredItems()
    },
    addItem<T>(item: T) {
      this.items = [...this.items, item]
      const storeItems = this.getStoredItems()
      storeItems.push(item)
      localStorage.setItem('items', JSON.stringify(storeItems))
    },
    setHeaders(headers: IHeader[]) {
      this.headers = generateTableHeaders(headers)
    }
  },

})
