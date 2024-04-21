// Utilities
import { generateTableHeaders } from '@/utils/generateTableHeaders';
import { defineStore } from 'pinia'
import { IHeader, IMovie, IState } from './app.types';

export const useAppStore = defineStore('app', {
  state: () => ({
    movies: [],
    headers: []
  } as IState),
  actions: {
    setMovies(movies: IMovie[]) {
      this.movies
    },
    addMovie(movie: IMovie) {
      this.movies = [...this.movies, movie]
    },
    setHeaders(headers: IHeader[]) {
      this.headers = generateTableHeaders(headers)
    }
  },

})
