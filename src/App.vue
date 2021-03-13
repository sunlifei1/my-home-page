<template>
  <div style='width:100%;height:100vh' @click='bodyClick'>
    <draggable v-model="myArray" group='site'>
      <transition-group>
        <div class='parent_item' v-for="element in myArray" :key="element.id">
          <div class="item" v-if="!element.sonItem">
            <a class="a_style" :href="element.url"> {{element.title}}</a>

          </div>
          <div class="item_wrap" v-else @click.stop='itemWrapClick(element.id)'>
            <div class="mini_item" v-for="element in element.sonItem" :key="element.id"> {{element.title}}</div>
            <div class="model_wrap" v-if='modelWrapIsShow[element.id]'>
              <draggable v-model="element.sonItem" group='site'>
                <transition-group style="width:100%;height:50vh;display:block">
                  <div class='parent_item' v-for="element in element.sonItem" :key="element.id">
                    <div class="item">
                      {{element.title}}
                    </div>
                    <span class="title">{{element.title}}</span>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </div>
          <span class="title">{{element.title}}</span>
        </div>
      </transition-group>
    </draggable>
    <div class="add_item_wrap" @click='addSite'>
      <div class='item'>
        +
      </div>
      <span class="title">加站</span>
    </div>
    <div class="add_item_wrap" @click='addGroup'>
      <div class='item'>
        +
      </div>
      <span class="title">加组</span>
    </div>

    <van-dialog v-model="show" :title="addTitle" show-cancel-button>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="标题" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="网址" label="网址" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { syncFunc } from './api/index'
export default {
  name: 'Home',
  components: {
    draggable,
  },
  data() {
    return {
      addTitle: '',
      username: '',
      password: '',
      show: false,
      modelWrapIsShow: {},
      myArray: [
        {
          id: 1,
          url: 'https://www.baidu.com',
          title: '每日逛',
          sonItem: [
            {
              title: 99,
              id: 99,
              url: 'https://www.baidu.com',
            },
          ],
        },
        {
          id: 2,
          url: 'https://www.fuliba2020.net',
          title: '福利吧',
        },
        {
          title: '百度',
          id: 3,
          url: 'https://www.baidu.com',
          title: '百度',
        },
        {
          title: '吾爱破',
          id: 4,
          url: 'https://www.52pojie.cn/index.php',
        },
        {
          title: 5,
          id: 5,
          url: 'https://www.baidu.com',
        },
        {
          title: 6,
          id: 6,
          url: 'https://www.baidu.com',
        },
        {
          title: 7,
          id: 7,
          url: 'https://www.baidu.com',
        },
        {
          title: 8,
          id: 8,
          url: 'https://www.baidu.com',
        },
        {
          title: 9,
          id: 9,
          url: 'https://www.baidu.com',
        },
        {
          title: 10,
          id: 10,
          url: 'https://www.baidu.com',
        },
      ],
    }
  },
  methods: {
    syncData() {
      syncFunc().then((res) => {
        console.log(res.data)
        this.myArray = res.data.data
      })
    },
    onSubmit(values) {
      console.log('submit', values)
      let id = new Date().getTime()
      this.myArray.push({
        name: 9,
        id: id,
        url: 'https://www.baidu.com',
        title: 9,
      })
    },
    bodyClick() {
      Object.keys(this.modelWrapIsShow).forEach((item) => {
        console.log(item)
        this.modelWrapIsShow[item] = false
      })
      this.$forceUpdate()
    },
    addSite() {
      this.addTitle = '新增站点'
      this.show = true
    },
    addGroup() {
      // this.show = true
      let id = new Date().getTime()
      this.myArray.push({
        name: 66,
        id: id,
        sonItem: [],
        title: 66,
      })
    },
    itemWrapClick(id) {
      console.log('点击')
      console.log(id)
      if (this.modelWrapIsShow[id]) {
        this.modelWrapIsShow[id] = !this.modelWrapIsShow[id]
      } else {
        this.modelWrapIsShow[id] = true
      }
      this.$forceUpdate()
      console.log(this.modelWrapIsShow)
    },
    itemClick(url) {
      console.log(url)
      var a = document.createElement('a')
      a.setAttribute('href', url)
      a.setAttribute('target', '_blank')
      a.click()
    },
  },
  created() {
    this.syncData()
  },
}
</script>
<style lang="less">
.item {
  background-color: rgb(109, 180, 91);
  width: 13vw;
  height: 13vw;
  border-radius: 10px;
  text-align: center;
  line-height: 13vw;
  margin: 0 auto;
}
.item_wrap {
  background-color: #ddd;
  border: 1px solid #ccc;
  width: 13vw;
  height: 13vw;
  border-radius: 10px;
  text-align: center;
  // line-height: 30px;
  margin: 0 auto;
  overflow: hidden;
}
.parent_item {
  //background-color: pink;
  width: 16vw;
  height: 16vw;
  border-radius: 10px;
  text-align: center;
  // line-height: 16vw;
  float: left;
  margin: 2.5vw 1.5vw 2.5vw 1.5vw;
}
.add_item_wrap {
  // background-color: pink;
  width: 16vw;
  height: 16vw;
  border-radius: 10px;
  text-align: center;
  // line-height: 16vw;
  float: left;
  margin: 2.5vw 1.5vw 2.5vw 1.5vw;
}
.model_wrap {
  position: fixed;
  background-color: #ccc;
  width: 100%;
  height: 40vh;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  float: left;
  // margin: 5px;
  left: 0px;
  bottom: 0;
  z-index: 99;
}
.mini_item {
  // background-color: pink;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  float: left;
  margin: 5px;
}
.title {
  width: 100%;
  height: 2vw;
  font-size: 10px;
}
.a_style {
  width: 13vw;
  height: 13vw;
  display: block;
}
</style>
