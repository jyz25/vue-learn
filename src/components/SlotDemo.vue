<template>
  <div class="slot-demo">
    <h2>Slot Demo Component</h2>
    
    <!-- 匿名插槽 -->
    <div class="default-slot">
      <h3>默认插槽</h3>
      <slot>默认内容：当没有提供插槽内容时显示</slot>
    </div>
    
    <!-- 具名插槽 -->
    <div class="named-slots">
      <h3>具名插槽</h3>
      <div class="slot-container">
        <slot name="header">默认头部</slot>
        <slot name="content">默认内容</slot>
        <slot name="footer">默认底部</slot>
      </div>
    </div>
    
    <!-- 作用域插槽 -->
    <div class="scoped-slot">
      <h3>作用域插槽</h3>
      <slot name="user" :user="currentUser">
        {{ currentUser.name }} (默认显示格式)
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com'
      }
    }
  }
}
</script>

<style scoped>
.slot-demo {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.default-slot, .named-slots, .scoped-slot {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px dashed #666;
  border-radius: 4px;
}

.slot-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.slot-container > div {
  padding: 10px;
  background-color: #f5f5f5;
}
</style>