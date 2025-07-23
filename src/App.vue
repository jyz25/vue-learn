<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="vue-logo">
    <h1>Vue Slot学习案例</h1>

    <SlotDemo>
      <!-- 匿名插槽内容 -->
      <p>这是填充到默认插槽的内容</p>
      <p>可以包含多个元素</p>

      <!-- 具名插槽内容 -->
      <template #header>
        <div>这是自定义头部内容</div>
      </template>

      <template #content>
        <div>
          <p>这是自定义主体内容</p>
          <ul>
            <li>列表项 1</li>
            <li>列表项 2</li>
            <li>列表项 3</li>
          </ul>
        </div>
      </template>

      <template #footer>
        <div>这是自定义底部内容</div>
      </template>

      <!-- 作用域插槽内容 -->
      <template #user="slotProps">
        <div class="user-profile">
          <h4>用户信息</h4>
          <p>姓名: {{ slotProps.user.name }}</p>
          <p>年龄: {{ slotProps.user.age }}</p>
          <p>邮箱: {{ slotProps.user.email }}</p>
        </div>
      </template>
    </SlotDemo>
  </div>
</template>

<script>
import SlotDemo from './components/SlotDemo.vue'

export default {
  name: 'App',
  components: {
    SlotDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 添加logo样式 */
.vue-logo {
  width: 150px;
  /* 调整宽度 */
  height: auto;
  /* 保持宽高比 */
  margin-bottom: 20px;
  /* 底部间距 */
}

.user-profile {
  text-align: left;
  padding: 10px;
  background-color: #e3f2fd;
  border-radius: 4px;
}
</style>