<template>
    <div class="demo-container">
        <div class="demo-sidebar">
            <h2>学习目录</h2>
            <ul class="demo-list">
                <li>
                    <router-link to="/box-model">CSS盒模型 (外边距/内边距)</router-link>
                </li>
                <li>
                    <router-link to="/slot-demo">Vue插槽 (Slot) 演示</router-link>
                </li>
                <li>
                    <router-link to="/grid-layout">CSS Grid 布局示例</router-link>
                </li>
            </ul>
        </div>
        <div class="demo-content">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.demo-container {
    display: flex;
    min-height: 100vh;
}

.demo-sidebar {
    width: 250px;
    background-color: #f5f5f5;
    padding: 20px;
    border-right: 1px solid #ddd;
}

.demo-list {
    list-style: none;
    padding: 0;
}

.demo-list li {
    margin: 10px 0;
}

.demo-list a {
    text-decoration: none;
    color: #333;
    padding: 8px 12px;
    display: block;
    border-radius: 4px;
}

.demo-list a:hover,
.demo-list a.router-link-exact-active {
    background-color: #42b983;
    color: white;
}

.demo-content {
    flex: 1;
    padding: 30px;
}
</style>