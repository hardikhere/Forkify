import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy ="https://cors-anywhere.herokuapp.com/";
        const key = '462b1cc8d4f2730081462fbc65136320';
        try {
           const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
/*
const proxy ="https://cors-anywhere.herokuapp.com/";
        const key = '462b1cc8d4f2730081462fbc65136320';
        try {
           const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);*/