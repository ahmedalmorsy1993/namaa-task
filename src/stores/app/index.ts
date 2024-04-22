import { generateTableHeaders } from '@/helpers/generateTableHeaders';
import { defineStore } from 'pinia'
import { IHeader, IState } from './app.types';

export const useAppStore = defineStore('app', {
  state: () => ({
    items: [],
    headers: []
  } as IState),
  actions: {
    updateLocalStorage(values: any[]) {
      localStorage.setItem('items', JSON.stringify(values))
    },
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
      this.updateLocalStorage(storeItems)
    },
    getItem(id: string) {
      const items = this.getStoredItems()
      return items.find((el: { id: string }) => el.id == id)
    },
    removeItem(id: string) {
      this.items = this.items.filter((el: { id: string }) => el.id !== id)
      this.updateLocalStorage(this.items)

    },
    updateItem(id: string, value: any) {
      const items = this.getStoredItems()
      const index = items.findIndex((item: { id: string }) => item.id === id);
      if (index !== -1) {
        items[index] = value;
        this.items = items;

        this.updateLocalStorage(this.items);
      }
    },
    setHeaders(headers: IHeader[]) {
      this.headers = generateTableHeaders(headers)
    }
  },

})
