<template>
  <div class="sidebar">
    <p>Popular Tags</p>
    <div class="tag-list">
      <a href="" class="tag-pill tag-default" v-for="tag in tags" :key="tag">{{tag}}</a>
    
    </div>
  </div>
</template>

<script>
  import {getTags} from "../../../api/tag"
  
  export default {
    name: "TagList",
    data() {
      return {
        //标签列表
        tags: []
      }
    },
    created() {
      this.getTagList()
    },
    methods: {
      async getTagList() {
        const res = await getTags()
        console.log(res)
        this.tags = res.data.tags
      }
    }
  }
</script>

<style scoped>

</style>
