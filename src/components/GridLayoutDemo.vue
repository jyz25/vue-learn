<template>
  <div class="grid-demo-container">
    <h2>CSS Grid 布局示例</h2>
    <div class="grid-container">
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
    </div>
  </div>
</template>

<style scoped>
.grid-demo-container {
  padding: 20px;
}

.grid-container {
  display: grid; /* 将容器设置为Grid布局模式 */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* 响应式列定义：自动适应容器宽度，每列最小150px，最大等分剩余空间 */
  gap: 10px; /* 网格项之间的间距（行间距和列间距都是10px） */
  margin-top: 20px; /* 容器顶部外边距 */
}

.grid-item {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  font-size: 1.2em;
}
</style>