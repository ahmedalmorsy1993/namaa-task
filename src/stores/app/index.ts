import { generateTableHeaders } from '@/utils/generateTableHeaders';
import { defineStore } from 'pinia'
import { IHeader, IMovie, IState } from './app.types';

export const useAppStore = defineStore('app', {
  state: () => ({
    movies: [],
    headers: []
  } as IState),
  actions: {
    getStoredMovies(): IMovie[] {
      return localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies') as string) : [];
    },
    setMovies() {
      this.movies = this.getStoredMovies()
    },
    addMovie(movie: IMovie) {
      this.movies = [...this.movies, movie]
      const storedMovies = this.getStoredMovies()
      storedMovies.push(movie)
      localStorage.setItem('movies', JSON.stringify(storedMovies))
    },
    setHeaders(headers: IHeader[]) {
      this.headers = generateTableHeaders(headers)
    }
  },

})
