<template>
  <div class="box-model-demo">
    <h1>CSS盒模型 (Box Model) 演示</h1>
    
    <div class="concept-explanation">
      <h2>核心概念</h2>
      <ul>
        <li><strong>内容区 (Content)</strong>: 元素内容显示区域</li>
        <li><strong>内边距 (Padding)</strong>: 内容区与边框之间的空间（紫色区域）</li>
        <li><strong>边框 (Border)</strong>: 围绕内边距的线条（黑色实线）</li>
        <li><strong>外边距 (Margin)</strong>: 边框外部的空间，用于与其他元素分隔（黄色区域）</li>
      </ul>
    </div>

    <div class="box-demo-container">
      <div class="box-model-example">
        <div class="box-content">内容区域</div>
      </div>
    </div>

    <div class="code-example">
      <h3>对应CSS代码:</h3>
      <pre>
.box-model-example {
  /* 外边距 - 黄色区域 */
  margin: 40px;
  /* 边框 - 黑色线条 */
  border: 5px solid black;
  /* 内边距 - 紫色区域 */
  padding: 30px;
  /* 内容区大小 */
  width: 200px;
  height: 100px;
}

.box-content {
  background-color: #42b983;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
      </pre>
    </div>
  </div>
</template>

<style scoped>
.box-model-demo {
  max-width: 800px;
  margin: 0 auto;
}

.concept-explanation {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.box-demo-container {
  background-color: #fff3cd; /* 黄色背景表示外边距区域 */
  padding: 20px;
  border-radius: 8px;
}

.box-model-example {
  background-color: #d1c4e9; /* 紫色背景表示内边距区域 */
  margin: 40px;
  border: 5px solid black;
  padding: 30px;
  width: 200px;
  height: 100px;
}

.box-content {
  background-color: #42b983;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.code-example {
  margin-top: 30px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

pre {
  background-color: #333;
  color: #fff;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>