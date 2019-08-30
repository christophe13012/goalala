import axios from 'axios'

export function getMatches(){
  return axios.get("http://livescore-api.com/api-client/scores/live.json?key=Q1oLS45eYnsAYMry&secret=hewVWNyqKnjwULGLM5wFaBU8ZmIY9awr");
}