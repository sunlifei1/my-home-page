<template>
  <div style='width:100%'>
    <draggable v-model="myArray" group='site'>
      <transition-group>
        <div class='parent_item' v-for="element in myArray" :key="element.id">
          <div class="item" v-if="!element.sonItem">
            {{element.name}}
          </div>
          <div class="item_wrap" v-else @click='itemWrapClick'>
            <div class="mini_item" v-for="element in element.sonItem" :key="element.id"> {{element.name}}</div>

            <div class="model_wrap" v-if='modelWrapIsShow'>
              <draggable v-model="element.sonItem" group='site'>
                <transition-group style="width:100%;height:50vh;display:block">
                  <div class='parent_item' v-for="element in element.sonItem" :key="element.id">
                    <div class="item">
                      {{element.name}}
                    </div>
                    <div class="title">{{element.desc}}</div>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </div>

        </div>
      </transition-group>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'Home',
  components: {
    draggable,
  },
  data() {
    return {
      modelWrapIsShow: false,
      myArray: [
        {
          name: 1,
          id: 1,
          url: 'www.baidu.com',
          sonItem: [
            {
              name: 99,
              id: 99,
              url: 'www.baidu.com',
            },
          ],
        },
        {
          name: 2,
          id: 2,
          url: 'www.baidu.com',
        },
        {
          name: 3,
          id: 3,
          url: 'www.baidu.com',
        },
        {
          name: 4,
          id: 4,
          url: 'www.baidu.com',
        },
        {
          name: 5,
          id: 5,
          url: 'www.baidu.com',
        },
        {
          name: 6,
          id: 6,
          url: 'www.baidu.com',
        },
        {
          name: 7,
          id: 7,
          url: 'www.baidu.com',
        },
        {
          name: 8,
          id: 8,
          url: 'www.baidu.com',
        },
        {
          name: 9,
          id: 9,
          url: 'www.baidu.com',
        },
        {
          name: 10,
          id: 10,
          url: 'www.baidu.com',
        },
      ],
    }
  },
  methods: {
    itemWrapClick() {
      console.log('点击')
      this.modelWrapIsShow = !this.modelWrapIsShow
    },
  },
}
</script>
<style lang="less">
.item {
  background-color: rgb(255, 251, 0);
  width: 13vw;
  height: 13vw;
  border-radius: 10px;
  text-align: center;
  line-height: 13vw;
  margin: 0 auto;
}
.item_wrap {
  background-color: #ddd;
  border: 1px solid #000;
  width: 16vw;
  height: 16vw;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  overflow: hidden;
}
.parent_item {
  background-color: pink;
  width: 16vw;
  height: 16vw;
  border-radius: 10px;
  text-align: center;
  line-height: 16vw;
  float: left;
  margin: 1.5%;
}
.add_item_wrap {
  background-color: pink;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  float: left;
  margin: 5px;
}
.model_wrap {
  position: fixed;
  background-color: rgb(22, 223, 146);
  width: 100%;
  height: 40vh;
  border: 1px solid #000;
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
  background-color: pink;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  float: left;
  margin: 5px;
}
</style>
