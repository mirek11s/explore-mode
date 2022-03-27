import axios from 'axios';
import {TRENDING_SONGS} from '../../../components/ExploreMode/constants'


//simple api request
export function requestGetTrendingSongs() {
    return axios.request({
        method: 'get',
        url: TRENDING_SONGS
    })
}
