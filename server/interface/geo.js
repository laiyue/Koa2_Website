import Router from 'koa-router';
import axios from './utils/axios';
import sign from './utils/sign'
import { async } from 'q';

let router = new Router({ prefix: '/geo' })
router.get('/getPosition', async(ctx) => {
    console.log('进来了');
    let { status, data: { province, city } } =
    await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
    if (status === 200) {
        ctx.body = {
            province,
            city
        }
    } else {
        ctx.body = {
            province: '',
            city: ''
        }
    }
})

router.get('/province', async(ctx) => {
    let { status, data: { province } } =
    await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
    ctx.body = {
        province: status === 200 ? province : []
    }
})

router.get('/province:id', async(ctx) => {

    let { status, data: { city } } =
    await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}?sign=${sign}`)
    if (status === 200) {
        ctx.body = {
            city
        }
    } else {
        ctx.body = {
            city: []
        }
    }
})

router.get('/hotCity', async(ctx) => {
    // let list = [
    //   '北京市',
    //   '上海市',
    //   '广州市',
    //   '深圳市',
    //   '天津市',
    //   '西安市',
    //   '杭州市',
    //   '南京市',
    //   '武汉市',
    //   '成都市'
    // ]
    // let result = await City.find()
    // let nList = []
    // result.forEach(item => {
    //   nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
    // })
    // ctx.body = {
    //   hots: nList
    // }
    let {
        status,
        data: {
            hots
        }
    } = await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`);
    if (status === 200) {
        ctx.body = {
            hots
        }
    } else {
        ctx.body = {
            hots: []
        }
    }
})

router.get('/menu', async(ctx) => {
    // const result = await Menu.findOne()
    // ctx.body = {
    //   menu: result.menu
    // }
    let {
        status,
        data: {
            menu
        }
    } = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`);
    if (status === 200) {
        ctx.body = {
            menu
        }
    } else {
        ctx.body = {
            menu: []
        }
    }
})
export default router;